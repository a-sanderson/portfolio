import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGit} from "@fortawesome/free-brands-svg-icons"
import {faNodeJs} from "@fortawesome/free-brands-svg-icons"
import {faSass} from "@fortawesome/free-brands-svg-icons"
import {faJs} from "@fortawesome/free-brands-svg-icons"
import {faReact} from "@fortawesome/free-brands-svg-icons"
import {faTrello} from "@fortawesome/free-brands-svg-icons"
import {faMicrosoft, faNpm,faGithub,faLinkedin,faFacebook} from "@fortawesome/free-brands-svg-icons"
import Card from "./Card.js"
import ReactContactForm from 'react-mail-form';
 



const Home = props => {
   
        return(
            <main style={{height: "1000px", position: "relative", zIndex: "0"}}>
                <section className="homeTop">
                    <h3>AARON SANDERSON</h3>
                    <h1>UX focused web developer with an eye for design based out of Salt Lake City, Utah. </h1>
                </section>
                <section className="homeBottom">
                    <div className ="aboutMe">
                         <h3>About Me</h3><div className="imageContainer"></div>  
                    </div>
                    <div id="about" className="aboutContainerL">
                        <p style={{textAlign:"center",marginLeft: 15, marginRight: 15, marginBottom: 40, marginTop: 40, lineHeight: 1.5}}>Originally from Knoxville, Tennessee, I am a developer currently residing in Utah. I enjoy creating aesthetically pleasing web and mobile apps that are geared towards a pleasant user experience. I have been learning how to code on my own for the past year, but recently graduated from <span>V-School</span>, a 12 week immersive development program based out of Salt Lake City. I also studied at East Tennessee State University, and took a professional certification course for Project Management through the University of Utah. When I am not coding I am snowboarding or playing golf.<br></br><br></br>I have been working with the following technologies: </p>
                    </div>
                    <div  className="iconContainerL">
                        <div style={{display: "flex", flexDirection:"row", justifyContent: "space-evenly", marginBottom: "20px"}}>
                            <div style={{marginBottom: 15, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: ""}} >
                                <FontAwesomeIcon icon={faGit} size="2x"  />
                                <span>Git & GitHub</span>
                                
                            </div>
                            <div style={{marginBottom: 15, display: "flex",flexDirection: "column", alignItems: "center", justifyContent: "space-evenly"}}>
                                <FontAwesomeIcon icon={faReact}  size="2x"  />
                                <span>React & React Native</span>
                            </div>
                            <div style={{marginBottom: 15, display: "flex",flexDirection: "column", alignItems: "center", justifyContent: "space-evenly"}}>
                                <FontAwesomeIcon icon={faSass} size="2x"  />
                                <span>SCSS</span>
                            </div>
                            <div style={{marginBottom: 15, display: "flex",flexDirection: "column", alignItems: "center", justifyContent: "space-evenly"}}>
                                <FontAwesomeIcon icon={faJs}  size="2x" />
                                <span>Javascript ES6</span>
                            </div>
                        </div>
                        <div style={{display: "flex", flexDirection: "row",  justifyContent: "space-evenly"}}>
                            <div style={{marginBottom: 15, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: ""}} >
                                <FontAwesomeIcon icon={faNodeJs} size="2x"  />
                                <span>NodeJS</span>   
                            </div>
                            <div style={{marginBottom: 15, display: "flex",flexDirection: "column", alignItems: "center", justifyContent: "space-evenly"}}>
                                <FontAwesomeIcon icon={faNpm}  size="2x"  />
                                <span>Node Package Manager</span>
                            </div>
                            <div style={{marginBottom: 15, display: "flex",flexDirection: "column", alignItems: "center", justifyContent: "space-evenly"}}>
                                <FontAwesomeIcon icon={faTrello} size="2x"  />
                                <span>Trello</span>
                            </div>
                            <div style={{marginBottom: 15, display: "flex",flexDirection: "column", alignItems: "center", justifyContent: "space-evenly"}}>
                                <FontAwesomeIcon icon={faMicrosoft}  size="2x" />
                                <span>MS Office & Project</span>
                            </div>
                        </div>
                    </div>
                    
                    <div id="about" className="aboutContainer">
                        <div className="container1">
                            <h5>Professional:</h5> 
                            <p>Interested in front-end development skilled in React JS. Project Management oriented, with a professional background in management and customer service</p>
                        </div> 
                        <div className="container1" style={{borderRight: "none"}}>
                            <h5>Personal:</h5> 
                            <p>Avid snowboarder in the winter, enjoys golf in the summer, likes to code no matter the season</p>
                        </div> 
                           
                              {/* <a href="#tech">view technical skills</a> */}
                    </div>

                              <a style={{marginTop: 40}} href="#tech">view technical skills</a>
                           
                </section>
                <div id="tech" className="iconContainer">
                            <Card icon= {<FontAwesomeIcon icon={faGit} size= "4x" />} description= "I use Git and GitHub frequently for save points and colaboration" />

                            <Card icon= {<FontAwesomeIcon icon={faReact} size= "4x" />} description= "React is my preferreed base library/framework for development" />

                            <Card icon= {<FontAwesomeIcon icon={faSass} size= "4x" />} description= "Along with CSS3, I use SASS, or SCSS as my preferred pre-processor for styling to provide efficiency" />

                            <Card icon= {<FontAwesomeIcon icon={faJs} size= "4x" />} description= "JavaScript version ES6 is the language I am skilled in " />

                            <Card icon= {<FontAwesomeIcon icon={faNodeJs} size= "4x" />} description= "I am in the process of learning Python, but for now I am very familiar with Node JS, and us it on the backend for module, data handling, as well as testing in the console." />
                            <Card icon= {<FontAwesomeIcon icon={faTrello} size= "4x" />} description= "I have personally used Trello to track milestones and project progress " /> 
                            <Card icon= {<FontAwesomeIcon icon= {faMicrosoft} size= "4x" />} description= "Proficient in MS Office. Trained in MS Project through Milestone Management and Univeristiy of Utah ." />
                </div>
                <section id="portfolio" className="portfolioContainer">
                    
                        <h3>Portfolio</h3>
                        <p style={{textAlign:"center",marginLeft: 15, marginRight: 15, marginBottom: 40, lineHeight: 1.5}}>Below are some of the recent projects I have been working on. I am currently working on these to get them production ready, but the goal was to get these projects to "MVP" status. They are meant to showcase my front end capabilities and basic knowledge of building my own server and API with help of third party libraries (express and mongoose).</p>
                        <div className="projects">
                            <h4>Pick a Pup App</h4>
                            <p>App that allows users to research dog breeds and search for dogs up for adoption relative to their zip code and a mile radius. Data is provided from TheDogAPI and Petfinder.com API</p>
                            <div style={{height: 250, width: 120}}><img style={{height: "100%", width: "100%"}} alt="pup" src={require("./pickapup.png")}></img></div>
                            <a href="https://github.com/a-sanderson/assignments/tree/master/projects/pick-a-pup">check the code</a>
                            <a href="http://pickapup.surge.sh">see it live</a>
                        </div>
                        <div className="projects">
                            <h4>Fashion Hub </h4>
                            <p>e-commerce app built to demonstrate knowledge of creating multiple routes with queries on the backend. Also, many routes on the front-end, and use of re-usable, dynamic components. </p>
                            <p>Current ToDo: Working on a re-direct after log in. Also at the moment you must sign-up and be logged in to use all the sites features.</p>
                            <div style={{height: 250, width: 120}}><img style={{height: "100%", width: "100%"}} alt="pup" src={require("./fashion.png")}></img></div>
                            <a href="https://github.com/a-sanderson/group-project">check the code</a>
                            <a href="https://freshfashionhub.herokuapp.com">see it live</a>
                        </div>
                    
                </section>
                <section className="footer">
                    <h2>get in touch</h2>
                    <ReactContactForm buttonText="send it" className="contactForm" to="ronsanderson09@gmail.com" />
                    <div className="mediaContainer">
                        <a href= "https://github.com/a-sanderson"><FontAwesomeIcon icon={faGithub} color="white" size= "4x" /></a>
                        <a href="https://www.linkedin.com/in/aaron-sanderson/"><FontAwesomeIcon icon={faLinkedin} color="white" size= "4x" /></a>
                        <a href="https://www.facebook.com/aaron.sanderson.98"><FontAwesomeIcon icon={faFacebook} color="white" size= "4x" /></a>
                    </div>

                </section>
            </main>
        )
    }
export default Home

