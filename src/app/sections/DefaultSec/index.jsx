import React from 'react'
import "@/app/styles/pages/page.scss"
const DefalutSec = ({ children }) => {
    return (
        <section className="default-sec">
            <div className="container">
                {children}
            </div>
            <div className="obj obj-1"></div>
            <div className="obj obj-2"></div>
            <div className="obj obj-3"></div>
        </section>
    )
}

export default DefalutSec;