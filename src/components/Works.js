import React from 'react'
import WorksTab from './WorksTab'

const Works = () => {

    return (
            <main className="works bg under">
                <div className="container">
                    <h2 className="ttl">Works</h2>
                    <p className="description">これまでの制作実績です。<br/>主に個人としてのWeb制作（コーディング）とJavascriptのライブラリであるReact JSを用いたアプリ制作を載せております。</p>
                    <WorksTab />
                </div>
            </main>
    )
}

export default Works
