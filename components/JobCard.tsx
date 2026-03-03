import React from 'react';
import { Briefcase, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { Job } from '../types';

interface JobCardProps {
  job: Job;
}

export const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-gray-300 hover:shadow-lg transition-all duration-300 group cursor-pointer">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full mb-2">
            {job.type}
          </span>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
            {job.title}
          </h3>
          <p className="text-gray-500 font-medium">{job.company}</p>
        </div>
        <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
          <ArrowUpRight size={20} />
        </div>
      </div>
      
      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
        <div className="flex items-center gap-1.5">
          <MapPin size={16} />
          {job.location}
        </div>
        <div className="flex items-center gap-1.5">
          <Clock size={16} />
          {job.date}
        </div>
        <div className="flex items-center gap-1.5 text-green-600 font-medium">
          <Briefcase size={16} />
          {job.salary}
        </div>
      </div>

      <hr className="border-gray-100 mb-4" />
      
      <p className="text-sm text-gray-600 line-clamp-2">
        {job.description}
      </p>
    </div>
  );
};