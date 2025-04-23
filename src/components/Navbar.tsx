export default function Navbar() {
    return <div className="bg-base-100 w-full">
        <nav className="container mx-auto navbar shadow-sm h-1/12 shrink-0">
            <div className="flex-1">
                <a className="btn btn-ghost text-3xl">JOKER</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="#why-us">Why Us</a></li>
                    <li><a href="#how-to-order">How To Order</a></li>
                    <li><a href="#expertise">Our Expertise</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    </div>
}