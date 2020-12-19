import React from 'react'
import WorksTab from './WorksTab'

const Works = () => {
    return (
            <main className="works bg under">
                <div className="container">
                    <h2 className="ttl">Works</h2>
                    <p className="description">制作実績です。主に個人としてのWeb制作（コーディング）の記録です。<br/>Reactアプリも含んでいます。</p>
                    <WorksTab />
                </div>
            </main>
    )
}

export default Works
