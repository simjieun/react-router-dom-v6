import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div>
            <h1>My App</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/teams">Team</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}
