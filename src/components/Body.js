import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";

const Body = ()=>{
    const appRouter = createBrowserRouter([
        {
            path: "/",
            // element: <Body/> //error you are showing body component inside body component
            element: <Login/>
        },
        {
            path : '/browse',
            element: <Browse/>

        }
    ])
    return(
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}
export default Body;