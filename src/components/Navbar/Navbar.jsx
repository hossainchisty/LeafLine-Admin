import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {" "}
      <nav className="mb-4">
        <ul className="flex justify-end space-x-4">
          <li>
            <Link
              to="/admin/users"
              className="inline-block px-6 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-800 transition duration-300 ease-in-out"
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              to="/admin/orders"
              className="inline-block px-6 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-800 transition duration-300 ease-in-out"
            >
              Orders
            </Link>
          </li>
          <li>
            <Link
              to="/admin/books"
              className="inline-block px-6 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-800 transition duration-300 ease-in-out"
            >
              Books
            </Link>
          </li>
          <li>
            <Link
              to="/admin/add"
              className="inline-block px-6 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-800 transition duration-300 ease-in-out"
            >
              Add Book
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
