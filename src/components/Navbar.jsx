import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div id="navbar">
            <Link to="/blue">Blue</Link>
            <Link to="/red">Red</Link>
        </div>
    );
}