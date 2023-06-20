import { useRef } from "react";
import './navbar.css'
import { Link } from "react-router-dom";
import logo from '../../pictures/picturesPage/logo.png'
function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header className="navbar-container">
			<img src={logo} alt="" />
			<nav ref={navRef}>
				<Link onClick={showNavbar} to="/"><span className="nav-navigates">Home</span></Link>
				<Link onClick={showNavbar} to="/whoarewe"><span className="nav-navigates">Biz Kimiz?</span></Link>
				<Link onClick={showNavbar} to="/photos"><span className="nav-navigates">Galeri</span></Link>
				<Link onClick={showNavbar} to="/contact"><span className="nav-navigates">İletişim</span></Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<i class="fa-solid fa-bars"></i>
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<i class="fa-solid fa-bars"></i>
			</button>
		</header>
	);
}

export default Navbar;