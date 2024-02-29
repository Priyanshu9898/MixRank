// MetricCard.tsx
import React from 'react';
import Image from 'next/image';
import { DataMetric } from '@/types';


interface MetricCardProps {
  metric: DataMetric;
}

const MetricCard: React.FC<MetricCardProps> = ({ metric }) => {
  return (
    <div className="w-full h-full mt-auto flex flex-col items-center sm:items-start">
      <Image
        src={metric.imageUrl}
        alt=""
        width={80}
        height={80}
        className="w-20 h-20"
        loading="lazy"
      />
      <div className="mt-4 space-y-2 text-center sm:text-left">
        <h4 className="text-white text-lg sm:text-2xl font-medium">{metric.title}</h4>
        <p className="text-[#B4B4B4] text-base sm:text-lg leading-normal">{metric.subTitle}</p>
      </div>
    </div>
  );
};

export default MetricCard;
