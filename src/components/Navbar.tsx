import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
    <nav className="border-b border-slate-800 bg-slate-950 sticky top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link to="/" className="text-xl font-bold tracking-tight text-white">UsersApp</Link>

            <div className="flex items-center gap-6">
                <NavLink to="/" className={({ isActive }) => isActive ? "font-medium text-blue-400": "font-medium text-slate-400 transition hover:text-white"}>Home</NavLink>
            
            
                <Link to="/users"></Link>
                <NavLink to="/users" className={({ isActive }) => isActive ? "font-medium text-blue-400" : "font-medium text-slate-400 transition hover:text-white"}>Users</NavLink>
            </div>
        </div>
    </nav>
    
    )
}

export default Navbar;