import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// import Home from "../pages/Home";
// import AboutUs from "../pages/AboutUs";
// import Courses from "../pages/Courses";
// import FaqS from "../pages/FaqS";
// import ContactUs from "../pages/ContactUs";
// import Register from "../pages/Register";
// import Login from "../pages/Login";
// import CourseDetailPage from "../pages/Courses/CourseDetailPage";
// import PageNotFound from "../pages/PageNotFound";

import ProtectedRoute from "../components/auth/ProtectedRoute";
import Layout from "../components/Layout";
import { lazy, Suspense } from 'react';
import LayOutSkeleton from "../components/Layout/Skeleton/LayOutSkeleton";
import AuthLayoutSkeleton from '../components/Layout/Skeleton/AuthLayoutSkeleton';

// user auth data -------------------
const storageKey = "loggedInUser";
const userDataString = localStorage.getItem(storageKey);
const userData = userDataString ? JSON.parse(userDataString) : null;
// user auth data -------------------
// lazy load components -------------------------------------
const Courses = lazy(() => import("../pages/Courses/index"))
const Home = lazy(() => import("../pages/Home"))
const AboutUs = lazy(() => import("../pages/AboutUs"))
const FaqS = lazy(() => import("../pages/FaqS"))
const ContactUs = lazy(() => import("../pages/ContactUs"))
const Register = lazy(() => import("../pages/Register"))
const Login = lazy(() => import("../pages/Login"))
const CourseDetailPage = lazy(() => import("../pages/Courses/CourseDetailPage"))
const PageNotFound = lazy(() => import("../pages/PageNotFound"))

// lazy load components -------------------------------------
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Root Layout */}
      <Route path="/" element={<Layout />}>

        <Route
          path=""
          index
          element={
            <ProtectedRoute
              isAllowed={userData?.jwt}
              redirectPath="/login"
              data={userData}
            >
              <Suspense fallback={<LayOutSkeleton />}>
                <Home />
              </Suspense>
            </ProtectedRoute>
          }
        />
        <Route
          path="aboutUs"
          element={
            <ProtectedRoute
              isAllowed={userData?.jwt}
              redirectPath="/login"
              data={userData}
            >
              <Suspense fallback={<LayOutSkeleton />}>
                <AboutUs />
              </Suspense>
            </ProtectedRoute>
          }
        />
        <Route
          path="courses"
          element={
            <ProtectedRoute
              isAllowed={userData?.jwt}
              redirectPath="/login"
              data={userData}
            >
              <Suspense fallback={<LayOutSkeleton />}>
                <Courses />
              </Suspense>

            </ProtectedRoute>
          }
        />
        <Route
          path="faqs"
          element={
            <ProtectedRoute
              isAllowed={userData?.jwt}
              redirectPath="/login"
              data={userData}
            >
              <Suspense fallback={<AuthLayoutSkeleton />}>
                <FaqS />
              </Suspense>

            </ProtectedRoute>
          }
        />
        <Route
          path="contactUs"
          element={
            <ProtectedRoute
              isAllowed={userData?.jwt}
              redirectPath="/login"
              data={userData}
            >
              <Suspense fallback={<AuthLayoutSkeleton />}>
                <ContactUs />
              </Suspense>
            </ProtectedRoute>
          }
        />
        <Route
          // path={`CourseDetailPage/${id}`}
          path="/CourseDetailPage/:id"
          element={
            <ProtectedRoute
              isAllowed={userData?.jwt}
              redirectPath="/login"
              data={userData}
            >
              <Suspense fallback={<AuthLayoutSkeleton />}>
                <CourseDetailPage />
              </Suspense>

            </ProtectedRoute>
          }
        />
        {/* this to not make user go again for register because he is already loginned  and registered*/}
        <Route path="register" element={
          <ProtectedRoute
            isAllowed={!userData?.jwt}
            redirectPath="/register"
            data={userData}
          >
            <Suspense fallback={<AuthLayoutSkeleton />}>
              <Register />
            </Suspense>

          </ProtectedRoute>

        } />
        {/* this to not make user go again for login because he is already loginned */}
        <Route
          path="login"
          element={
            <ProtectedRoute
              isAllowed={!userData?.jwt}
              redirectPath="/"
              data={userData}
            >
              <Suspense fallback={<AuthLayoutSkeleton />}>
                <Login />
              </Suspense>

            </ProtectedRoute>
          }
        />
      </Route>
      {/* Page Not Found */}
      <Route path="*" element={
          <Suspense fallback={<AuthLayoutSkeleton />}>
                    <PageNotFound />
              </Suspense>
   
        } />
    </>
  )
);

export default router;
