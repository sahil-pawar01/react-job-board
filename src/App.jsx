import React from "react";
import Card from "./components/Card";

const App = () => {
  const jobs = [
    {
      company: "Amazon",
      posted: "5 days ago",
      position: "Senior UI/UX Designer",
      type: "Part Time",
      level: "Senior Level",
      salary: "$120/hr",
      location: "Mumbai, India",
      logo: "https://images.icon-icons.com/1195/PNG/512/1490889698-amazon_82521.png",
    },
    {
      company: "Google",
      posted: "2 days ago",
      position: "Frontend Developer",
      type: "Full Time",
      level: "Mid Level",
      salary: "$95/hr",
      location: "Bangalore, India",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtHZCUP7QoagcqbkwXuFI_4ZhJ7yuAfgzpYuwGBBbIzQ&s=10",
    },
    {
      company: "Microsoft",
      posted: "1 week ago",
      position: "Product Designer",
      type: "Full Time",
      level: "Senior Level",
      salary: "$110/hr",
      location: "Hyderabad, India",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj0J4jBB2qeRhRPBNtGPyjF7AOXGTLGd1w2hTjKs9WGw&s=10",
    },
    {
      company: "Apple",
      posted: "3 days ago",
      position: "UI Designer",
      type: "Part Time",
      level: "Junior Level",
      salary: "$80/hr",
      location: "Pune, India",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAWO5NoT12MbU-Ra8Qb7aO8dweBRP-YtXMzLyQQEqiNQ&s=10",
    },
    {
      company: "Netflix",
      posted: "4 days ago",
      position: "UX Researcher",
      type: "Full Time",
      level: "Senior Level",
      salary: "$105/hr",
      location: "Mumbai, India",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjGk5g00BgxAC8aoPmj1DpGgNqKIqt2F2JPvMS1epIOg&s=10",
    },
    {
      company: "Meta",
      posted: "6 days ago",
      position: "React Developer",
      type: "Full Time",
      level: "Mid Level",
      salary: "$90/hr",
      location: "Gurgaon, India",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRE8vg4NBDci3yfveCXV5sOTl61xF_dfu3fj3tSJFyGoaVvgCEvxCraW8&s=10",
    },
    {
      company: "Adobe",
      posted: "1 day ago",
      position: "Visual Designer",
      type: "Part Time",
      level: "Mid Level",
      salary: "$85/hr",
      location: "Noida, India",
      logo: "https://companieslogo.com/img/orig/ADBE-fb158b30.png?t=1740130206",
    },
    {
      company: "Spotify",
      posted: "3 days ago",
      position: "Product Designer",
      type: "Full Time",
      level: "Senior Level",
      salary: "$100/hr",
      location: "Bangalore, India",
      logo: "https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-logo-spotify-symbol-3.png",
    },
    {
      company: "Tesla",
      posted: "2 weeks ago",
      position: "Frontend Engineer",
      type: "Full Time",
      level: "Senior Level",
      salary: "$115/hr",
      location: "Delhi, India",
      logo: "https://www.edigitalagency.com.au/wp-content/uploads/Tesla-logo-red-large-size.png",
    },
    {
      company: "IBM",
      posted: "5 days ago",
      position: "UX Designer",
      type: "Part Time",
      level: "Junior Level",
      salary: "$75/hr",
      location: "Chennai, India",
      logo: "https://icon2.cleanpng.com/20181117/aeb/kisspng-hyperledger-blockchain-driven-ibm-application-soft-infra-structure-1713921503790.webp",
    },
  ];
  return (
    <div className="parent">
      {jobs.map(function (job, idx) {
        return (
          <div key={idx}>
            <Card
              company={job.company}
              posted={job.posted}
              position={job.position}
              type={job.type}
              level={job.level}
              salary={job.salary}
              location={job.location}
              logo={job.logo}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
