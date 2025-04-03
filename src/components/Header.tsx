import Link from "next/link";
import Search from "./Search";

const Header = async()=> {

    const titles = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/titles`, {cache: "no-store"}).then(res=> res.json())

    return (
        <header>
            <span className="block text-center text-3xl my-3">Travel Articles</span>
            <nav className="flex flex-wrap bg-[#e9dcdc] items-center px-5 justify-center md:justify-between">
                <ul className='flex'>
                    <li><Link href={"/"} className="flex justify-center md:text-lg p-2 hover:bg-[#f7ecb9]">Home</Link></li>
                    <li><Link href={"/about"} className="flex justify-center md:text-lg p-2 hover:bg-[#f7ecb2]">About</Link></li>
                    <li><Link href={"/post"} className="flex justify-center md:text-lg p-2 hover:bg-[#f7ecb2]">Post Article</Link></li>
                    <li><a href="#contact" className="flex justify-center md:text-lg p-2 hover:bg-[#f7ecb2]">Contact</a></li>
                </ul>
                <div>
                    <Search titles={titles} />
                </div>
            </nav>
        </header>
    )
}

export default Header;