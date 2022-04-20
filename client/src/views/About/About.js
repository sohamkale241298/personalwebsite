import React, { useEffect, useState } from "react"
import "./About.css";
import Card from 'react-bootstrap/Card';
import {Container, Row, Col} from 'react-bootstrap';
import { Progress } from 'semantic-ui-react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ResumeCard from "./../../components/ResumeCard/ResumeCard";
import image from "../../components/image/backImage2.jpg"
import { MDBIcon } from "mdbreact";
import myImage from "./pic.png";
import Footer from "./../../components/Footer/Footer.js";
import { Icon } from 'semantic-ui-react';

import { useMediaPredicate } from "react-media-hook";
const About = (props) => {
    let react = 60, CSS = 50, HTML = 65, C = 65, Java = 65, JS = 65, Node = 60, Git = 65, Firebase = 70, AS = 40;
    let CSharp = 60, Unity = 60, PHP = 40, Net = 50, MongoDB = 50, uipath = 60, alteryx = 45, javaEE = 45;
    const [labelCol, setLabelCol] = useState(2);
    const [progressBarCol, setProgressBarCol] = useState(10);
    const isMobile = useMediaPredicate("(max-width: 768px)");
    useEffect(() => {
        if(isMobile){
            setLabelCol(3);
            setProgressBarCol(9);
        }else{
            setLabelCol(2);
            setProgressBarCol(10); 
        }
      }, [isMobile]);

    return (
      <div className="mainContainer">
        <div className="imageContainer bg-dark">
          <div className="square">
            {/* <div className="container-fluid" > */}
            <img className="img-fluid" src={myImage}></img>
            {/* </div> */}

            {/* <div className="squareChild">Square</div> */}
          </div>
        </div>
        <div className="descriptionContainer text-lg-center border-bottom">
          {/* <div className="pStyle">
                    <h3>About Me!</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                   It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                   It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                </div> */}
          <Card style={{ width: "100%" }} bg={"dark"} text={"white"}>
            <br />
            <h4 className="headStyle">About Me</h4>
            <Card.Body className="pStyle">
              I am Soham Kale. I am currently working as a Solution Analyst at
              Deloitte. I graduated from University of Florida, Gainesville, FL,
              with a Bachelors' degree in Computer Science. I also graduated
              with an Associates in Arts degree in Computer Science and an
              honors certificate from Valencia college, Orlando, FL. As part of
              my degree, I have taken several programming classes that have made
              me proficient in various programming languages like Java, C, and
              C++. I have developed strong problem-solving skills through these
              classes and various projects. I am very enthusiastic to learn new
              skills on my own. I have worked in various teams throughout my
              college life and also led a few teams which has made me a really
              good team player. I am very passionate about computer science. In
              addition to doing projects for my classes, I have also done a few
              outside projects which have helped me improve and strengthen my
              skills. I am very meticuluous with my work and put in my full
              efforts whenever I am doing something.
            </Card.Body>
          </Card>
        </div>
        <div className="gpaContainer bg-dark eduFont border-bottom">
          <h4>Education</h4>

          <ul>
            <b>
              <u>University of Florida, Gainesville, FL</u>
            </b>
            <li>Bachelor's Degree (May 2021)</li>
            <li>Computer Science - Herbert Wertheim College of Engineering</li>
            <li>GPA: 3.97</li>
          </ul>
          <ul>
            <b>
              <u>Valencia Community College, Orlando, FL</u>
            </b>
            <li>Associates in Arts Degree (August 2018)</li>
            <li>Computer Science</li>
            <li>GPA: 4.0</li>
          </ul>
        </div>
        <div className="expContainer expContainerRightAligned bg-dark eduFont border-bottom">
          <h4 className="text-center">Experience</h4>
          <div className="">
            <ul>
              <b>
                <u>Solution Analyst, Deloitte Consulting LLP</u>
              </b>
              <span className="text-right fa-pull-right">
                September 2021 to Present
              </span>
              <li>
                Developed, maintained, and enhanced the front-end code using
                Angular 9 to ensure optimum performance, extensibility,
                usability, and accessibility of web application.
              </li>
              <li>
                Worked with back-end developers to integrate front-end and
                back-end code, ensuring design integrity, usability, and
                accessibility.
              </li>
              <li>
                Used Angular’s dependency injection (DI) to inject angular and
                other custom services as well as built various custom directives
                to provide reusable components.
              </li>
              <li>
                Helped the backend developer to create API’s to build various
                endpoints using Django Framework.
              </li>
              <li>
                Utilized AWS Textract and Comprehend to identify, extract data
                and train the application to automatically determine
                confidential information to redact.
              </li>
            </ul>
            <ul>
              <b>
                <u>
                  Computer Program Analyst II, Florida Fish and Wildlife
                  Conservation Commission
                </u>
              </b>
              <span className="text-right fa-pull-right">
                July 2021 to September 2021
              </span>
              <li>
                Worked on multiple projects and developed rich visual components
                through WPF using XAML.
              </li>
              <li>
                Created middleware component classes and integrated UI using the
                MVVM pattern.
              </li>
              <li>
                Utilized the pub/sub model to facilitate better communication
                between view models
              </li>
              <li>
                Used Binding, Styles, Data Template, Control Template,
                Converters, Nuget packages, and Layout Panels in XAML
              </li>
              <li>
                Worked with ADO.NET Entity Framework (Database first and code
                first approach) and Linq to connect to SQL server database for
                retrieving, manipulating, querying, storing data from the
                database.
              </li>
              <li>
                Redesigned SQL database tables using MSSMS, created views and
                wrote stored procedures.
              </li>
              <li>
                Developed an application in .Net for scanning and connecting to
                nearby Bluetooth devices using 32feet.NET
              </li>
            </ul>
            <ul>
              <b>
                <u>
                  Software Developer Intern, Byppo Technologies (January 2021 –
                  May 2021)
                </u>
              </b>
              <span className="text-right fa-pull-right">
                June 2020 to September 2020
              </span>
              <li>
                Single handedly developed Byppo’s new and responsive version of
                the existing web-app using Angular 8 which allowed customers to
                order food online. Used hammer.js to add gestures to the
                web-app.
              </li>
              <li>
                Used Amplify to perform backend duties like creating and
                modifying database schema to be used with GraphQL queries.
              </li>
              <li>
                Worked with and created AWS lambdas for a serverless web app.
              </li>
              <li>
                Built a promo-management system which involved taking technical
                decisions like creating new dynamoDB tables and using various
                relationships between entities like one-to-many vs many-many.
              </li>
              <li>
                Used the Twilio API to send messages and emails to customers
                about their orders and promos.
              </li>
              <li>
                Debugged and re-engineered the process of uploading a menu to
                the web app.
              </li>
            </ul>
            <ul>
              <b>
                <u>
                  Data Science Intern, Florida Department of Management Services
                </u>
              </b>
              <span className="text-right fa-pull-right">
                September 2020 to December 2020
              </span>
              <li>
                Used Alteryx to manipulate, cleanse and export that data to
                various data sources.
              </li>
              <li>
                Automated various workflows like navigating to a website,
                extracting data by simulating button clicks, transforming that
                data into a CSV, an excel file, or a powerBI dashboard and also
                sending out automatic emails using RPA tools like UiPath and
                Alteryx.
              </li>
              <li>
                Made use of OCR engines within UiPath to extract data from pdfs
                and manipulated it using regex to get the required fields
              </li>
              <li>
                Used SQL queries to query data from different databases and Used
                python libraries like selenium for web scraping.
              </li>
              <li>
                Built a barebone structure as the foundation of a JAVA EE 8
                web-app deployed to a wildfly server. Used JSF pages as the
                frontend and PostgreSQL database as the backend with the
                integration of other API’s like JPA, EJB along with a few
                others.
              </li>
            </ul>
          </div>
        </div>
        <div className="softSkillsContainer bg-dark eduFont border-bottom">
          <h4>Soft Skills</h4>
          <Icon name="university" size="large" />
          <ul>
            <li>Focused and attentive</li>
            <li>Hardworking and energetic</li>
            <li>Friendly</li>
            <li>Team player</li>
            <li>Positive and helpful</li>
            <li>Detail and goal-oriented</li>
          </ul>
        </div>
        <div className="certificationsContainer bg-dark eduFont border-bottom">
          <h4>Certifications</h4>
          <Icon name="university" size="large" />
          <ul>
            <li>AWS Certified Developer - Associate</li>
          </ul>
        </div>
        
        {/* vision, professional approach, hobbies */}
        <div className="skillsContainer bg-dark">
          <h4 className="headStyle">Relevant skills</h4>

          {/* <div class="row no-gutters">
            <label className="col-sm-1 bg-dark text-white labelHeight">React</label>
            <ProgressBar className="col-sm-11" variant="success" label={`${react}%`} now={40} />
            </div> */}

          <Container fluid className="pStyle">
            <Row>
              <Col xs={labelCol} className="labelHeight">
                React
              </Col>
              <Col xs={progressBarCol}>
                <ProgressBar
                  variant="success"
                  label={`${react}%`}
                  now={react}
                />
              </Col>
            </Row>
            <div className="smallDivision"></div>
            <Row>
              <Col xs={labelCol} className="labelHeight">
                CSS
              </Col>
              <Col xs={progressBarCol}>
                <ProgressBar variant="success" label={`${CSS}%`} now={CSS} />
              </Col>
            </Row>
            <div className="smallDivision"></div>
            <Row>
              <Col xs={labelCol} className="labelHeight">
                HTML
              </Col>
              <Col xs={progressBarCol}>
                <ProgressBar variant="success" label={`${HTML}%`} now={HTML} />
              </Col>
            </Row>
            <div className="smallDivision"></div>
            <Row>
              <Col xs={labelCol} className="labelHeight">
                JavaScript
              </Col>
              <Col xs={progressBarCol}>
                <ProgressBar variant="success" label={`${JS}%`} now={JS} />
              </Col>
            </Row>
            <div className="smallDivision"></div>
            <Row>
              <Col xs={labelCol} className="labelHeight">
                Node.js
              </Col>
              <Col xs={progressBarCol}>
                <ProgressBar variant="success" label={`${Node}%`} now={Node} />
              </Col>
            </Row>
            <div className="smallDivision"></div>
            <Row>
              <Col xs={labelCol} className="labelHeight">
                Java
              </Col>
              <Col xs={progressBarCol}>
                <ProgressBar variant="success" label={`${Java}%`} now={Java} />
              </Col>
            </Row>
            <div className="smallDivision"></div>
            <Row>
              <Col xs={labelCol} className="labelHeight">
                C++/C
              </Col>
              <Col xs={progressBarCol}>
                <ProgressBar variant="success" label={`${C}%`} now={C} />
              </Col>
            </Row>
            <div className="smallDivision"></div>
            <Row>
              <Col xs={labelCol} className="labelHeight">
                C#
              </Col>
              <Col xs={progressBarCol}>
                <ProgressBar
                  variant="success"
                  label={`${CSharp}%`}
                  now={CSharp}
                />
              </Col>
            </Row>
            <div className="smallDivision"></div>
            <Row>
              <Col xs={labelCol} className="labelHeight">
                Unity
              </Col>
              <Col xs={progressBarCol}>
                <ProgressBar
                  variant="success"
                  label={`${Unity}%`}
                  now={Unity}
                />
              </Col>
            </Row>
            <div className="smallDivision"></div>
            {/* <Row>
                <Col xs={labelCol} className="labelHeight">Arm Assembly</Col>
                <Col xs={progressBarCol}><ProgressBar variant="success" label={`${react}%`} now={40} /></Col>
            </Row>
            <div className="smallDivision"></div> */}
            {/* <Row>
                <Col xs={labelCol} className="labelHeight">Android Studio</Col>
                <Col xs={progressBarCol}><ProgressBar variant="success" label={`${AS}%`} now={AS} /></Col>
            </Row>
            <div className="smallDivision"></div>
            <Row>
                <Col xs={labelCol} className="labelHeight">PHP</Col>
                <Col xs={progressBarCol}><ProgressBar variant="success" label={`${PHP}%`} now={PHP} /></Col>
            </Row>
            <div className="smallDivision"></div> */}
            <Row>
              <Col xs={labelCol} className="labelHeight">
                .Net
              </Col>
              <Col xs={progressBarCol}>
                <ProgressBar variant="success" label={`${Net}%`} now={Net} />
              </Col>
            </Row>
            <div className="smallDivision"></div>
            <Row>
              <Col xs={labelCol} className="labelHeight">
                MongoDB
              </Col>
              <Col xs={progressBarCol}>
                <ProgressBar
                  variant="success"
                  label={`${MongoDB}%`}
                  now={MongoDB}
                />
              </Col>
            </Row>
            <div className="smallDivision"></div>
            {/* <Row>
                <Col xs={labelCol} className="labelHeight">Restful API's</Col>
                <Col xs={progressBarCol}><ProgressBar variant="success" label={`${react}%`} now={40} /></Col>
            </Row>
            <div className="smallDivision"></div> */}
            <Row>
              <Col xs={labelCol} className="labelHeight">
                Firebase
              </Col>
              <Col xs={progressBarCol}>
                <ProgressBar
                  variant="success"
                  label={`${Firebase}%`}
                  now={Firebase}
                />
              </Col>
            </Row>
            <div className="smallDivision"></div>
            <Row>
              <Col xs={labelCol} className="labelHeight">
                Git
              </Col>
              <Col xs={progressBarCol}>
                <ProgressBar variant="success" label={`${Git}%`} now={Git} />
              </Col>
            </Row>
            <div className="smallDivision"></div>
            <Row>
              <Col xs={labelCol} className="labelHeight">
                javaEE
              </Col>
              <Col xs={progressBarCol}>
                <ProgressBar
                  variant="success"
                  label={`${javaEE}%`}
                  now={javaEE}
                />
              </Col>
            </Row>
            <div className="smallDivision"></div>
            <Row>
              <Col xs={labelCol} className="labelHeight">
                Alteryx
              </Col>
              <Col xs={progressBarCol}>
                <ProgressBar
                  variant="success"
                  label={`${alteryx}%`}
                  now={alteryx}
                />
              </Col>
            </Row>
            <div className="smallDivision"></div>
            <Row>
              <Col xs={labelCol} className="labelHeight">
                UiPath
              </Col>
              <Col xs={progressBarCol}>
                <ProgressBar
                  variant="success"
                  label={`${uipath}%`}
                  now={uipath}
                />
              </Col>
            </Row>
            {/* <div className="smallDivision"></div>
            <Row>
                <Col xs={labelCol} className="labelHeight">Various IDE's</Col>
                <Col xs={progressBarCol}><ProgressBar variant="success" label={`${react}%`} now={40} /></Col>
            </Row> */}
            <Row>
              <div className="bigDivision"></div>
            </Row>
          </Container>
        </div>
        
        

        <Container fluid className="bg-white lastfoot text-center">
          <Row>
            <Col sm={12}>
              <Footer />
            </Col>
          </Row>
        </Container>
      </div>
    );
}
export default About;