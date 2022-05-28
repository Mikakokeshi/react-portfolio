import React from 'react'
import graph_1 from "../assets/img/skill_graph_1.png";
import graph_3 from "../assets/img/skill_graph_3.png";

const Profile = () => {
    return (
    <main className="profile bg under">
        <div className="container">
            <section className="sec_profile">
                <h2 className="ttl">PROFILE</h2>
                <div className="sec_profile__txt">
                    <span className="subttl">Name</span>
                    <p className="name">Mikako Iijima</p>
                    <span className="subttl">Age / Gender</span>
                    <p className="age">28歳 / 女性</p>
                    <p className="description">After graduating from college, I worked as an account executive at a web marketing company, where I became interested in web production as I looked at the source code of clients' websites. This led me to study coding and then to work for a web production company. I was involved in the production of campaign pages for a department store, a corporate website for a company, and an official website for a Vtuber.
Currently I am studying React in order to use modern frameworks in my work.
                    </p>
                </div>
            </section>
            <section className="sec_skill">
                <h2 className="ttl">SKILL</h2>
                <ul className="skill_wrap">
                    <li className="skill_wrap__item">
                        <h3>HTML/CSS</h3>
                        <div className="skill_graph"><img src={graph_1} alt="グラフ"/></div>
                        <p className="description">Experience in creating responsive websites more than 20.</p>

                    </li>
                    <li className="skill_wrap__item">
                        <h3>Javascript</h3>
                        <div className="skill_graph"><img src={graph_3} alt="グラフ"/></div>
                        <p className="description">Develop apps through DOM manipulation and API retrieval</p>

                    </li>
                </ul>
            </section>
        </div>
    </main>
    )
}

export default Profile
