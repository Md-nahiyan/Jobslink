import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import Root from "./layout/Root";
import About from "./pages/About";
import AllJobs from "./pages/AllJobs";
import Applicant from "./pages/Applicant";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import MyJobs from "./pages/MyJobs";
import Onboard from "./pages/Onboard";

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/all-jobs",
        element: <AllJobs />,
      },
      {
        path: "/applicant",
        element: <Applicant />,
      },
      {
        path: "/job-details:id",
        element: <JobDetails />,
      },
      {
        path: "/my-jobs",
        element: <MyJobs />,
      },
      {
        path: "/on-boarding",
        element: <Onboard />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
