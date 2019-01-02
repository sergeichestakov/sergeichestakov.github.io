import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Gallery from '../components/Gallery'

import favicon from '../assets/images/favicon.jpg'
import resume from '../assets/Resume.pdf'

import schedulehelper from '../assets/images/schedule-helper.png'
import nosegoes from '../assets/images/nosegoes.jpg'
import smartsensor from '../assets/images/smart-sensor.jpg'
import phase from '../assets/images/phase.png'
import comma from '../assets/images/comma.png'
import uncoveryourusage from '../assets/images/uncoveryourusage.jpg'

const PROJECTS = [
    { id: '1', src: 'https://getschedulehelper.com', thumbnail: schedulehelper, caption: 'Schedule Helper', description: 'Chrome Extension that helps UC Davis students select their schedules by highlighting conflicts and displaying professor ratings. Recieved over 10,000 downloads (30% of students).'},
    { id: '2', src:'https://devpost.com/software/nosegoes-45g87z', thumbnail: nosegoes, caption: 'Nose Goes', description: 'Python application that allows a user to control their web browser entirely hands free using only facial gestures and voice commands. Built using OpenCV, Selenium, and GCP.'},
    { id: '3', src:'https://devpost.com/software/smart-sensor', thumbnail: smartsensor, caption: 'Smart Sensor', description: 'IoT Device that monitors the number of people in a room and automates lights to reduce energy consumption. Won Best Environmental Hack and Particle Prize at HackDavis.'},
    { id: '4', src: "https://github.com/mattrasto/phase", thumbnail: phase, caption: 'Phase', description: 'Network graph visualization library for complex systems and simulations. Built on top of D3.js to expose a simple API for creating dynamic graphs with real-time events.'},
    { id: '5', src: 'https://comma-visualizer.herokuapp.com/', thumbnail: comma, caption: 'Comma Visualizer', description: 'Web application that allows you to visualize the distribution of speed for every trip recorded by Comma on any given day. Built using Flask, SQLite, and Mapbox.js.'},
    { id: '6', src: "https://devpost.com/software/uncover-your-usage", thumbnail: uncoveryourusage, caption: 'Uncover Your Usage', description: 'Web application that predicts your annual energy usage based on an analysis of your household features. Built using Flask, Vue.js, and Keras.'}
];

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = "Sergei Chestakov | Portfolio"
        const siteDescription = "Personal Portfolio Website for Sergei Chestakov"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                        <link rel="shortcut icon" type="image/jpg" href={favicon} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Background</h2>
                        </header>
                        <p>I'm currently studying CS at UCSB and will be a software engineering intern at Google this summer.<br/>
                        I'm very passionate about technology and creating products that make people's lives easier.
                        </p>
                        <ul className="actions">
                            <li><a href={resume} className="button" target="_blank">Resume</a></li>
                        </ul>
                    </section>

                    <section id="two">
                        <h2>Projects</h2>

                        <Gallery images={PROJECTS.map(({ id, src, thumbnail, caption, description }) => ({
                            src,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        <ul className="actions">
                            <li><a href="https://github.com/sergeichestakov" target="_blank" className="button">See More</a></li>
                        </ul>
                    </section>

                    <section id="three">
                        <h2>Contact</h2>
                        <p>Feel free to reach out about opportunities, project ideas, or just to grab coffee!</p>
                        <div className="row">
                            <div className="8u 12u$(small)">

                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="mailto:sergeichestakov@ucsb.edu">schestakov@ucsb.edu</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex
