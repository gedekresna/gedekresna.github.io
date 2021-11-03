import React from 'react'
import ReactTyped from 'react-typed'

export const Header = () => {
    return (
        <div className="Header-wraper">
            <div className="main-info">
                <h1>web development and promotions</h1>
                <ReactTyped
                    className="typed-text"
                    strings={["Web Design", "Web Development", "Video Editing", "Mobile Apps"]}
                    typeSpeed={48}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    )
}
