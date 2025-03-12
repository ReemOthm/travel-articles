import Link from "next/link";

const Header = ()=>{
    return (
        <header>
            <span className="block text-center text-3xl my-3">Travel Articles</span>
            <nav className="flex flex-wrap bg-[#e9dcdc] items-center px-5 justify-center md:justify-between">
                <ul className='flex'>
                    <li><Link href={"/"} className="flex justify-center md:text-lg p-2 hover:bg-[#f7ecb9]">Home</Link></li>
                    <li><Link href={"/about"} className="flex justify-center md:text-lg p-2 hover:bg-[#f7ecb2]">About</Link></li>
                    <li><Link href={""} className="flex justify-center md:text-lg p-2 hover:bg-[#f7ecb2]">Post Article</Link></li>
                    <li><a href="#contact" className="flex justify-center md:text-lg p-2 hover:bg-[#f7ecb2]">Contact</a></li>
                </ul>
                <div>
                    <div className="flex items-center">
                        <input type="search" name="search" placeholder="search for article" 
                            className="outline-none border border-[#ccc] py-1 pl-4 md:w-72 rounded-md"
                        />
                    </div>
                    <ul className="">
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;