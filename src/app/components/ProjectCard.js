export default function ProjectCard({link,title, description, technologies }){

    const openlink = (link) =>{
      window.location.href = link
    }
    return (
      // The main card container
      // This div sets the overall look: a light background, rounded corners, padding, and a subtle shadow.
      // The hover effect makes it lift up and gives it a border.
      <div onClick={()=>openlink(link)} className="flex-1 bg-white overflow-hidden my-3 mx-3 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out border border-gray-100 hover:border-blue-400 transform hover:-translate-y-2 cursor-pointer">
  
        {/* Title of the card */}
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
  
        {/* Description of the card */}
        <p className="text-sm text-gray-600 mb-4">{description}</p>
  
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

