export default function CareerCard({title,description,company,date}){
    return (
        <div className="bg-gray-100 p-4 rounded-xl flex justify-between items-center mb-4">
            <div>
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-gray-800 mr-20">{title}</h3>
                        <h4 className="text-black-700">{company}</h4>
                    </div>
           
    
                </div>

                <p className="text-sm text-gray-600 mt-1">{description}</p>
            </div>
    
            {/* <a href="#" className="text-blue-500 text-sm font-semibold">Learn more &gt;</a>/ */}
            <span className="text-gray-500 bg-gray-200 py-1 px-3 rounded-full text-sm">
                        {date}
            </span>   
        </div>
    );

}