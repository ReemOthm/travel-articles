"use client"

import { Titles } from "@/types";
import Link from "next/link";
import { useState } from "react";

interface IProps {
    titles: Titles[]
}

const Search = ({titles}:IProps)=>{
    
    const [listSearched, setListSearched] = useState<Titles[]>([]);

    // -------------HANDLER---------------
    const handelSearch = (e:React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.value == ""){
            setListSearched([])
            return
        }

        let array:Titles[] = []
        titles.map((art:Titles) =>{
            if(art.title.toLowerCase().startsWith(e.target.value.toLowerCase().trim()) || art.title.toLowerCase().includes(e.target.value.toLowerCase().trim())){
                array.push(art)
            }
        })
        setListSearched(array)
    };
    
    return (
        <>
            <div className="flex items-center">
                <input type="search" name="search" placeholder="search for article" 
                    className="outline-none border border-[#ccc] py-1 pl-4 md:w-72 rounded-md"
                    onChange={handelSearch}
                />
            </div>
            <ul className="min-w-60 md:min-w-72 absolute bg-gray-100 rounded-ee-md z-10">
                { listSearched.map((li:Titles,index)=> 
                    <li key={index}>
                        <Link href={`/${li.slug}`} className="block py-1 px-2 hover:bg-[#f7ecb2]">{li.title}</Link>
                    </li>
                )}
            </ul>
        </>
    )
}

export default Search;