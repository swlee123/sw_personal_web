export default function Cards({title,count,imageURL}){

    return(
        <div 
        className="hover:scale-105  relative h-64 w-full m-3 bg-cover bg-center rounded-xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-200"
        style={{backgroundImage:`url(${imageURL})`}}>
            {/* This semi-transparent overlay uses a black gradient to ensure the white text is readable. */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

            {/* This section holds the card's text content, positioned at the bottom-left. */}
            <div className="absolute bottom-4 left-4 text-white p-4">
                <h2 className="text-3xl font-bold mb-1">{title}</h2>
                <p className="text-lg opacity-80">{count}</p>
            </div>

        </div>
    )

}