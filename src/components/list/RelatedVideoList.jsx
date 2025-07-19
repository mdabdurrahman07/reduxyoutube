import { useEffect } from "react";
import RelatedVideoListItem from "./RelatedVideoListItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideos } from "../../redux/features/relatedVideos/relatedVideosSlice";
import Loading from "../ui/Loading";

export default function RelatedVideoList({ currentVideoId, tags }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRelatedVideos({ tags, id: currentVideoId }));
  }, [currentVideoId, dispatch, tags]);
  const { relatedVideos, isLoading, isError, error } = useSelector(
    (state) => state.relatedVideos
  );
  let content;

  if (isLoading) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  } else if (!isError && !isLoading && relatedVideos?.length === 0) {
    content = <div className="col-span-12">No related videos found</div>;
  } else {
    content = relatedVideos.map((video) => (
      <RelatedVideoListItem key={video?.id} video={video}/>
    ));
  }
  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
}
