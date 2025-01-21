//rfce
import { Link } from "react-router"

function MainNav() {
    return (
            <nav className="flex justify-between h-8 bg-cyan-500 px-4 items-center">
                <div className="flex gap-4">
                    <Link to='/'>Home</Link>
                    <Link to='about'>About</Link>
                    <Link to='contact'>Contact</Link>
                </div>
                <div className="flex gap-4">
                    <Link to='login'>Login</Link>
                    <Link to="register">Register</Link>
                </div>
            </nav>
    )
}

export default MainNav
