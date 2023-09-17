import { useState, useEffect } from "react";
import { formatISO9075 } from "date-fns";
import ClipLoader from "react-spinners/ClipLoader";

function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiBaseDomain = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    // Fetch user data and set it to the users state
    fetch(`${apiBaseDomain}/users/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Flatten the nested array structure
        const flattenedUsers = data.data.flat();
        setUsers(flattenedUsers);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [apiBaseDomain]);

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "rgba(106, 89, 187, 0.888)",
  };

  if (loading) {
    return (
      <div>
        {" "}
        <ClipLoader
          color={"rgba(106, 89, 187, 0.888)"}
          loading={loading}
          cssOverride={override}
          size={120}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex flex-col m-5 pt-5">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b bg-white font-medium">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Join Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b bg-neutral-100">
                    <td className="whitespace-nowrap px-6 py-4">
                      {user.full_name}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {user.email}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {formatISO9075(new Date(user.createdAt))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminUsers;
