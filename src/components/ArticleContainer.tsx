import { Article } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface IProps {
    article: Article
}

const ArticleContainer = ({article}:IProps)=>{

    const {articleName, articleContent, articleImages, id, slug} = article;

    // ----------Render----------
    const rendrImages = articleImages.map((img,index) => 
        <Image 
            key={index} 
            width={100} 
            height={50} 
            src={img} 
            alt={article.articleName}
        />
    )

    return (
        <div className="bg-[#cccccc7a] p-1 rounded-md mb-5" id={id}>
            <h2 className="w-fit text-[#222] py-1 px-2 capitalize text-xl font-bold">{articleName}</h2>
            <article id={id} className="leading-5 bg-[#f8f9fa] px-7 py-5 rounded-md">
                <p className="font-semibold">
                    {articleContent[0]}
                </p>
                <div className="py-6 flex justify-center gap-3">
                    {rendrImages}
                </div>
                <Link href={`/${slug}`} className="block w-fit bg-[#dddcdc] hover:bg-[#f7ecb2] rounded-md py-2 px-3 mx-auto">
                    Read More
                </Link>
            </article>
        </div>
    )
}

export default ArticleContainer;