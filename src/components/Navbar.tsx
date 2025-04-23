import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return <div className="bg-base-100 w-full sticky top-0 z-50 md:border-none border-b border-gray-700">
        <nav className="container mx-auto navbar h-1/12 shrink-0 px-4 md:px-0">
            <div className="flex-1">
                <a className="btn btn-ghost text-3xl">JOKER</a>
            </div>
            <div className="hidden md:block flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="#why-us">Why Us</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#how-to-order">How To Order</a></li>
                    <li><a href="#expertise">Our Expertise</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>

            <div className="px-2 py-1 rounded-md btn">
                <Menu size={30} onClick={() => setIsOpen(p => !p)} />
            </div>
        </nav>

        <div style={{ transition: 'height linear .3s' }} className={`absolute bg-base-300 left-0 top-full right-0  z-50 overflow-hidden ${isOpen ? "h-52" : 'h-0'}`}>
            <ul className={`flex flex-col justify-around gap-y-3 h-52 p-4`}>
                <li><a href="#why-us">Why Us</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#how-to-order">How To Order</a></li>
                <li><a href="#expertise">Our Expertise</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </div>
}