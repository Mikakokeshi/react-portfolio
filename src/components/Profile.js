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
                    <p className="name">M.I</p>
                    <span className="subttl">Age / Gender</span>
                    <p className="age">28歳 / 女性</p>
                    <p className="description">新卒でWebマーケティング会社でSEOの新規営業として働き、クライアントのwebサイトのソースコードを見るうちにweb制作に興味を持つ。それがきっかけとなり、コーディングを勉強後、Web制作会社に就職する。百貨店のキャンペーンページ、企業のコーポレートサイト、Vtuberの公式サイト等の制作に携わる。
                    <br/>現在はフロントエンドエンジニアとしてキャリアを積みたいと考え、React勉強中。
                    </p>
                </div>
            </section>
            <section className="sec_skill">
                <h2 className="ttl">SKILL</h2>
                <ul className="skill_wrap">
                    <li className="skill_wrap__item">
                        <h3>HTML/CSS</h3>
                        <div className="skill_graph"><img src={graph_1} alt="グラフ"/></div>
                        <p className="description">HTML/CSSは問題なく使うことができます。レスポンシブサイトの作成経験もあります。基本的なコーディングは問題ありません。使用するエディターVScodeです。</p>

                    </li>
                    <li className="skill_wrap__item">
                        <h3>Javascript</h3>
                        <div className="skill_graph"><img src={graph_3} alt="グラフ"/></div>
                        <p className="description">基本的なDOM操作やAPI取得、またReactライブラリの実装も可能です。</p>

                    </li>
                </ul>
            </section>
        </div>
    </main>
    )
}

export default Profile
