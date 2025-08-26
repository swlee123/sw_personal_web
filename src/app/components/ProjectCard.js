const ProjectCard = ({ icon, title, description, technologies }) => {
    return (
      // The main card container
      // This div sets the overall look: a light background, rounded corners, padding, and a subtle shadow.
      // The hover effect makes it lift up and gives it a border.
      <div className="bg-white my-3 mx-3 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out border border-gray-100 hover:border-blue-400 transform hover:-translate-y-1 cursor-pointer">
        
        {/* Container for the icon. The background color matches the gray in the original image. */}
        {/* The aspect-square class ensures the container is a perfect square, making it easy to center the icon. */}
        {/* <div className="bg-gray-300 w-full aspect-square flex items-center justify-center rounded-lg mb-4">
          {icon}
        </div> */}
  
        {/* Title of the card */}
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
  
        {/* Description of the card */}
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">{description}</p>
  
        {/* Container for the technology tags */}
        {/* The flexbox ensures the tags are arranged in a row with spacing. */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {technologies.map((tech, index) => (
            // Each individual tag
            // Uses dark background, white text, and rounded corners to match the design.
            <span
              key={index}
              className="bg-gray-800 text-white text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    );
  };

export default ProjectCard