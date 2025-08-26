export default function Timeline({title,des,date}){

    return (

        <div className="flex flex-col relative p-6 sm:p-10">
            {/* This is the main vertical line of the timeline. */}
            <div className="absolute sm:left-10 h-full w-0.5 bg-gray-300"></div>
    
            {/* Map over the events data to render each timeline item. */}
  
            <div className="flex items-start">
                {/* This is the bullet point for each event. */}
                {/* It uses a rounded shape and a subtle shadow. */}
                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-blue-500 shadow-lg ml-4 mt-1 mr-5 z-10"></div>
    
                {/* This div contains the content for each event. */}
                {/* It includes a title and a description. */}
                <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                <p className="text-gray-600 mt-1">{des}</p>
                <p className="text-gray-700 mt-1">{date}</p>
                </div>
            </div>

        </div>
    )
}