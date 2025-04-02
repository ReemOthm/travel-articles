import ArticleContainer from '@/components/ArticleContainer';
import { Article } from '@/types';
import { Open_Sans } from 'next/font/google'
import { Suspense } from 'react';

const open_sans = Open_Sans({ 
  subsets: ['latin'],
    display: 'swap',
    weight: "300",
    style: "italic"
})

export default async function Home() {

  let articles:Article[];
  
  try{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api`)
    articles = await res.json() 
  }catch(error){
    articles = []
  }

  // ----------------Rendere---------------
  const renderArticleList = articles.map(article => <li 
    key={article.id}>
      <a href={`#${article.id}`} className='block p-2 capitalize hover:bg-[#f7ecb9]'>
        {article.articleName}
      </a>
    </li>
  );

  const renderArticles = articles.map(article => <ArticleContainer key={article.id} article={article} />);

  return (
    <main className='pt-1 pb-12'>
      <span className={`block text-4xl font-sans w-fit bg-[#f7ecb9] m-4 py-2 px-2 -skew-x-12 -rotate-3 ${open_sans.className}`}>What&apos;s New!</span>
      <div className="flex gap-2 flex-col-reverse px-3 md:flex-row mb-5 md:items-start md:justify-center">
        <div className='md:w-1/2'>
            <Suspense fallback={Array.from({length: 4}).map((arr, index)=> <div key={index} className="bg-[#cccccc7a] p-1 rounded-md mb-5 h-56"></div> )}
            >
              { articles.length > 0 && renderArticles }
            </Suspense>
        </div>

        <aside className='p-4 rounded-md text-center bg-[#e9ebec]'>
          <h3 className='pb-2 font-bold text-xl'>Common Articles:</h3>
          <ul>
              <Suspense fallback={ Array.from({length: 4}).map((arr, index)=> <li key={index} className="bg-[#fff] p-3 rounded-md mb-5"></li> ) }>
                {renderArticleList}
              </Suspense>
          </ul>
        </aside> 
      </div>
    </main>
  );
}
