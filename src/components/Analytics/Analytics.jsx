const Analytics = () => {
  const totalBooks = 1000;
  const totalUsers = 500;
  const featuredBooks = 250;
  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Analytics Card 1: Total Books */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Total Books
          </h3>
          <p className="text-3xl font-bold text-blue-500">{totalBooks}</p>
        </div>

        {/* Analytics Card 2: Total Users */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Total Users
          </h3>
          <p className="text-3xl font-bold text-green-500">{totalUsers}</p>
        </div>

        {/* Analytics Card 3: Featured Books */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Featured Books
          </h3>
          <p className="text-3xl font-bold text-yellow-500">{featuredBooks}</p>
        </div>
      </div>
    </>
  );
};

export default Analytics;
