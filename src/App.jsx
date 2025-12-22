import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import RouteTransition from "./components/RouteTransition";
import Layout from "./components/Layout";

import IntroLanding from "./pages/IntroLanding";
import Home from "./pages/Home";
import AboutCourse from "./pages/AboutCourse";
import Placements from "./pages/Placements";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import BlogDetail from "./components/Blogs/BlogDetail";
import Jobs from "./pages/Jobs";
import Career from "./pages/Career";
import TermsOfService from "./components/Terms/Terms";
import PrivacyPolicy from "./components/Terms/Privacy";
import RefundPolicy from "./components/Terms/Refund";
import SeoLandingPage from "./pages/SeoLandingPage";
import ContactSuccessful from "./lib/ContactSuccessful";
import NotFoundPage from "./components/ui/NotFoundPage";

import { fetchNavbarData } from "./store/navbarSlice";
import { fetchCompanyRatings } from "./store/companyPartnersRatingsSlice";
import { fetchCourses } from "./store/coursesSlice";
import { fetchPlacedStudents } from "./store/placedStudentsSlice";
import { fetchCoursesData } from "./store/coursesDataSlice";

import { fetchComponentData } from "./api/fetchComponentData";
import { fetchSeoLandingPageDetails } from "./api/fetchSeoData";

export const dynamicCourseRoutes = [];
const landingPageDetails = [];

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteTransition />, // ✅ ONLY ONCE
    children: [
      // INTRO (NO LAYOUT)
      {
        index: true,
        element: <IntroLanding />,
      },

      // MAIN WEBSITE (WITH LAYOUT)
      {
        element: <Layout />,
        children: [
          { path: "home", element: <Home /> },

          ...dynamicCourseRoutes.map((route) => ({
            path: route,
            loader: () => fetchComponentData(route),
            element: <AboutCourse />,
          })),

          { path: "placed", element: <Placements /> },
          { path: "jobs-openings", element: <Jobs /> },
          { path: "career", element: <Career /> },
          { path: "about-us", element: <AboutUs /> },

          { path: "blogs", element: <Blogs /> },
          { path: "blog/:slug", element: <BlogDetail /> },

          { path: "contact", element: <Contact /> },
          { path: "terms", element: <TermsOfService /> },
          { path: "privacy", element: <PrivacyPolicy /> },
          { path: "refund", element: <RefundPolicy /> },

          ...landingPageDetails.map((route) => ({
            path: route,
            loader: () => fetchSeoLandingPageDetails(route),
            element: <SeoLandingPage />,
          })),

          { path: "successful", element: <ContactSuccessful /> },
          { path: "*", element: <NotFoundPage /> },
        ],
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNavbarData());
    dispatch(fetchCompanyRatings());
    dispatch(fetchCourses());
    dispatch(fetchPlacedStudents());
    dispatch(fetchCoursesData());
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
