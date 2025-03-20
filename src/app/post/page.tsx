'use client'

import { redirect } from "next/navigation";
import { FormEvent, useRef, useState } from "react";

const post = ()=>{

    const [titleError, setTitleError] = useState("");
    const [ContentError, setContentError] = useState("");
    const [imageFile, setImageFile] = useState<string[]>([]);

    const title = useRef<HTMLInputElement| null>(null)
    const content = useRef<HTMLTextAreaElement| null>(null)

    const handleSubmit = async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(title?.current?.value === "" ){
            setTitleError("Enter an article Name!")
            return
        }

        if(content?.current?.value === "" ){
            setContentError("Enter an article Content!")
            return
        }
        setTitleError("")
        setContentError("")

        const post = {
            slug: title.current?.value.trim().toLocaleLowerCase().replaceAll(" ", "-"),
            articleName: title.current?.value,
            articleContent: content.current?.value.split("\n\n"),
            articleImages: imageFile
        }
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/`, {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(post)
        })
        redirect('/')
    }

    return (
        <div className="pb-8 md:w-1/2 md:m-auto min-h-[78vh] mx-3">
            <h2 className="text-2xl md:text-2xl font-bold text-[#222] text-center px-1 py-2 capitalize">Write An Article</h2>
            <form className="bg-[#cccccc7a] p-3 rounded-md mb-5" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    ref={title}
                    placeholder="type an article name" 
                    className="block my-0 mx-1 p-2 w-[40%] border rounded-md outline-none"
                />
                { titleError && <p className="text-red-500 px-3">{titleError}</p>}
                <div className="leading-5 bg-[#f9f9f9] px-7 py-5 rounded-md mt-3">
                    <textarea 
                        ref={content}
                        placeholder="write an article"
                        className="block border w-full h-[200px]  p-3 rounded-md outline-none" 
                    >
                    </textarea>
                    { ContentError && <p className="text-red-500">{ContentError}</p>}
                    <div className="py-2">
                        <label htmlFor="images">Choose Images:</label> 
                        <input 
                            type="file" 
                            name="images" 
                            accept="image/*"
                            onChange={(e)=>{ 
                                if(e.target.files){
                                    setImageFile([...imageFile, URL.createObjectURL(e.target.files[0])])
                                }
                            }} 
                            multiple
                        /> 
                        {imageFile && <div className="flex gap-3 flex-wrap p-2">
                            { imageFile.map((img,idx)=> <img width="50" height="50" key={idx} src={img} alt="" />)}
                        </div>
                        }
                    </div>
                    <div className="flex gap-3 justify-center">
                        <button  className="px-4 py-1 text-white rounded-md bg-[#2d5033] hover:bg-[#3f6849]" type="submit">
                            Post Article
                        </button>
                        <input  className="px-4 py-1 rounded-md bg-red-700 hover:bg-red-500 text-white" type="reset" value="Reset" onClick={()=> setImageFile([])} />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default post;