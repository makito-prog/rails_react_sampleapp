import { Route, Routes } from "react-router-dom";
import PostsList from "../features/posts/PostsLists";
import PostDetails from "../features/posts/Postdetails";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<PostsList/>} />
            <Route path="posts/:id" element={<PostDetails />} />
            <Route path="/new" element={<h1>New Post Form</h1>} />
        </Routes>
    )
}

export default AppRoutes;