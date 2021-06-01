import React from "react";
import profile from "./images/profile.jpg";
import project1 from "./images/project-1.JPG";
import project2 from "./images/project-2.JPG";
import project3 from "./images/project-3.JPG";


export function MainHeading() {
    // ------ Social Links in the side bar ------
    const SocialLinks = () => {
        return (
            <div className="social-links py-3 text-center">
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sairam-kotari/" className="linkedin m-1 text-white bg-secondary rounded-circle">
                    <i className="fab fa-linkedin fa-lg"></i>
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/sairam.kotari.7/" className="facebook m-1 text-white bg-secondary rounded-circle">
                    <i className="fab fa-facebook fa-lg"></i>
                </a>
                <a target="_blank" rel="noreferrer" href="https://twitter.com/sairam_kotari" className="twitter m-1 text-white bg-secondary rounded-circle">
                    <i className="fab fa-twitter fa-lg"></i>
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/sairam95kotari/" className="instagram m-1 text-white bg-secondary rounded-circle">
                    <i className="fab fa-instagram fa-lg"></i>
                </a>
                <a target="_blank" rel="noreferrer" href="https://join.skype.com/invite/Yxa9xFJfN7Ch" className="skype m-1 text-white bg-secondary rounded-circle">
                    <i className="fab fa-skype fa-lg"></i>
                </a>
            </div>
        )
    };
    // ------ Page Navigation Links in the side bar ------
    const MainNavigations = () => {
        return (
            <div className="main-navigations container-fluid py-4">
                <nav className="nav-menu px-4">
                    <ul className="list-unstyled">
                        <li className="nav-item active">
                            <a href="#Home" className="Home nav-link scrollto">
                                <i className="fas fa-home fa-lg"></i>
                                <span>Home</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#About" className="About nav-link scrollto">
                                <i className="fas fa-user fa-lg"></i>
                                <span>About</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#Resume" className="Resume nav-link scrollto">
                                <i className="fas fa-file fa-lg"></i>
                                <span>Resume</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#Projects" className="Projects nav-link scrollto">
                                <i className="fas fa-tasks fa-lg"></i>
                                <span>Projects</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#Contact" className="Contact nav-link scrollto ">
                                <i className="fas fa-envelope fa-lg"></i>
                                <span>Contact</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    };

    // ------------ Scroll Display Component ------------
    const ScrollDiaplay = () => {
        return (
            <div className="scroll-display">

            </div>
        )
    }

    return (
        <section id="header" className="Main-nav container bg-gradient">
            <div className="container-fluid py-4">
                {/* ------ Profile pic and Profile Name ------ */}
                <img className="profile-img img-fluid rounded-circle" alt="profile" src={profile} />
                <h1 className="profile-name text-light text-center">Sairam Kotari</h1>
                <SocialLinks />
                <MainNavigations />
                <ScrollDiaplay />
            </div>

        </section>
    )
}

// ------------ Main Body Component ------------
export function MainBody() {
    // ------------ Home Component ------------
    const Home = () => {
        return (
            <section id="Home" className="home">
                <button id="mobile-nav-toggle">
                    <i className="fas fa-list mobile-nav-toggle d-xl-none"></i>
                </button>
                <div className="home-container px-5">
                    <h1>Sairam Kotari</h1>
                    <p>I'm <span className="typed">a Developer</span></p>
                </div>

            </section>
        )
    };

    // ------------ About Component ------------
    const About = () => {
        // ------------ About Section Title Content ------------
        const SectionTitle = () => {
            return (
                <div className="section-title px-5">
                    <h2>About</h2>
                    <p>Positive driven and confident individual with an apt for learning new technology. Interested in the position of Web  Developer. Team player with clear and concise writing skills coming with excellent HTML, CSS and JavaScript skills. Hopeful for a Web Developer position to utilize programming skills.</p>
                </div>
            )
        }
        // ------------ About Section Body Content ------------
        const SectionBody = () => {
            return (
                <div className="about-content row pb-3 px-5">
                    <div className="about-img-container col-lg-4">
                        <img src={profile} className="img-fluid rounded" alt="" />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content">
                        <div className="sub-content">
                            <h3>Web Developer.</h3>
                            <p>Recently started career in Web Development, looking forward to get a good opportunity to use my skills and gain more knoledge.</p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-chevron-right"></i> <strong>Birthday:</strong> <span>19 June 1995</span></li>
                                        <li><i className="fas fa-chevron-right"></i> <strong>Website:</strong> <span>www.sairamkotari2.unaux.com</span></li>
                                        <li><i className="fas fa-chevron-right"></i> <strong>Phone:</strong> <span>+91 8019371377</span></li>
                                        <li><i className="fas fa-chevron-right"></i> <strong>City:</strong> <span>Tadepalli, Andhra Pradesh, India.</span></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                                        <li><i className="fas fa-chevron-right"></i> <strong>Degree:</strong> <span>Graduate</span></li>
                                        <li><i className="fas fa-chevron-right"></i> <strong>PhEmailone:</strong> <span>sairam_kotari@outlook.com</span></li>
                                        <li><i className="fas fa-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                    </ul>
                                </div>
                            </div>
                            <p>looking to leverage my experience building responsive and scaleable web apps to solve interesting problems that delight end-users. I’ve built a few projects by myself and I’m looking for a role where I can grow and learn from other experienced team members.</p>
                        </div>
                    </div>
                </div >
            )
        }

        // ------------ About Section Skills Content ------------

        const Skills = () => {
            const SkillsTitle = () => {
                return (
                    <div className="section-title pt-3">
                        <h2>Skills</h2>
                        <p>Recently started career in Web Development and used following skills in creating multiple web apps.</p>
                    </div>
                )
            }
            const SkillsBody = () => {
                return (
                    <div className="row skills-content pb-4">
                        <div className="skills-container-1 col-lg-6">
                            <div className="progress">
                                <span className="skill">HTML <i className="val">100%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">CSS <i className="val">90%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">JavaScript <i className="val">85%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: "85%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        <div className="skills-container-2 col-lg-6">
                            <div className="progress">
                                <span className="skill">Python <i className="val">40%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: "40%" }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">Bootstrap<i className="val">85%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: "85%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">Photoshop <i className="val">50%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            return (
                <div id="skills" className="skills px-5 py-4">
                    <SkillsTitle />
                    <SkillsBody />
                </div>
            )
        }
        return (
            <section id="About" className="about">
                <div>
                    <SectionTitle />
                    <SectionBody />
                    <Skills />

                </div>
            </section>

        )
    }

    // ------------ Resume Component ------------
    const Resume = () => {
        const SectionTitle = () => {
            return (
                <div className="section-title">
                    <h2>Resume</h2>
                    <p>Positive driven and confident individual with an apt for learning new technology. Interested in the position of Web  Developer. Team player with clear and concise writing skills coming with excellent HTML, CSS and JavaScript skills. Hopeful for a Web Developer position to utilize programming skills.</p>
                </div>
            )
        }
        const SectionBody = () => {
            const ResumeHeading = () => {
                return (
                    <div className="resume-head">
                        <h3>Sairam Kotari</h3>
                        <h5>Web Developer</h5>
                    </div>
                )
            }
            const Summary = () => {
                return (
                    <div className="summary">
                        <h3 className="resume-title">Sumary</h3>
                        <div className="resume-item pb-0">
                            <p><em>Front end developer who is comfortable working with JavaScript, HTML/CSS to deliver exceptional customer experiences.I enjoy working collaboratively but can also run with projects on my own.</em></p>
                            <ul>
                                <li>Tadepalli, Andhra Pradesh, India.</li>
                                <li>(+91) 8019371377</li>
                                <li>sairam_kotari@outlook.com</li>
                            </ul>
                        </div>
                    </div>
                )
            }

            const Skills = () => {
                return (
                    <div className="skills-list">
                        <h3 className="resume-title">Skills</h3>
                        <div className="resume-item">
                            <ul className="list-unstyled">
                                <li><strong>Programming languages: </strong>HTML/CSS, Javascript, Python.</li>
                                <li><strong>Frameworks: </strong>Javascript (NodeJS, ReactJS, jQuery).</li>
                                <li><strong>Databases: </strong>SQL (MySQL, SQLite).</li>
                                <li><strong>Cloud infrastructure: </strong>AWS.</li>
                                <li><strong>IT Recruitment: </strong>Sourcing, Negotiations, BenchSales, ATS Management.</li>
                            </ul>
                        </div>
                    </div>
                )
            }
            const Education = () => {
                return (
                    <div className="education">
                        <h3 className="resume-title">Education</h3>
                        <div className="resume-item">
                            <h4>Bachelor of Commerce</h4>
                            <h5>2013 - 2016</h5>
                            <p><em>P.B. Siddhartha College of Arts &amp; Science</em></p>
                            <p>Relevant Courses: <em>Accounting, Financial Management, Data Analysis with MS Excel, MS office.</em></p>
                        </div>
                    </div>
                )
            }
            const WorkExperience = () => {
                return (
                    <div className="work">
                        <h3 className="resume-title">Professional experience</h3>
                        <div className="resume-item">
                            <h4>Web Developer <span className="text-lowercase">(Intern)</span></h4>
                            <h5>Codegnan IT Solutions - <small><em>Feb 2021 - Present</em></small></h5>
                            <p><em>Tadepalli, Andhra Pradesh, India.</em></p>
                            <ul>
                                <li>Worked alongside another developer supporting in various ways to design scalable web apps</li>
                                <li>Developing features to enhance and ensure the user experience.</li>
                                <li>Ensuring web design is optimized for smartphones. Utilizing a variety of markup languages to write web pages.</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>Senior Technical Recruiter</h4>
                            <h5>E-Team Info Services - <small><em>July 2020 - December 2020</em></small></h5>
                            <p><em>Noida, Haryana, India(Remote).</em></p>
                            <ul>
                                <li>Overseen end to end US recruitment and complete onboarding process.</li>
                                <li>Supported juniors in understanding the client requirements</li>
                                <li>Overseen Client Management Process</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>Technical Recruiter</h4>
                            <h5>ACME Business Solutions - <small><em>July 2018 - July 2020</em></small></h5>
                            <p><em>Noida, Haryana, India(Remote).</em></p>
                            <ul>
                                <li>Overseen end to end US recruitment and complete onboarding process.</li>
                            </ul>
                        </div>

                    </div >
                )
            }

            return (
                <div id="resume-print" className="resume-container row">
                    <ResumeHeading />
                    <div className="resume-content-1 col-lg-6">
                        <Summary />
                        <Skills />
                        <Education />
                    </div>
                    <div className="resume-content-2 col-lg-6">
                        <WorkExperience />
                    </div>
                </div>
            )
        }
        const ResumeDownload = () => {
            return (
                <div className="resume-download-btn pt-2">
                    <button className="rounded-bottom px-2 pt-2 pb-1">Download Resume <i className="fas fa-download px-2"></i></button>
                </div>
            )
        }
        return (
            <section id="Resume" className="resume">
                <div className="px-5">
                    <SectionTitle />
                    <SectionBody />
                    <ResumeDownload />
                </div>
            </section>
        )
    }

    // ------------ Projects Component ------------
    const Projects = () => {
        const SectionTitle = () => {
            return (
                <div className="section-title">
                    <h2>Projects</h2>
                    <p>Following are some of the projects I made using HTML, CSS, Javascript, Bootstrap, Jquery &amp; React.</p>
                </div>
            )
        }
        const SectionBody = () => {
            return (
                <div className="project-lists row pt-3">
                    <div className="project-item col-lg-4 p-0 m-0">
                        <a href="https://marias-iratok.github.io/Marias-Project-1/" target="_blank" rel="noreferrer">
                            <img id="project1" style={{ display: "none" }} className="project-img img-fluid" src={project1} alt="project" />
                        </a>
                    </div>
                    <div className="project-item col-lg-4 p-0 m-0">
                        <a href="https://codegnan.com/job-accelerator-program/" target="_blank" rel="noreferrer">
                            <img id="project2" style={{ display: "none" }} className="project-img img-fluid" src={project2} alt="project" />
                        </a>
                    </div>
                    <div className="project-item col-lg-4 p-0 m-0">
                        <a href="https://www.google.com/" target="_blank" rel="noreferrer">
                            <img id="project3" style={{ display: "none" }} className="project-img img-fluid" src={project3} alt="project" />
                        </a>
                    </div>

                </div>
            )
        }

        return (
            <section id="Projects" className="projects py-5">
                <div className="px-5">
                    <SectionTitle />
                    <SectionBody />
                </div>
            </section>
        )
    }


    // ------------ Contact Component ------------
    const Contact = () => {


        const SectionTitle = () => {
            return (
                <div className="section-title">
                    <h2>Contact</h2>
                    <p>Positive driven and confident individual with an apt for learning new technology. Interested in the position of Web  Developer. Team player with clear and concise writing skills coming with excellent HTML, CSS and JavaScript skills. Hopeful for a Web Developer position to utilize programming skills.</p>
                </div>
            )
        }
        const SectionBody = () => {
            const ContactDetails = () => {
                return (
                    <div className="col-lg-6 align-items-stretch">
                        <div className="info">
                            <div className="address">
                                <i className="fas fa-map-marker-alt"></i>
                                <h4>Location:</h4>
                                <p>Tadepalli, Andhra Pradesh, India 522501</p>
                            </div>

                            <div className="email">
                                <i className="fas fa-envelope"></i>
                                <h4>Email:</h4>
                                <p>sairam_kotari@outlook.com</p>
                            </div>

                            <div className="phone">
                                <i className="fas fa-phone"></i>
                                <h4>Call:</h4>
                                <p>+91 8019371377</p>
                            </div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7651.238203144041!2d80.60442562383882!3d16.494813654476825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f03e135b9425%3A0xc9903895624851e5!2sSitanagaram%2C%20Tadepalli%2C%20Andhra%20Pradesh%20522501!5e0!3m2!1sen!2sin!4v1622047226469!5m2!1sen!2sin"
                                title="My Current Location"
                                style={{ width: "100%" }}
                                allowFullScreen
                                loading="lazy"></iframe>


                        </div>
                    </div >
                )
            }
            const MessageForm = () => {

                return (
                    <div className="col-lg-6 message-form">
                        <form action="https://formsubmit.co/df0dee8e5d86944bd51c1ea4051d31e4" method="POST" className="email-form">
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Your Name</label>
                                    <input type="text" name="name" className="form-control rounded-bottom" id="name" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Your Email</label>
                                    <input type="email" className="form-control rounded-bottom" name="email" id="email" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Subject</label>
                                <input type="text" className="form-control rounded-bottom" name="subject" id="subject" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Message</label>
                                <textarea className="form-control rounded-bottom" name="message" rows="12"></textarea>
                            </div>
                            <div className="text-center">
                                <button id="submit-msg" type="submit" className="btn">Send Message</button>
                            </div>
                        </form>

                    </div>
                )
            }

            return (
                <div className="row">
                    <ContactDetails />
                    <MessageForm />
                </div>
            )
        }


        return (
            <section id="Contact" className="contact">
                <div className="px-5 py-3">
                    <SectionTitle />
                    < SectionBody />

                </div>
            </section >
        )
    }
    const Footer = () => {
        return (
            <div id="Footer" className="py-2 my-0 bg-gradient">
                <div className="footer text-center">
                    <h1 className="text-light">Thank You...</h1>
                    <button className="back-to-top align-items-center justify-content-center rounded bg-gradient">
                        <i className="fas fa-arrow-up"></i>
                    </button>
                </div>
            </div>
        )
    }

    return (
        <main id="main">
            <Home />
            <About />
            <Resume />
            <Projects />
            <Contact />
            <Footer />
        </main>
    )
}






