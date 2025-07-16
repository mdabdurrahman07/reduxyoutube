import { useDispatch, useSelector } from "react-redux";
import VideoPlayer from "../components/description/Player";
import VideoDescription from "../components/description/VideoDescription";
import RelatedVideoList from "../components/list/RelatedVideoList";
import { useEffect } from "react";
import { fetchVideo } from "../redux/features/video/videoSlice";
import { useParams } from "react-router";
import Loading from "../components/ui/Loading";

const Video = () => {
  const dispatch = useDispatch()
  const { video, isLoading, isError, error } = useSelector(
    (state) => state.video
  );
  const {videoID} = useParams()
  
  useEffect(() =>{
    dispatch(fetchVideo(videoID))
  },[dispatch, videoID])

  const {link, title,id, tags} = video || {}

  let content;

  if (isLoading) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  } else if (!isError && !isLoading && !video?.id) {
    content = <div className="col-span-12">No video found</div>;
  } else {
    content = <div class="grid grid-cols-3 gap-2 lg:gap-8">
            <div class="col-span-full w-full space-y-8 lg:col-span-2">
              <VideoPlayer link={link} title={title}/>

              <VideoDescription video={video} />
            </div>

            <RelatedVideoList currentVideoId={id} tags={tags}/>
          </div>
  }
  return (
    <>
      <section class="pt-6 pb-20">
        <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          {content}
        </div>
      </section>
    </>
  );
};

export default Video;
