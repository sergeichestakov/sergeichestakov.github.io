import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="mailto:schestakov@ucsb.edu" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                        <li><a href="https://github.com/sergeichestakov" className="icon fa-github" target="_blank"><span className="label">Github</span></a></li>
                        <li><a href="https://www.linkedin.com/in/sergeichestakov/" className="icon fa-linkedin" target="_blank"><span className="label">LinkedIn</span></a></li>
                        <li><a href="https://open.spotify.com/user/sergei332" className="icon fa-spotify" target="_blank"><span className="label">Spotify</span></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
