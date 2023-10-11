/* eslint-disable no-unused-vars */
import Chart from 'react-apexcharts';
import Analytics from '../Analytics/Analytics';
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';

const Home = () => {
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: 'apexchart-example',
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: 'series-1',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
    ],
  });
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
