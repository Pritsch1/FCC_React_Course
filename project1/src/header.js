function Header() {
    return (
        <div>
            <header>
                <nav className="nav-bar">
                    <img className="logo" src='./react_logo.png' alt="React Logo" />
                    <h3>React Facts</h3>
                    <ul className="nav-items">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export { Header };