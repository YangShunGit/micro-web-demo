import * as React from "react";
import { Outlet, Link, useRoutes, useParams } from "react-router-dom";
import Counter from '../pages/counter';
import Layout from '../pages/layout';

export default function App() {
  let routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Counter /> },
        {
          path: "/courses",
          element: <Courses />,
          children: [
            { index: true, element: <CoursesIndex /> },
            { path: "/courses/:id", element: <Course /> }
          ]
        },
        { path: "*", element: <NoMatch /> }
      ]
    }
  ];

  let element = useRoutes(routes);
  return element;
}

function Courses() {
  return (
    <div>
      <h2>Courses</h2>
      <div id="container"></div>
      <Outlet />
    </div>
  );
}

function CoursesIndex() {
  return (
    <div>
      <p>Please choose a course:</p>

      <nav>
        <ul>
          <li>
            <Link to="react-fundamentals">React Fundamentals</Link>
          </li>
          <li>
            <Link to="advanced-react">Advanced React</Link>
          </li>
          <li>
            <Link to="react-router">React Router</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function Course() {
  let { id } = useParams<"id">();

  return (
    <div>
      <h2>
        Welcome to the {id!.split("-").map(capitalizeString).join(" ")} course!
      </h2>

      <p>This is a great course. You're gonna love it!</p>

      <Link to="/courses">See all courses</Link>
    </div>
  );
}

function capitalizeString(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function NoMatch() {
  return (
    <div>
      <h2>It looks like you're lost...</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
