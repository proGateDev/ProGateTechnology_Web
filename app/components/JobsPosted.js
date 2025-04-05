"use client";
import React from "react";
import { FaBriefcase } from "react-icons/fa";
import {
  FiMapPin,
  FiClock,
  FiBriefcase,
  FiUsers,
  FiDollarSign,
} from "react-icons/fi";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button/button";
import ApplyJob from "./ui/modal/ApplyJob";
//===========================================================================
const jobs = [
  {
    title: "Frontend Developer",
    designation: "React.js Engineer",
    location: "Chinnhat, Lucknow",
    type: "Full-time",
    salary: "$40k - $60k",
    experience: "2+ years",
    vacancies: 2,
    image: "/frontend.png",
    href: "/careers/frontend-developer",
    jobDescription:
      "We are looking for a skilled Frontend Developer with expertise in React.js to join our team. The ideal candidate will have a strong understanding of web development principles and experience in building responsive and user-friendly applications.",
  },
  {
    title: "Delivery Executive",
    designation: "On-ground Staff",
    location: "Barabanki, Lucknow",
    type: "Part-time",
    salary: "$10/hr",
    experience: "0-1 year",
    vacancies: 10,
    image: "/frontend.png",
    href: "/careers/delivery-executive",
    jobDescription:
      "We are looking for a skilled Frontend Developer with expertise in React.js to join our team. The ideal candidate will have a strong understanding of web development principles and experience in building responsive and user-friendly applications.",
  },
  {
    title: "UX Designer",
    designation: "UI/UX Consultant",
    location: "Remote",
    type: "Contract",
    salary: "$30/hr",
    experience: "3+ years",
    vacancies: 1,
    image: "/frontend.png",
    href: "/careers/ux-designer",
    jobDescription:
      "We are looking for a skilled Frontend Developer with expertise in React.js to join our team. The ideal candidate will have a strong understanding of web development principles and experience in building responsive and user-friendly applications.",
  },
  {
    title: "Principal",
    designation: "UI/UX Consultant",
    location: "Remote",
    type: "Contract",
    salary: "$30/hr",
    experience: "3+ years",
    vacancies: 1,
    image: "/frontend.png",
    href: "/careers/ux-designer",
    jobDescription:
      "We are looking for a skilled Frontend Developer with expertise in React.js to join our team. The ideal candidate will have a strong understanding of web development principles and experience in building responsive and user-friendly applications.",
  },
  {
    title: "Designer",
    designation: "UI/UX Consultant",
    location: "Remote",
    type: "Contract",
    salary: "$30/hr",
    experience: "3+ years",
    vacancies: 1,
    image: "/frontend.png",
    href: "/careers/ux-designer",
    jobDescription:
      "We are looking for a skilled Frontend Developer with expertise in React.js to join our team. The ideal candidate will have a strong understanding of web development principles and experience in building responsive and user-friendly applications.",
  },
  {
    title: "Farmer",
    designation: "UI/UX Consultant",
    location: "Remote",
    type: "Contract",
    salary: "$30/hr",
    experience: "3+ years",
    vacancies: 1,
    image: "/frontend.png",
    href: "/careers/ux-designer",
    jobDescription:
      "We are looking for a skilled Frontend Developer with expertise in React.js to join our team. The ideal candidate will have a strong understanding of web development principles and experience in building responsive and user-friendly applications.",
  },
];
//===========================================================================
export default function JobsPosted() {
  const router = useRouter();
  const [applyJobModalOpen, setApplyJobModalOpen] = React.useState(false);
  const [selectedJob, setSelectedJob] = React.useState(null);

  //===========================================================================
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-6xl mx-auto mt-12">
      <div className="flex items-center gap-3 mb-6">
        <FaBriefcase className="text-[#e96c06]" size={24} />
        <h2 className="text-2xl font-bold text-primary-text">Open Positions</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col group"
          >
            <img
              src={job.image}
              alt={job.title}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4 space-y-2 flex-grow">
              <h3 className="text-xl mb-4 font-semibold text-primary-text group-hover:text-accent transition">
                {job.title}
              </h3>
              <p className="text-sm text-gray-600">{job.designation}</p>

              <div className="text-sm text-gray-600 space-y-1 mt-2">
                <div className="flex items-center gap-2">
                  <FiMapPin /> <span><strong>{job.location}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <FiClock /> <span>Type: <strong>{job.type}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <FiBriefcase />  <span>Experience: <strong>{job.experience}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <FiUsers /> <span>Vacancies: <strong>{job.vacancies}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <FiDollarSign /> <span>Salary: <strong>{job.salary}</strong></span>
                </div>
              </div>
            </div>
            <div className="p-4 pt-2">
              <Button
                fullwidth='true'
                onClick={() => {
                  setSelectedJob(job);
                  setApplyJobModalOpen(true)
                }}
              >
                Apply Now
              </Button>
            </div>
          </div>
        ))}
        {applyJobModalOpen && (<ApplyJob
          designation={selectedJob?.title}
          description={selectedJob?.jobDescription}
          isOpen={applyJobModalOpen}
          onClose={() => setApplyJobModalOpen(false)}
        />)
        }
      </div>
    </div>
  );
}

//===========================================================================
