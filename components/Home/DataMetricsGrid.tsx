// DataMetricsGrid.tsx or in a page file
import React from 'react';
import MetricCard from '../shared/MetricCard';
import { DataMetric } from '@/types';


const metrics: DataMetric[] = [
  {
    id: 1,
    imageUrl: "/assets/Images/earth.webp",
    title: "1,000M/mo",
    subTitle: "Web Tech Detections",
  },
  {
    id: 2,
    imageUrl: "/assets/Images/technical.webp",
    title: "100K/mo",
    subTitle: "Mobile SDK Detections",
  },
  {
    id: 3,
    imageUrl: "/assets/Images/people.webp",
    title: "125M/mo",
    subTitle: "Employee Profile Scan",
  },
  {
    id: 4,
    imageUrl: "/assets/Images/building.webp",
    title: "45M/mo",
    subTitle: "Companies Indexed",
  },
  {
    id: 5,
    imageUrl: "/assets/Images/bigdata.webp",
    title: "3 Petabytes/mo",
    subTitle: "Data Processed by MixRank",
  },
  {
    id: 6,
    imageUrl: "/assets/Images/addcopy.webp",
    title: "45M/mo",
    subTitle: "Job Posts Added",
  },
];

const DataMetricsGrid: React.FC = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:gap-x-80 md:gap-x-44 sm:gap-x-16 gap-y-10 lg:gap-y-40 md:gap-y-36 sm:gap-y-16 max-w-[1598px] sm:px-16 xl:px-[100px] mx-auto">
      {metrics.map(metric => (
        <MetricCard key={metric.id} metric={metric} />
      ))}
    </div>
  );
};

export default DataMetricsGrid;
