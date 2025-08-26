import React from "react";
import Typewriter from "typewriter-effect"
import ParticlesBackground from "./ParticlesBackground"


export default function LandingHero()
{

    return(
        <div className="flex items-center justify-center w-full h-screen bg-[#7F55B1] text-white font-sans overflow-hidden relative">
            {/* Background with a subtle gradient effect for a professional look. */}
            {/* The from-purple-800 and to-indigo-900 colors create a deep, modern feel. */}
            
            {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-800 to-indigo-900 opacity-90"></div>*/}
            <div className="fixed top-0 right-0 left-0 h-full w-full opacity-90">
                <ParticlesBackground />
            </div>

                {/* A simple div to contain the content and add a blur effect. */}
            <div className="relative p-8 text-center backdrop-blur-sm bg-black/10 rounded-xl shadow-2xl max-w-2xl mx-auto">
                
                {/* Your personal greeting and name. */}
                <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold leading-tight mb-4 animate-fade-in-down">
                    Hello, I am Shang Wei 
                </h1>
                
                <div className="text-xl sm:text-2xl md:text-3xl font-light text-purple-200 mb-6 animate-fade-in">
                    <Typewriter
                        options={{
                            loop:true
                        }}
                        onInit={(typewriter) => {
                            typewriter.typeString('Cloud Solution Architect @AWS')
                            .pauseFor(2000)
                            .deleteAll()
                            typewriter.typeString("Fullstack Dev")
                            .pauseFor(2000)
                            .deleteAll()
                            typewriter.typeString("Tech Enthusiast")
                            .pauseFor(2500)
                            .deleteAll()
                            typewriter.typeString("Cat Lover @Home")
                            .pauseFor(2500)
                            .deleteAll()
                            .start();
                        }}
                    />
                </div>
                <p className="text-base font-serif sm:text-lg text-gray-300 mb-8 max-w-xl mx-auto animate-fade-in-up">
                    Works in cloud to protect your budget from runaway EC2 instances. Learning to design cloud solutions that are reliable, scalable, fault tolerance and secure.            
                </p>

                {/* github linkedin cv */}

                <div className=" flex justify-center items-center gap-6 mt-8 mb-3 ">
            
                    <a href="https://github.com/swlee123" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                        <svg fill="currentColor" viewBox="0 0 24 24" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.82-.257.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.542-1.373-1.322-1.743-1.322-1.743-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.492.998.108-.776.421-1.305.769-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.381 1.236-3.221-.124-.3-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.652 1.652.241 2.876.118 3.176.771.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.605-.015 2.894-.015 3.286 0 .32.217.696.825.577 4.766-1.587 8.205-6.085 8.205-11.385C24 5.373 18.627 0 12 0Z" />
                        </svg>
                    </a>



                    <a href="https://www.linkedin.com/in/shang-wei-lee-556028205/" target="_blank" rel="noopener noreferrer" aria-label="Resume" className="mb-2  w-9 h-7 text-gray-300 hover:text-purple-400 transition-colors duration-300">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABUElEQVR4nO2WsU4DMQyGA2yIkWfoxAOw8wjMvAMzYyckFtiZmBDPwESHLjfYqnOtiItYEDsvECRIpVLSHrpE14v4PynbyfZ3ih0bAwqCrfo+HQMRmxggEwyRAERKE6Faj1jchEQ/WPSqms0OWydLqCM5AIveLk8Vsu7SFCpy/2NEirtZ962IHLC41+Yx60bbELlbKWKYKkLinroXse5i5WqdtU6WUEdygKp62yer+v0ndey93zWljl8Sd/31Xa3nrRNlqKN1gAfv92gyPyXr3sO1mrLVE+/9TjHNzvXzcSg80qw6pno+KKLZWfSloZjH1kkjYEVZAJHMMEQCEMkMQ2RDgL+/0M0vdzyWGxUhsvxyx2LRNtb4rmCIBCCSGe5Ps/+eREVOLYpMonWxCFNrAxDJDEMkgF3LYteKApEFEMkMQyQAkb6KcE+O+fciwHTPJx/qVZb276pzAAAAAElFTkSuQmCC" alt="resume"></img>
                    </a>
                    
                    {/* LinkedIn Logo */}
       
                    <a href="https://www.linkedin.com/in/shang-wei-lee-556028205/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                        <svg fill="currentColor" viewBox="0 0 24 24" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.769s.784-1.769 1.75-1.769 1.75.79 1.75 1.769-.783 1.769-1.75 1.769zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                    </a>

                </div>
                {/* The call-to-action button. */}
                <a href="#" className="inline-block my-3 px-8 py-3 text-lg font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-full shadow-lg transition duration-300 transform hover:scale-105 animate-fade-in-up">
                    Discover More
                </a>
            </div>
            
        </div>


    )

}