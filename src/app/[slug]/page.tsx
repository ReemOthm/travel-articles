import Image from "next/image";

const SingleArticle = async({ params}: {params: Promise<{ slug: string }> })=>{

    const data = await fetch(`http://localhost:3000/api/articles/${(await params).slug}`).then(res=> res.json())
    
    const renderArticlesContent = data.articleContent.map((content: string, index: number) => (
        <div key={index}>
            <p className="font-semibold leading-7">  
                {content}
            </p>  
            { data.articleImages[index] != undefined ? 
                <Image 
                    key={index} 
                    width={400} 
                    height={200} 
                    src={data.articleImages[index]} 
                    alt={data.articleName}
                    className="py-5 m-auto"
                /> 
                : null
            }    
        </div>
    ))

    return (
        <div className="pt-8 md:w-1/2 md:m-auto min-h-[78vh] mx-3">
            <div className="bg-[#cccccc7a] p-3 rounded-md mb-5">
                <h2 className="text-xl md:text-2xl w-fit text-[#222] px-1 py-3 capitalize">{data.articleName}</h2>
                <article className="leading-5 bg-[#f8f9fa] px-7 py-5 rounded-md">
                    { renderArticlesContent }
                </article> 
            </div>
        </div>
    )
}

export default SingleArticle;