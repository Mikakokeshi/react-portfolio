import React from 'react'
import logo from "../assets/img/logo_1.png";
import { Link } from 'react-router-dom'

const Home = () => {
    return (
            <main className="home bg">
                <div className="container">
                    <div className="mv_txt">
                        <h2> <img src={logo} alt="portfolio"/></h2>  
                        <p>Web Engineer</p>
                        <Link to="/Works">WORKS</Link>
                    </div>
                </div>
            </main>
    )
}

export default Home
