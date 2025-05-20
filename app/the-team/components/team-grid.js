import Image from "next/image";

export default function TeamGrid() {
  const team = [
    {
      name: "Gerald S. Adolph",
      position: "Hiring Manager",
      image: "/images/gerald.jpeg",
    },
    {
      name: "Rose Yee",
      position: "Hiring Manager",
      image: "/images/rose.jpeg",
    },
    {
      name: "Donald Parfet",
      position: "Hiring Manager",
      image: "/images/donald.jpeg",
    },
    {
      name: "Terri Chase",
      position: "Company Vendor",
      image: "/images/terri.jpeg",
    },
    {
      name: "Whew Silver",
      position: "Account Manager",
      image: "/images/silver.jpeg",
    },
    {
      name: "Alexis Smart",
      position: "Financial Account Manager",
      image: "/images/alexis.jpeg", // fixed filename issue
    },
    {
      name: "Edward Dolan",
      position: "Company Vendor",
      image: "/images/edward.jpeg",
    },

    {
        name: "Robyn Robinson",
        position: "Hiring Manager",
        image: "/images/robyn.jpeg",
      },

      {
        name: "Kevin Kelly",
        position: "Investor",
        image: "/images/kevin.jpeg",
      },

      {
        name: "Brandon Conelley",
        position: "Investor",
        image: "/images/brandon.jpeg",
      },

      
       

  ];

  return (
    <section className="w-full bg-[#FAFAFA] py-20 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Meet Our Team
        </h2>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          Human-first, strategy-driven. These are the people making it happen every day.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition duration-300"
          >
            <div className="w-full h-[350px] sm:h-[400px] md:h-[470px] relative rounded-xl overflow-hidden mb-4">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900">
              {member.name}
            </h3>
            <p className="text-gray-500">{member.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
