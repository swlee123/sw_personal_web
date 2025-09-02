'use client'
import Image from "next/image";
import Cards from "../components/Cards";
import CareerCard from "../components/CareerCard";
import LandingHero from "../components/LandingHero";
import ProjectCard from "../components/ProjectCard";

export default function Homepagecomponent() {


    return (
        <div className="flex flex-col items-center justify-center z-0 ">

            {/* landing section */}
            <LandingHero
            href="#introduction"/>

            
            {/* introduction section */}
            <div id= "introduction" className="flex flex-col items-center justify-center w-full h-screen bg-[#415E72] p-3 z-10">

                <h1 className="mb-10 text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent bg-amber-200">
                    Introduction
                </h1>

                <div className=" mb-20 ">
                    <Image 
                    src="/profile_pic.png"
                    alt="profile"
        
                    width={220}
                    height = {200}
                    className="rounded-2xl"/>
                </div>


                <div className="flex flex-row font-serif items-center text-[#F2F2F2]">
                    
                   

                    {/* basic info */}
                    <div className="flex flex-col mx-15">

                        
                        <div className="flex justify-between border-b py-3 w-80">
                            <span className="font-semibold uppercase bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent mr-10">Name:</span>
                            <span className="text-white font-semibold mr-auto">Lee Shang Wei</span>
                        </div>

                        <div className="flex justify-between border-b py-3">
                            <span className="font-semibold uppercase  bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent mr-5">School:</span>
                            <span className="text-white font-semibold  mr-auto">University Of Notingham Malaysia</span>
                        </div>

                        <div className="flex justify-between border-b py-3">
                            <span className="font-semibold uppercase bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent mr-5">Hometown:</span>
                            <span className="text-white font-semibold mr-auto">Sungai Pelek, Malaysia</span>
                        </div>
                        
                    </div>

                    <div className="mx-20 text-s tracking-normal leading-relaxed overflow-hidden font-mono">
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
                        id="career card">
                            
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold">
                                    Cloud Solution Architect
                                </h3>
                                <p className="text-gray-500 bg-gray-200 py-1 px-3 rounded-full text-sm">
                                    2025.9 - Present
                                </p>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-lg font-semibold">Amazon Web Service, London</h4>
                                <p className="text-gray-600 mt-1 text-sm">Supporting business to build product using AWS cloud</p>
                            </div>

                            <CareerCard
                            title={"Computer Science Intern"}
                            company={"Footfallcam, Sungai Long"}
                            description={"I help ChinKit (manager) write code and IT stuff"}
                            date={"2023.6 - 2023.9"}/>

                            <CareerCard
                            title={"Temporary Teacher"}
                            company={"SJK(C) Tche Min, Sungai Pelek"}
                            description={"I make sure kids finish their homework"}
                            date={"2022.5 - 2022.7"}/>

                            <div className="flex flex-wrap gap-2 mt-4">

                                <span className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-xs font-medium">
                                    AWS Cloud
                                </span>
                                <span className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-xs font-medium">
                                    React
                                </span>
                                <span className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-xs font-medium">
                                    Git
                                </span>
                                <span className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-xs font-medium">
                                    Python
                                </span>
                                <span className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-xs font-medium">
                                    Javascript
                                </span>
                            </div>

                        </div>
                    </div>
                    

                    {/* Project */}
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="my-10 text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent bg-amber-200">
                            Project
                        </h1>

                        <div className="flex flex-grow bg-amber-500 opacity-70 my-3 rounded-xl h-100 p-3 w-full " id="card">
                            <ProjectCard
                            link={"https://amazon-deploy.vercel.app/"}
                            title={"Amazon Web Clone"}
                            description={"Amazon e-commerce clone.Implemented user accounts, product listings, carts, and secure payments with responsive UI and server-side rendering for fast, seamless performance."}
                            technologies={['React','Javascript','Stripe','Tailwind CSS']}/>

                            <ProjectCard
                            link={"https://www.google.com"}
                            title={"Crypto Trading Automation"}
                            description={"Developed an automated crypto trading system using Pine Script, webhooks, Bybit API, AWS Lambda, and Automa extension to execute trades seamlessly."}
                            technologies={['Automa','Pine Script','Python']}
                            />

                            
                            <ProjectCard
                            link={"https://github.com/swlee123/fyp_3DSegmentation-of-Oil-palm-Bunches-and-Fronds-for-Autonomous-Harvesting"}
                            title={"3D Point Cloud Segmentation for Oil Palm Trees"}
                            description={"Research FYP evaluating models for segmenting oil palm organs (trunk, branches, leaves, fruits) from 3D point clouds."}
                            technologies={['Machine Learning','Python']}
                            />

                            <ProjectCard
                            link={"https://github.com/swlee123/DIA_Autonomous_Warehouse"}
                            title={"Multi-Agent Pathfinding Simulation for Warehouse Environments"}
                            description={"Implemented experiments with A*, Dijkstra, and SEAC algorithms in warehouse environments. Built configurable simulations with agents, obstacles, and humans, and automated result generation"}
                            technologies={['Python','PathFinding']}
                            />

                        </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="my-10 text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent bg-amber-200">
                            Technologies
                        </h1>

                        <div className="flex flex-col mt-3 rounded-xl h-100 p-3 w-full " id="card_2">

                            <div className="flex flex-row justify-center"> 
                                <img 
                                className="w-40 h-40 m-3"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" 
                                />

                                <img 
                                className="w-40 h-40 m-3"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" />

                                <img 
                                className="w-40 h-40 m-3"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />

                                
                                <img 
                                className="w-40 h-40 m-3"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
            
                                
                                <img 
                                className="w-40 h-40 m-3"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />

                                
                                <img 
                                className="w-40 h-40 m-3"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />

                                
                            
                            </div>

                            <div className="flex flex-row justify-center mb-3   ">
                                <img 
                                    className="w-40 h-40 m-3"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />
                                

                                <img 
                                className="w-40 h-40 m-3"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain-wordmark.svg" />
          
                                
                                <img 
                                className="w-40 h-40 m-3"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />
                            
                                
                                <img 
                                className="w-40 h-40 m-3"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original-wordmark.svg" />
          

                            </div>
                            

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