import trollface from "../images/troll-face.png"

const Header = () => {
    return (
        <header className="header">
            <img className="header--image" src={trollface} />
            <h2 className="header--title">Header component</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    );
}

export default Header;