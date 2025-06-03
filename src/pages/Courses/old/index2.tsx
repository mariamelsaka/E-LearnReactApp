import { fakerEN } from "@faker-js/faker";
import {MakeArrayForSeed} from "../../utils/functions"
import axios from "axios";
import { useState, useEffect } from "react";
import Button from "../../components/Ui/Button";
import Image from "../../components/Ui/Image";
import { IMAGES } from "../../config/assets";


const Courses = () => {
  interface Idata{
    number:number,
    price:number,
  }
  interface IdataAPI{
    snippet: {
    publishedAt:string,
    channelId:string,
    title:string,
    description:string,
    thumbnails:{high:{url:string,width:number,height:number}},
    channelTitle:string,
    liveBroadcastContent:string,
    publishTime:string
    }
  }
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
  }, []);
  console.log(apiRes)


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

    return <>
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {apiRes.length > 0 ? (
          apiRes.map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-105">
              <img
                src={item.snippet.thumbnails.high.url}
                alt="Course Thumbnail"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <p className="text-xl font-bold mb-2 truncate">{item.snippet.title}</p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.snippet.description}</p>
                <div className="flex items-center gap-3 mb-4">
                  <Image src={IMAGES.studentAvatar} alt="Channel" className="h-8 w-8 rounded-full" />
                  <p className="font-semibold text-gray-700 truncate !mt-[1em]">{item.snippet.channelTitle}</p>
                </div>
                <div  className="flex justify-between items-center mb-4 text-gray-600">
                  <p>Students: {res[idx]?.number}</p>
                  <p>Price: ${res[idx]?.price}</p>
                </div>
                <Button className="!w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition">Enroll Now</Button>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>


    </>
  
};

export default Courses;
