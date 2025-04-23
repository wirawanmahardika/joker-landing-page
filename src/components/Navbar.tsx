export default function Navbar() {
    return <nav className="navbar bg-base-100 shadow-sm h-1/12 shrink-0">
        <div className="flex-1">
            <a className="btn btn-ghost text-3xl">JOKER</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li><a>About</a></li>
                <li><a>Features</a></li>
                <li><a>Services</a></li>
                <li><a>Pricing</a></li>
            </ul>
        </div>
    </nav>
}