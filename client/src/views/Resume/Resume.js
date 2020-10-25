import React, { useEffect, useState } from "react"
import "./Resume.css";
import ResumeCard from "./../../components/ResumeCard/ResumeCard"
import { useMediaPredicate } from "react-media-hook";
import {Button, Container, Row, Col, ResponsiveEmbed} from 'react-bootstrap';
import Footer from "./../../components/Footer/Footer.js";
import ResumePic from "./Resume.png";
import fire, {storage} from "../../config/Fire";
const Resume = () => {
    const [cardWidth, setCardWidth] = useState('50vw');
    const isMobile = useMediaPredicate("(max-width: 680px)");
    var storageRef = storage.ref();
    const [url, setUrl] = useState(null);
    var resumeRef = storageRef.child('Resume/space.jpg');
    useEffect (() => {
        storage.ref(`Soham/`).child(`Resume (October 2020).png`).getDownloadURL().then(url => {
            setUrl(url);
        })
    }, [])

    const onCLickDownload = () => {
       window.open("https://drive.google.com/file/d/1_mR5mpjcfSi9HvC-4QSJqgFDmLuE3UtW/view?usp=sharing");
    }
    if(isMobile){
       return(
        <div>
            <Container fluid className="bg-dark centeredDivParent">
                <div className="squareShape">
                    <img src={url} className="img-fluid mt-3 mb-3" alt="Responsive image"/>  
                </div>
            </Container>
            <div className="bg-dark buttonAlign">
                <Button onClick={onCLickDownload}>Download</Button>
            </div>
            <Container fluid className="bg-white text-center">
                <Footer/>
            </Container>
        </div>
       )     
    }else {
        return(
            // <div className="backImage">
            //     <div className="center">
            //         {isMobile ? <ResumeCard cardWidth={'100vw'}/> : <ResumeCard cardWidth={'50vw'}/>}
            //         <embed src="https://firebasestorage.googleapis.com/v0/b/portfolio-a2412.appspot.com/o/Resume.pdf?alt=media&token=2e9a19d2-a3be-4f5c-8074-15426a7853ff" type="application/pdf" width="50%" view="fit"/>
            //         <img class="img-fluid" src={ResumePic}></img>
            //     </div>
            //     <div className="buttonAlign">
            //         <Button>Download</Button>
            //     </div>
            // </div>
            // <div className=" bg-dark customDiv">
           
            <div>
                <div className="bg-dark buttonAlign">
                     <Button onClick={onCLickDownload}>Download</Button>
                </div>
                <Container fluid className="bg-dark centeredDivParent">
                    <div className="squareShape">
                        <img src={url} className="img-fluid mt-3 mb-3" alt="Responsive image"/>  
                    </div>
                </Container>
                <Container fluid className="bg-white text-center">
                    <Footer/>
                </Container>
            </div>
        );
    }
    
}

export default Resume;