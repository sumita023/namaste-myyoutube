import "./App.css";
import "./components/Head.js";
import Head from "./components/Head.js";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./Utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/Maincontainer";
import WatchPage from "./components/WatchPage";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path:"watch",
        element:<WatchPage/>
      }
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;

//1. create store
//2. create slice
// 3.add slice in store
// 4.provide the store
// 5. dispach the action
// 6.read from the slice
