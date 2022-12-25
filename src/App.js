import logo from './logo.svg';
import './App.css';
import Courses from './components/Courses/Courses';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Quiz from './components/Quiz/Quiz'
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:  <Main></Main>,
      children: [
        {
          path:"/",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element:  <Courses></Courses>
        },
        {
          path:"/topics/",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element:  <Courses></Courses>
        },
        {
          path:"/topics/:id",
          loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element: <Quiz></Quiz>
        },
        {
          path:"/statistics",
          element:  <Statistics></Statistics>
        },
        {
          path:"/blog",
          element:  <Blog></Blog>
        }
      ]
    }
]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
