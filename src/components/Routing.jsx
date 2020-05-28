import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const UpdateCourse = lazy(() => import('./UpdateCourse'));
const CreateCourse = lazy(() => import('./CreateCourse'));
const CourseDetail = lazy(() => import('./CourseDetail'));
const Courses = lazy(() => import('./Courses'));
const UserSignIn = lazy(() => import('./UserSignIn'));
const UserSignout = lazy(() => import('./UserSignout'));
const UserSignUp = lazy(() => import('./UserSignUp'));
const NotFound = lazy(() => import('./NotFound'));
const Forbidden = lazy(() => import('./Forbidden'));
const Error = lazy(() => import('./Error'));

export default function Routing() {
  return (
    <Router>
      <Suspense fallback={<div>Loading ..</div>}>
        <Switch>
          <Route exact path="/courses/:id/update">
            <UpdateCourse />
          </Route>
          <Route exact path="/courses/create">
            <CreateCourse />
          </Route>
          <Route exact path="/courses/:id">
            <CourseDetail />
          </Route>
          <Route exact path="/signin">
            <UserSignIn />
          </Route>
          <Route exact path="/signup">
            <UserSignUp />
          </Route>
          <Route exact path="/signout">
            <UserSignout />
          </Route>
          <Route exact path="/error">
              <Error />
          </Route>
          <Route exact path="/forbidden">
              <Forbidden />
          </Route>
          <Route exact path="/">
            <Courses />
          </Route>
          <Route exact path="/*">
            <Courses />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}
