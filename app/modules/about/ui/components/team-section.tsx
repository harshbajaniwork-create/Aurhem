export const team = [
  {
    name: "Dr. Sarah Al-Fayed",
    role: "Chief Executive Officer",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "James Sterling",
    role: "Head of Infrastructure",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Elena Rodriguez",
    role: "Director of Sustainability",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Michael Chen",
    role: "Chief Investment Officer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export const TeamSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-quaternary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-plum mb-4">
            Meet Our Leadership
          </h2>
          <p className="text-lg text-[#4A3A4A] max-w-3xl mx-auto">
            A diverse team of experts committed to driving global impact.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4 border-4 border-white shadow-lg group-hover:border-dusty-rose transition-colors duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-plum">{member.name}</h3>
              <p className="text-dusty-rose font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
