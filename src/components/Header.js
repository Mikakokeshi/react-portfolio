import React, {useState} from 'react'
import logo from "../assets/img/logo_1.png";
import { NavLink } from 'react-router-dom'


const Header = () => {
    const [selectedMenu, setSelectedMenu] = useState(0)
    const [menuText, setMenuText] = useState({
        top:"トップ", profile:  "プロフィール", works:  "制作実績", contact: "お問い合わせ" 
    })
    const menuOverText = ["TOP", "PROFILE", "WORKS", "CONTACT"]

    const handleChange = (event, newValue) => {
        setSelectedMenu(newValue)
        console.log(newValue)
    }
    
    return (
        <header>    
            <h1 className="header_logo"> <a href="./"><img src={logo} alt="portfolio"/></a></h1>  
            <ul className="menu" value={selectedMenu} onChange={handleChange}>
                <li>
                    <NavLink exact to="/" onMouseEnter={()=>setMenuText(state =>({ ...state, top: menuOverText[0]}) )}  
                    onMouseLeave={()=>setMenuText(state =>({ ...state, top: "トップ"}))} >
                            { window.location.pathname==="/" ? 
                                    menuOverText[0]
                                     : menuText.top} 
                    </NavLink>
                </li>    
                <li>
                    <NavLink className="" to="/profile" onMouseEnter={()=>setMenuText(state =>({ ...state, profile: menuOverText[1]}) )}  
                    onMouseLeave={()=>setMenuText(state =>({ ...state, profile: "プロフィール"}) )} >
                            { window.location.pathname==="/profile" ? 
                                    menuOverText[1]
                                     : menuText.profile} 
                    </NavLink>
                </li>   
                <li>
                    <NavLink to="/works" onMouseEnter={()=>setMenuText(state =>({ ...state, works: menuOverText[2]}) )}  
                    onMouseLeave={()=>setMenuText(state =>({ ...state, works: "制作実績"}) )}
                     >
                            { window.location.pathname==="/works" ? 
                                    menuOverText[2]
                                     : menuText.works} 
                    </NavLink>
                </li>    
                <li>
                    <NavLink to="/contact" onMouseEnter={()=>setMenuText(state =>({ ...state, contact: menuOverText[3]}) )}  
                    onMouseLeave={()=>setMenuText(state =>({ ...state, contact: "お問い合わせ"}) )} >
                            { window.location.pathname==="/contact" ? 
                                    menuOverText[3]
                                     : menuText.contact} 
                    </NavLink>
                </li>  
            </ul> 
        </header>
    )
}

export default Header
