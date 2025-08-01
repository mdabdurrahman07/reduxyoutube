import Tag from "./Tag";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../../redux/features/tags/tagsSlice";
export default function Tags() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  const { tags } = useSelector((state) => state.tags);
  return tags?.length > 0 ? (
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
        {tags.map((tag) => (
          <Tag key={tag?.id} title={tag?.title} />
        ))}
      </div>
    </section>
  ) : null;
}
