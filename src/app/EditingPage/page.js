"use client"

import dynamic from "next/dynamic"
import Image from "next/image";


const MarkdownEditor = dynamic(() => import('../components/MarkdownEditor'),{
    ssr:false,
    loading : () => {
      <div className="flex bg-white border border-gray-300 rounded-lg overflow-hidden">
      <textarea 
      className="p-4 bg-amber-200 flex-1 h-96 resize-none border-r border-gray-300"
       placeholder="Loading..." 
       readOnly />
      <div className="bg-amber-800 p-4 flex-1 h-96 overflow-auto border-l border-gray-300" />
    </div>
    }
  });

  

export default function page()
{

    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
            <div className="bg-black w-2xl items-center">
                <a className="text-red-600 py-10 px-5 items-center text-2xl">Markdown Editor </a>

                <MarkdownEditor/>

            </div>
  
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </div>

    )
}