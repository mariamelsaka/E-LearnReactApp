import { useLocation } from 'react-router-dom';
import Image from "../../components/Ui/Image";
import { IMAGES } from "../../config/assets";
import { useEffect } from 'react';
import Animate from '../../components/Animate';
const CourseDetailPage = () => {
      useEffect(() => {
        document.title = "specifc course";
      }, []);
    const location = useLocation();
    const course = location.state?.course;
    const data = location.state?.data;

    if (!data || !course) {
        // fallback: fetch by ID if state not passed (e.g. direct URL access)
    }

    return <>
     <Animate>
        <div className="container">
            <div className="bg-white rounded-lg mb-[10em] shadow-lg overflow-hidden ">
                <Image
                    // src={data.snippet.thumbnails.high.url}
                    src={`https://img.youtube.com/vi/${data.id.videoId}/maxresdefault.jpg`}
                    onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = `https://img.youtube.com/vi/${data.id.videoId}/hqdefault.jpg`;
                    }}
                    alt="Course Thumbnail"
                    className="w-full h-[35em] p-[2em]  object-cover rounded-[2.5em]"
                />
                <div className="p-4">
                    <p className="text-xl font-bold mb-2">{data.snippet.title}</p>
                    <p className="text-gray-600 text-sm mb-4">{data.snippet.description}</p>
                    <div className="flex items-center gap-3 mb-4">
                        <Image src={IMAGES.studentAvatar} alt="Channel" className="h-8 w-8 rounded-full" />
                        <p className="font-semibold text-gray-700 !mt-[1em]">{data.snippet.channelTitle}</p>
                    </div>

                </div>
            </div>
        </div>
        </Animate>
    </>
};
export default CourseDetailPage;