export const infrastructureHighlights = [
  {
    label: "Ports & Logistics",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "Industrial Parks & SEZs",
    image:
      "https://images.unsplash.com/photo-1736942902096-b50adc264c11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "Townships & Real Estate",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "Healthcare Facilities",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "Hospitality",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "Rural Digital Access",
    image:
      "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "Water Infrastructure",
    image:
      "https://images.unsplash.com/photo-1623486175858-81e03b95b677?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "Mass Transit & Smart Cities",
    image:
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export const InfrastructureGallery = () => {
  return (
    <div className="bg-plum/5 p-8 rounded-2xl border border-plum/10">
      <h3 className="text-2xl font-bold text-plum text-center mb-8">
        Infrastructure in Action
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {infrastructureHighlights.map((item, idx) => (
          <div
            key={idx}
            className="group relative h-40 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <img
              src={item.image}
              alt={item.label}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-linear-to-t from-plum/90 via-plum/40 to-transparent flex items-end p-4">
              <span className="text-white text-sm font-semibold leading-tight drop-shadow-md">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
