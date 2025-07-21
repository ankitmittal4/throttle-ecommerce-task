import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-black text-white p-4 flex justify-between">
            <Link to="/" className="font-bold text-xl">F1 Streetwear</Link>
            <div className="flex gap-4">
                <Link to="/login">Login</Link>
                <Link to="/cart">Cart</Link>
            </div>
        </nav>
    );
}

export default Navbar;
