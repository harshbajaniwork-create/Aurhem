import { MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import { projects } from "~/constants";

export const ProjectsGrid = () => {
  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white"
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-plum mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-[#4A3A4A] max-w-3xl mx-auto">
            From concept to reality, we are building assets that define the
            future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-plum uppercase tracking-wide">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-dusty-rose text-sm mb-3 font-medium">
                  <MapPin className="w-4 h-4 mr-1" />
                  {project.location}
                </div>
                <h3 className="text-xl font-bold text-plum mb-3 group-hover:text-dusty-rose transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#4A3A4A] text-sm leading-relaxed mb-6 truncate">
                  {project.description}
                </p>
                <Button
                  variant="outline"
                  className="w-full justify-between group-hover:bg-plum group-hover:text-white transition-colors duration-300"
                >
                  View Details <ArrowUpRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
