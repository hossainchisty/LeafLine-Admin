import Chart from 'react-apexcharts';
import Analytics from '../Analytics/Analytics';
import Navbar from '../Navbar/Navbar';
import { useState, useEffect } from 'react';

const Home = () => {
  const apiBaseDomain = import.meta.env.VITE_API_BASE_URL;
  const getToken = localStorage.getItem('userInfo');
  const token = getToken.replace(/["']/g, '');

  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: 'monthly-sales',
      },
      xaxis: {
        months: [], // Empty array for initial months
      },
    },
    series: [
      {
        name: 'Total Sales',
        data: [], // Empty array for initial sales data
      },
    ],
  });

  useEffect(() => {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    fetch(`${apiBaseDomain}/admin/last-sales`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (response) => {
        if (response.ok) {
          const fetchedData = await response.json();
          const chartData = fetchedData.data.map((item) => ({
            x: `${monthNames[item._id.month - 1]}`, // Format for x-axis (months)
            y: parseFloat(item.totalSales), // Sales data for y-axis
          }));

          // Update the chart data with fetched data
          setChartData((prevState) => ({
            ...prevState,
            series: [
              {
                name: 'Total Sales',
                data: chartData,
              },
            ],
          }));
        } else {
          throw new Error('Failed to fetch data');
        }
      })
      .catch((error) => {
        console.error('Error fetching monthly sales:', error);
      });
  }, [apiBaseDomain, token]);

  return (
    <div className='container mx-auto px-4 py-6'>
      <h1 className='text-3xl font-semibold text-gray-800 mb-2'>Dashboard</h1>
      <Navbar />
      <Analytics />

      <div className='mt-7'>
        <Chart
          options={chartData.options}
          series={chartData.series}
          type='bar'
          width={1250}
          height={500}
        />
      </div>
    </div>
  );
};

export default Home;
