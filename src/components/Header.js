import React from 'react'

import Footer from './Footer'
import profile from '../assets/images/sergeichestakov.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={profile} alt="Profile photo" /></a>
                    <h1><strong>Hi I'm Sergei </strong><br />
                    <span id="description">CS Student & </span><br />
                    Software Engineer</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
