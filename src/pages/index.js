import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Gallery from '../components/Gallery'

import favicon from '../assets/images/favicon.jpg'
import resume from '../assets/Resume.pdf'

import expo from '../assets/images/expo.jpg'
import schedulehelper from '../assets/images/schedule-helper.png'
import nosegoes from '../assets/images/nosegoes.jpg'
import smartsensor from '../assets/images/smart-sensor.jpg'
import todotoissue from '../assets/images/todo-to-issue.png'
import phase from '../assets/images/phase.png'
import comma from '../assets/images/comma.png'
import uncoveryourusage from '../assets/images/uncoveryourusage.jpg'

const PROJECTS = [
    { id: '1', src: 'https://getschedulehelper.com', thumbnail: schedulehelper, caption: 'Schedule Helper', description: 'Chrome Extension that helps UC Davis students build their schedules by highlighting conflicts and displaying professor ratings. Over 10,000 monthly active users (30% of students).'},
    { id: '2', src: "https://docs.expo.io/versions/latest/sdk/in-app-purchases/", thumbnail: expo, caption: 'Expo In-App Purchases', description: 'React Native module and NPM package that abstracts over the native Android and iOS billing libraries and exposes a JS API to allow developers to monetize their RN/Expo apps.'},
    { id: '3', src: "https://crates.io/crates/todo-to-issue", thumbnail: todotoissue, caption: 'Todo-to-issue', description: 'CLI tool that converts forgotten TODO comments into actionable GitHub issues interactively. Written entirely in Rust.'},
    { id: '4', src: "https://github.com/mattrasto/phase", thumbnail: phase, caption: 'Phase', description: 'Network graph visualization library for complex systems and simulations. Built on top of D3.js to expose a simple API for creating dynamic graphs with real-time events.'},
    { id: '5', src:'https://devpost.com/software/nosegoes-45g87z', thumbnail: nosegoes, caption: 'Nose Goes', description: 'Python application that allows a user to control their web browser entirely hands free using only facial gestures and voice commands. Built using OpenCV, Selenium, and GCP.'},
    { id: '6', src:'https://devpost.com/software/smart-sensor', thumbnail: smartsensor, caption: 'Smart Sensor', description: 'IoT Device that monitors the number of people in a room and automates lights to reduce energy consumption. Won Best Environmental Hack at HackDavis.'},
    { id: '7', src: 'https://comma-visualizer.herokuapp.com/', thumbnail: comma, caption: 'Speed Visualizer', description: 'Web application that allows you to visualize the distribution of speed for every trip recorded by Comma.ai on any given day from their dataset. Built using Flask, SQLite, and Mapbox.js.'},
    { id: '8', src: "https://devpost.com/software/uncover-your-usage", thumbnail: uncoveryourusage, caption: 'Uncover Your Usage', description: 'Web application that uses a custom pretrained model to predict your annual energy usage based on an analysis of your household features. Built using Flask, Vue.js, and Keras.'}
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
                        <meta name="theme-color" content="#212121" />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <h2>About Me</h2>
                        <p>I'm currently interning at Google on the Assistant team.
                            Previously, I interned at Expo where I worked on making mobile apps easier to build.
                            After that, I'll be finishing up my Computer Science degree and looking for full time opportunities.
                            In my free time, I build side projects, read books, and powerlift.</p>
                        <ul className="actions">
                            <li><a href={resume} className="button" target="_blank" rel="noopener noreferrer">Resume</a></li>
                        </ul>
                    </section>

                    <section id="two">
                        <h2>Projects</h2>
                        <p>I'm passionate about creating products that make people's lives easier. Here are some things I've built:</p>

                        <Gallery images={PROJECTS.map(({ id, src, thumbnail, caption, description }) => ({
                            src,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        <ul className="actions">
                            <li><a href="https://github.com/sergeichestakov" target="_blank" rel="noopener noreferrer" className="button">See More</a></li>
                        </ul>
                    </section>

                    <section id="three">
                        <h2>Contact</h2>
                        <p>Hit me up if you're in the Bay Area! I'd love to grab coffee and chat.</p>
                        <div className="row">
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-twitter"><span className="label">Twitter</span></h3>
                                        <a href="https://twitter.com/sergeichestakov">@SergeiChestakov</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="mailto:sergei332@gmail.com">sergei332@gmail.com</a>
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
