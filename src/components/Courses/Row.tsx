import { IMAGES } from "../../config/assets";
import Image from "../../components/Ui/Image";
import Button from "../Ui/Button";
import { Idata, IdataAPI } from "../../interfaces";

interface Iprop{
  item: IdataAPI;
  data: Idata;
  onClick: () => void;
}
const Row = ({  item, data, onClick }: Iprop) => {
  return (
      <>
        <Image
          src={item.snippet.thumbnails.high.url}
          alt="Course Thumbnail"
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <p className="text-xl font-bold mb-2 truncate">{item.snippet.title}</p>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.snippet.description}</p>
          <div className="flex items-center gap-3 mb-4">
            <Image src={IMAGES.studentAvatar} alt="Channel" className="h-8 w-8 rounded-full" />
            <p className="font-semibold text-gray-700 truncate !mt-[1em]">
              {item.snippet.channelTitle}
            </p>
          </div>
          <div className="flex justify-between items-center mb-4 text-gray-600">
            <p>Students: {data?.number}</p>
            <p>Price: ${data?.price}</p>
          </div>
          <Button onClick={onClick}>Enroll Now</Button>
        </div>
      </>
  );
};
export default Row;