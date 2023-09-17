/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useMemo } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Analytics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [statistics, setStatistics] = useState({
    totalBooks: 0,
    totalUsers: 0,
    featuredBooks: 0,
  });
  const apiBaseDomain = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetch(`${apiBaseDomain}/analytics`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setStatistics({
          totalBooks: data.data.total_books,
          totalUsers: data.data.total_users,
          featuredBooks: data.data.featured_books,
        });
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  const analyticsCards = useMemo(() => {
    return (
      <>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Analytics Card 1: Total Books */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Total Books
            </h3>
            <p className="text-3xl font-bold text-blue-500">
              {statistics.totalBooks}
            </p>
          </div>

          {/* Analytics Card 2: Total Users */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Total Users
            </h3>
            <p className="text-3xl font-bold text-green-500">
              {statistics.totalUsers}
            </p>
          </div>

          {/* Analytics Card 3: Featured Books */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Featured Books
            </h3>
            <p className="text-3xl font-bold text-yellow-500">
              {statistics.featuredBooks}
            </p>
          </div>
        </div>
      </>
    );
  }, [statistics]);

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "rgba(106, 89, 187, 0.888)",
  };

  if (isLoading) {
    return (
      <div>
        {" "}
        <ClipLoader
          color={"rgba(106, 89, 187, 0.888)"}
          loading={isLoading}
          cssOverride={override}
          size={120}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return analyticsCards;
};

export default Analytics;
