'use client';

import { useEffect , useState, useCallback , useRef } from "react";
import MarkdownIt from 'markdown-it';


// function to parse markdown content and add css style
function processCss(string){
  const parser = new DOMParser()
  const doc = parser.parseFromString(string,"text/html");

    // Find all ordered lists
  doc.querySelectorAll("ol").forEach(ol => {
    const items = ol.querySelectorAll("li");
    items.forEach((li, index) => {
      // Prepend number only if not already numbered
      if (!/^\d+\./.test(li.textContent.trim())) {
        li.textContent = `${index + 1}. ${li.textContent.trim()}`;
      }

      li.style.marginLeft = "20px";
    });
  });
  
  doc.querySelectorAll("h1").forEach(h1 => {
    h1.className = "text-4xl font-bold"

  });
  
    
  doc.querySelectorAll("h2").forEach(h2 => {
    h2.className = "text-2xl font-semibold"

  });

  doc.querySelectorAll("h3").forEach(h3 => {
    h3.className = "text-xl font-semibold"

  });

  doc.querySelectorAll("p a").forEach(a => {

    a.className = "font-semibold text-blue-600 underline"
  
  })

  doc.querySelectorAll("pre").forEach(pre => {
    // style the <pre>
    pre.className = "my-5";
  
    // style the <code> inside it
    const code = pre.querySelector("code");
    if (code) {
      code.className = "bg-green-400 text-black p-5";
    }

    // change some nice color 
  });
  
  
  // Return the updated HTML
  return doc.body.innerHTML;

}

export default function MarkdownEditor()
{
    const [input,setInput] = useState("")
    const [renderedContent,setRenderedContent] = useState("")
    
    // Create markdown-it instance outside of useEffect to avoid recreation
    const md = useRef(null);
    
    useEffect(() => {
        // Initialize markdown-it instance
        if (!md.current) {
            md.current = MarkdownIt({
              html: true,
              linkify: true,
              typographer: true,
            }
            );
        }
    }, []);
    
    useEffect(() => {
          
  
        if(!md.current) return;
      
          try {
            const rendered = processCss(md.current.render(input))
            setRenderedContent(rendered)
            console.log("output:", rendered)
       
          } catch (error) {
            console.error('Error parsing markdown:', error);
            setRenderedContent('<p class="text-red-500">Error parsing markdown</p>');
          }
        console.log("input:", input);
    }, [input]);
    
    return (
            
        <div className="flex bg-white">
    
            <textarea 
            className="p-1 bg-amber-200 flex-1 h-64 resize-none" 
            id="editor"
            value = {input}
            onChange={(e)=>setInput(e.target.value)}
            placeholder="Enter markdown here ... ">
            </textarea>

            <div 
                className="bg-amber-800 p-4 flex-1 h-64 overflow-auto text-white markdown-content"
                id="viewer"
                dangerouslySetInnerHTML={{__html:renderedContent}}
            />
            
        

        </div>
    )
    
}