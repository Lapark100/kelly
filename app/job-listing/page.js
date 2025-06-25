import Link from "next/link";

export default function JobListings() {
  return (
    <section className="w-full pt-[88px] bg-white min-h-screen px-4 sm:px-8 md:px-20">
      <div className="bg-[#F7F6F5] rounded-2xl shadow-md p-8 md:p-12">
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-[#215834] mb-4">
            Explore Job Opportunities
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Find roles that match your skills, goals, and lifestyle. We're here to connect top talent with meaningful work.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobData.map((job, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition duration-300">
              <h2 className="text-xl font-semibold text-[#215834] mb-2">{job.title}</h2>
              <p className="text-sm text-gray-500 mb-3">{job.company} • {job.location}</p>
              <p className="text-gray-700 text-sm mb-4 line-clamp-3">{job.description}</p>
              <Link href="https://forms.gle/urR82XMm1WAYiHmm7" className="text-[#00b142] font-medium text-sm hover:underline">
                View Details →
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/jobs"
            className="inline-block bg-[#00b142] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#019a39] transition"
          >
            See All Jobs
          </Link>
        </div>
      </div>
    </section>
  );
}

// Temporary mock data
const jobData = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "Kelly Technologies",
    location: "Remote",
    description: "We're looking for a creative frontend developer skilled in React, TailwindCSS, and Next.js."
  },
  {
    id: "2",
    title: "HR Manager",
    company: "Global Corp",
    location: "Lagos, Nigeria",
    description: "Join our HR team to manage talent recruitment, development, and employee engagement programs."
  },
  {
    id: "3",
    title: "Marketing Associate",
    company: "Bright Media",
    location: "Hybrid - Lagos",
    description: "We’re hiring a data-driven marketing associate with experience in digital campaigns and content creation."
  },
  {
    id: "2",
    title: "HR Manager",
    company: "Global Corp",
    location: "Lagos, Nigeria",
    description: "Join our HR team to manage talent recruitment, development, and employee engagement programs."
  },
  {
    id: "3",
    title: "Marketing Associate",
    company: "Bright Media",
    location: "Hybrid - Lagos",
    description: "We’re hiring a data-driven marketing associate with experience in digital campaigns and content creation."
  },
  {
    id: "3",
    title: "Marketing Associate",
    company: "Bright Media",
    location: "Hybrid - Lagos",
    description: "We’re hiring a data-driven marketing associate with experience in digital campaigns and content creation."
  }
];
