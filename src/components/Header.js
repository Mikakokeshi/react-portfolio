import React, {useState} from 'react'
import logo from "../assets/img/logo_1.png";
import { Link } from 'react-router-dom'


const Header = () => {
    const [selectedMenu, setSelectedMenu] = useState(0)

    const handleChange = (event, newValue) => {
        setSelectedMenu(newValue)
        console.log(newValue)
    }
    return (
        <header>    
            <h1 className="header_logo"> <a href="./"><img src={logo} alt="portfolio"/></a></h1>  
            <ul className="menu" value={selectedMenu} onChange={handleChange}>
                <li><Link to="/" >トップ</Link></li>    
                <li><Link to="/profile" >プロフィール</Link></li>    
                <li><Link to="/works" >制作実績</Link></li>    
                <li><Link to="/contact" >お問い合わせ</Link></li>  
            </ul> 
        </header>
    )
}

export default Header
