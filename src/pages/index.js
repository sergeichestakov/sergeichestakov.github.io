import React from "react";
import Helmet from "react-helmet";

import Layout from "../components/layout";
import Gallery from "../components/Gallery";

import favicon from "../assets/images/favicon.jpg";

import expo from "../assets/images/expo.jpg";
import schedulehelper from "../assets/images/schedule-helper.png";
import nosegoes from "../assets/images/nosegoes.jpg";
import smartsensor from "../assets/images/smart-sensor.jpg";
import todotoissue from "../assets/images/todo-to-issue.png";
import phase from "../assets/images/phase.png";
import snapcode from "../assets/images/snapcode.png";
import webmote from "../assets/images/webmote.jpg";

import deeplinking from "../assets/images/deeplinking.png";
import multitabs from "../assets/images/multitabs.png";
import search from "../assets/images/search.png";
import shell from "../assets/images/tabbed-shell.png";
import markdown from "../assets/images/markdown-preview.png";
import captcha from "../assets/images/hcaptcha.png";
import boosts from "../assets/images/boosts.jpg";
import vite from "../assets/images/vite.png";

const WORK_PROJECTS = [
  {
    src: "https://blog.replit.com/deeplinking",
    thumbnail: deeplinking,
    caption: "Deeplinking",
    description: "Link to a specific file, line, and column.",
  },
  {
    src: "https://blog.replit.com/multitabs",
    thumbnail: multitabs,
    caption: "Tabs",
    description: "Open multiple files in different tabs.",
  },
  {
    src: "https://blog.replit.com/commandbar",
    thumbnail: search,
    caption: "Search",
    description: "Project-wide search.",
  },
  {
    src: "https://blog.replit.com/tabbed-shell",
    thumbnail: shell,
    caption: "Tabbed Shell",
    description: "A better shell experience.",
  },
  {
    src: "https://blog.replit.com/markdown-preview",
    thumbnail: markdown,
    caption: "Markdown Preview",
    description: "A real time preview pane for markdown files.",
  },
  {
    src: "https://www.hcaptcha.com/",
    thumbnail: captcha,
    caption: "hCaptcha",
    description: "Led site-wide migration from reCaptcha to hCaptcha.",
  },
  {
    src: "https://blog.replit.com/boosts",
    thumbnail: boosts,
    caption: "Boosts",
    description: "Increased CPU and RAM resource limits for paid users.",
  },
  {
    src: "https://blog.replit.com/vite",
    thumbnail: vite,
    caption: "Vite",
    description: "A faster and leaner React template.",
  },
];

const PERSONAL_PROJECTS = [
  {
    src: "https://twitter.com/SergeiChestakov/status/1289726580210561025?s=20",
    thumbnail: snapcode,
    caption: "Snapcode",
    description: "Take a picture of handwritten code and run it.",
  },
  {
    src: "https://docs.expo.io/versions/latest/sdk/in-app-purchases/",
    thumbnail: expo,
    caption: "Expo In-App Purchases",
    description:
      "A React Native module for In-App Purchases on iOS and Android.",
  },
  {
    src: "https://devpost.com/software/nosegoes-45g87z",
    thumbnail: nosegoes,
    caption: "Nose Goes",
    description: "Control your web browser hands free.",
  },
  {
    src: "https://getschedulehelper.com",
    thumbnail: schedulehelper,
    caption: "Schedule Helper",
    description: "A Chrome Extension for UC Davis students. Over 15,000 MAUs.",
  },
  {
    src: "https://devpost.com/software/webmote-tkf2lc",
    thumbnail: webmote,
    caption: "Webmote",
    description:
      "A remote control for your browser. Won prize at TreeHacks '19.",
  },
  {
    src: "https://crates.io/crates/todo-to-issue",
    thumbnail: todotoissue,
    caption: "Todo-to-issue",
    description: "CLI tool that converts TODO comments into GitHub issues.",
  },
  {
    src: "https://devpost.com/software/smart-sensor",
    thumbnail: smartsensor,
    caption: "Smart Sensor",
    description: "IoT Device that automates your lights. Won HackDavis '17.",
  },
  {
    src: "https://github.com/mattrasto/phase",
    thumbnail: phase,
    caption: "Phase",
    description:
      "Graph visualization library for complex systems and simulations.",
  },
];

export default class HomeIndex extends React.Component {
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

  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return;

    this.gotoNext();
  }

  render() {
    const siteTitle = "Sergei Chestakov | Portfolio";
    const siteDescription = "Personal Portfolio Website for Sergei Chestakov";

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
            <p className="description">
              I'm currently a software engineer at{" "}
              <a
                href="https://replit.com"
                target="_blank"
                rel="noreferrer noopener nofollow"
              >
                Replit
              </a>{" "}
              where we're building the future of programming. Previously, I've
              worked at{" "}
              <a
                href="https://coda.io"
                target="_blank"
                rel="noreferrer noopener nofollow"
              >
                Coda
              </a>
              ,{" "}
              <a
                href="https://duckduckgo.com"
                target="_blank"
                rel="noreferrer noopener nofollow"
              >
                Google
              </a>
              , and{" "}
              <a
                href="https://expo.io"
                target="_blank"
                rel="noreferrer noopener nofollow"
              >
                Expo
              </a>
              . I've also contracted for a number of other startups on the side.
            </p>
          </section>

          <section id="two">
            <h2>Work</h2>
            <p>
              At Replit, I've built a lot. Here are some of the major features
              that I designed, implemented, and shipped:
            </p>

            <Gallery
              images={WORK_PROJECTS.map(
                ({ src, thumbnail, caption, description }) => ({
                  src,
                  thumbnail,
                  caption,
                  description,
                })
              )}
            />
          </section>

          <section id="three">
            <h2>Projects</h2>
            <p>
              I'm passionate about building products that help people. Here are
              some things I've built in my free time:
            </p>

            <Gallery
              images={PERSONAL_PROJECTS.map(
                ({ src, thumbnail, caption, description }) => ({
                  src,
                  thumbnail,
                  caption,
                  description,
                })
              )}
            />

            <ul className="actions">
              <li>
                <a
                  href="https://github.com/sergeichestakov"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="button"
                >
                  See More
                </a>
              </li>
            </ul>
          </section>

          <section id="three">
            <h2>Contact</h2>
            <p>
              Hit me up if you're in the Bay Area! I'd love to grab coffee and
              chat.
            </p>
            <div className="row">
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="fab fa-twitter"></h3>
                    <a
                      href="https://twitter.com/sergeichestakov"
                      target="_blank"
                      rel="nofollow noreferrer noopener"
                    >
                      @SergeiChestakov
                    </a>
                  </li>
                </ul>
              </div>

              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="fa fa-envelope-o"></h3>
                    <a href="mailto:me@sergei.com">me@sergei.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}
