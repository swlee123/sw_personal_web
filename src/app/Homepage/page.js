
import Image from "next/image";
import Cards from "../components/Cards";
import Timeline from "../components/Timeline";
import CareerCard from "../components/CareerCard";
import LandingHero from "../components/LandingHero";
import ParticlesBackground from "../components/ParticlesBackground";
import { Film, User, MapPin } from 'lucide-react';
import ProjectCard from "../components/ProjectCard";

export default function Page() {

   

    const icons = {
        Film: <Film size={32} className="text-gray-800" />,
        User: <User size={32} className="text-gray-800" />,
        MapPin: <MapPin size={32} className="text-gray-800" />,
    };

    return (
        <div className="flex flex-col items-center justify-center z-0">

            {/* landing section */}
            <LandingHero/>

            
            {/* introduction section */}
            <div id= "introduction" className="flex flex-col items-center justify-center w-full h-screen bg-[#415E72] p-3 z-10">

                <h1 className="mb-10 text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent bg-amber-200">
                    Introduction
                </h1>

                <div className=" mb-20 ">
                    <Image 
                    src="/profile_pic.png"
                    alt="profile"
        
                    width={180}
                    height = {180}
                    className="rounded-2xl"/>
                </div>


                <div className="flex flex-row font-serif items-center text-[#F2F2F2]">
                    
                   

                    {/* basic info */}
                    <div className="flex flex-col mx-15">

                        
                        <div class="flex justify-between border-b py-3 w-80">
                            <span class="font-semibold uppercase bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent mr-10">Name:</span>
                            <span class="text-white font-semibold mr-auto">Lee Shang Wei</span>
                        </div>

                        <div class="flex justify-between border-b py-3">
                            <span class="font-semibold uppercase  bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent mr-5">School:</span>
                            <span class="text-white font-semibold  mr-auto">University Of Notingham Malaysia</span>
                        </div>

                        <div class="flex justify-between border-b py-3">
                            <span class="font-semibold uppercase bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent mr-5">Hometown:</span>
                            <span class="text-white font-semibold mr-auto">Sungai Pelek, Malaysia</span>
                        </div>
                        
                    </div>

                    <div className="mx-20 text-s font-sans tracking-normal leading-relaxed overflow-hidden">
                        <p>Hi, I'm Lee Shang Wei, an Associate Solution Architect at AWS London. I focus on designing secure, scalable, and cost-efficient cloud solutions that help businesses run reliably in the cloud.
                        Outside of work, I'm learning to become a full-stack developer, with the goal of building and launching SaaS products end-to-end. I'm also interested in website and workflow automation tools that speed up development and work efficiency.
                        My past projects include building machine learning models, developing web applications, and experimenting with automation to validate ideas quickly. </p>
                    </div>
                    
                </div>
   

            </div>
        

            {/* experience , skillset , project */}
            <main className="gap-[32px] mt-10 row-start-2 items-center sm:items-start w-300 z-10">

                
                <div className=" flex flex-col flex-wrap m-3 gap-4">


                    <div className="flex flex-col items-center justify-center">
                        <h1 className="mb-10 text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent bg-amber-200">
                            Experience
                        </h1>

                        <div 
                        className="bg-white rounded-xl p-6 shadow-xl overflow-hidden w-full " 
                        class="career card">
                            
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold">
                                    Cloud Solution Architect
                                </h3>
                                <p className="text-gray-500 bg-gray-200 py-1 px-3 rounded-full text-sm">
                                    2025.9 - Present
                                </p>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-lg font-semibold">Amazon Web Service</h4>
                                <p className="text-gray-600 mt-1 text-sm">Supporting business to build product using AWS cloud</p>
                            </div>

                            <CareerCard
                            title={"Computer Science Intern"}
                            company={"Footfallcam"}
                            description={"I help ChinKit (manager) write code and IT stuff"}
                            date={"2023.6 - 2023.9"}/>

                            <CareerCard
                            title={"Temporary Teacher"}
                            company={"SJK(C) Tche Min"}
                            description={"I make sure kids finish their homework"}
                            date={"2022.5 - 2022.7"}/>

                            <div className="flex flex-wrap gap-2 mt-4">

                                <span className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-xs font-medium">
                                    AWS Cloud
                                </span>
                                <span className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-xs font-medium">
                                    React
                                </span>
                            </div>

                        </div>
                    </div>
                    

                    {/* Project */}
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="my-10 text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent bg-amber-200">
                            Project
                        </h1>

                        <div className="flex flex-row bg-amber-500 opacity-70 my-3 rounded-xl h-100 p-3 w-full " class="card">
                            <ProjectCard
                            icon={icons["Film"]}
                            title={"Project 1"}
                            description={"This project is lorem isup dom bafvfdfds fdfdas in the wall"}
                            technologies={['React','Javasciprt','Python']}/>

                            <ProjectCard
                            icon={icons["User"]}
                            title={"Project 2"}
                            description={"This project is lorem isup dom bafvfdfds fdfdas in the wall"}
                            technologies={['Django','Javasciprt','Python']}
                            />

                        </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="my-10 text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent bg-amber-200">
                            Technologies
                        </h1>

                        <div className=" mt-3 rounded-xl h-100 p-3 w-full " class="card">
                                tech 1 
                                tech 2

                        </div>
                    </div>



                </div>
                
                <div className="flex flex-row m-3 "> 
                    
                    <Cards
                        title={"Learning Notes"}
                        count={"4 notes"}
                        imageURL={"gojo.jpg"}>

                    </Cards>

                    <Cards
                        title={"Blog Post"}
                        count={"4 notes"}
                        imageURL={"giordano.png"}>

                    </Cards>

                </div>

                



            </main>

            <footer
            
            />

         
        </div>
    )
}