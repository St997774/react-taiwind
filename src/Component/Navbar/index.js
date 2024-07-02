import Home from "../../pages/User/Home/home";

function Navbar() {
    return <>
        <div className=" flex bg-red-800">
            <nav>
                <ul className="flex border-b">
                    <li className="mr-7 mb-1 text-2xl hover:text-black text-white">
                        <a href="/">Home</a>
                    </li>
                    <li className="mr-7 mb-1 text-2xl hover:text-black text-white">
                        <a href="/counter">Counter</a>
                    </li>
                    <li className="mr-7 mb-1 text-2xl hover:text-black text-white">
                        <a href="#">Galary</a>
                    </li>
                    <li className="mr-7 mb-1 text-2xl hover:text-black text-white">
                        <a href="#">About</a>
                    </li>
                    <li className="mr-7 mb-1 text-2xl hover:text-black text-white">
                        <a href="#">Contact Us</a>
                    </li>
                </ul>
            </nav>
            {/* <ul class="flex border-b">
                <li class="-mb-px mr-1">
                    <a class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" href="#">Active</a>
                </li>
                <li class="mr-1">
                    <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">Tab</a>
                </li>
                <li class="mr-1">
                    <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">Tab</a>
                </li>
                <li class="mr-1">
                    <a class="bg-white inline-block py-2 px-4 text-gray-400 font-semibold" href="#">Tab</a>
                </li>
            </ul> */}
        </div>
    </>
}

export default Navbar;