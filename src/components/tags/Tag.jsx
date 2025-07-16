import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTags } from "../../redux/features/tags/tagsSlice";

export default function Tag() {
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(fetchTags())
    },[dispatch])
    return (
        <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer">
            react
        </div>
    );
}

{
    /* <div className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
redux
</div> */
}
