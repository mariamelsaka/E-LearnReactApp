import SectionOne from "../../components/Courses/SectionOne";
import axios from "axios";
import { useState, useEffect,useMemo,useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Row from "../../components/Courses/Row";
import { FixedSizeList } from 'react-window';
import { Idata, IdataAPI } from "../../interfaces";
import { MakeArrayForSeed } from "../../utils/functions";
import { fakerEN } from "@faker-js/faker";
import Animate from "../../components/Animate";

const Courses = () => {
    useEffect(() => {
    document.title = "Courses";
  }, []);
  const { hash } = useLocation();

  useEffect(() => {
        if (hash) {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
  }, [hash]);
    
      const [apiRes, setApiRes] = useState<IdataAPI[]>([]);
        async function fetchData() {
          try {
            const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
              params: {
                part: 'snippet',
                q: 'front+end+courses',
                type: 'video',
                key: 'AIzaSyCO6naYq8d3ySZ7NkYzMGp95yj_hTlGE1k',
                maxResults: 25,
              },
            });
            setApiRes(response.data.items); // Update the state with the fetched data
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    }
      
    useEffect(() => {
      fetchData();
    }, []);//why not add api res here??
    
    const CoursePrice = MakeArrayForSeed(() => fakerEN.commerce.price({ min: 500, max: 2000 }),25);
    const CourseNumber = MakeArrayForSeed(() => fakerEN.number.int({ min: 100, max: 2000 }),25); 
    let obj2:Idata;
    const res:Idata[]=[];
    for(let i=0;i<25;i++){
      obj2={
        number:Number(CourseNumber[i]),
        price:Number(CoursePrice[i]),
      }
      res.push(obj2)
    }
    
// -----------------specfic page--------------------------------

const navigateSpecifcic = useNavigate();

const handleClick = useCallback((course:string,data:IdataAPI) => {
          navigateSpecifcic(`/CourseDetailPage/${course}`, { state: { course,data } });
  },[navigateSpecifcic])

const handlers = useMemo(() => {
    return apiRes.map(item => () => handleClick(item.id.videoId, item));
}, [apiRes,handleClick]);

// -----------------specfic page---------------------------------------

// Helper to group items into rows
const groupedItems:IdataAPI[][] = [];
for (let i = 0; i < apiRes.length; i += 3) {
  groupedItems.push(apiRes.slice(i, i + 3));
}


return <>
     <Animate>
      <SectionOne/>
     </Animate>
    

    {/* id for the visit courses button */}
 <Animate>
 <div className="container  pt-6" id="coursesAll">

  {apiRes.length > 0 ? (
          <FixedSizeList
              height={1000}
              width={1200}
              itemCount={groupedItems.length}
              itemSize={550} 
              style={{ overflowY: 'auto' }}
                >
  {({ index, style }) => (
    <div style={style} className="flex gap-6 px-4 pb-[2em]">
      {groupedItems[index].map((item, innerIndex) => {
        const globalIndex = index * 3 + innerIndex;
        return (
          <div
            key={globalIndex}
            className="w-1/3 bg-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-105"
          >
            <Row
              item={item}
              data={res[globalIndex]}
              onClick={handlers[globalIndex]}
            />
          </div>
        );
      })}
    </div>
  )}
</FixedSizeList>
    ) : (
      <p>Loading...</p>
    )}
  </div>
 </Animate>
  


</>
  
};

export default Courses;