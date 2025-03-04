import React from 'react';
import BarChart from '../../charts/BarChart03';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashbboardCardManufactureYear() {

  const chartData = {
    labels: ['Reasons'],
    datasets: [
      {
        label: '1995<',
        data: [131],
        backgroundColor: tailwindConfig().theme.colors.violet[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.violet[600],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: '<2000',
        data: [100],
        backgroundColor: tailwindConfig().theme.colors.violet[700],
        hoverBackgroundColor: tailwindConfig().theme.colors.violet[800],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: '<2010',
        data: [81],
        backgroundColor: tailwindConfig().theme.colors.sky[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.sky[600],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: '<2015',
        data: [65],
        backgroundColor: tailwindConfig().theme.colors.red[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.green[600],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Other',
        data: [72],
        backgroundColor: tailwindConfig().theme.colors.gray[200],
        hoverBackgroundColor: tailwindConfig().theme.colors.gray[300],
        barPercentage: 1,
        categoryPercentage: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60 flex items-center">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Accidents by Vehicle Manufacturer Year </h2>
      </header>
      <div className="px-5 py-3">
        <div className="flex items-start">
          <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2">500</div>
          {/* <div className="text-sm font-medium text-red-700 px-1.5 bg-red-500/20 rounded-full">-22%</div> */}
        </div>
      </div>      
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        {/* Change the height attribute to adjust the chart height */}
        <BarChart data={chartData} width={595} height={48} />
      </div>
    </div>
  );
}

export default DashbboardCardManufactureYear;