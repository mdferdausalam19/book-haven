import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import BookDetails from "../pages/BookDetails";
import PagesToRead from "../pages/PagesToRead";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listed-books",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/book-details/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("booksData.json"),
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead></PagesToRead>,
      },
    ],
  },
]);
