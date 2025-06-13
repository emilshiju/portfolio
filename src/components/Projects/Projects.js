import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import ecomerce from "../../Assets/Projects/ecomerce.png"
import chatRandom from "../../Assets/Projects/chatRandom.png"
import Props24 from "../../Assets/Projects/props24.png"
import blog from "../../Assets/Projects/blog.png"
import poll from "../../Assets/Projects/poll.png"
import olx from "../../Assets/Projects/olx.png"
import netflix from "../../Assets/Projects/netflix.jpg"
import todo from "../../Assets/Projects/todo.png"
import firstStart from "../../Assets/Projects/firstStart.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatRandom}
              isBlog={false}
              title="NearbyChat"
              description="NearbyChat is a real-time video and chat platform connecting users globally using WebRTC and advanced matching. It features location-based search with Mapbox, push notifications, premium plans via Razorpay, and a TURN server on AWS, ensuring smooth connectivity and user engagement."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Props24}
              isBlog={false}
              title="Props24"
              description="Props24 is a real estate web app connecting users with suitable agents or agencies. It features profile verification, property listings, admin moderation, and a matching algorithm. Users can review agents, while admins manage verifications, cities, reports, and specializations."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecomerce}
              isBlog={false}
              title="TechTrove"
              description="TechTrove is an E-commerce web app featuring secure Razorpay payments, OTP login via Twilio, email via Nodemailer, and powerful admin tools. It offers product, order, coupon, banner management, and is deployed on AWS EC2 with Route53 for scalability."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>


          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog Application"
              description="A full-featured Blog Application where users can create, edit, update, and delete their own blog posts. It includes profile management and integrates Firebase for storing user images. This application offers a smooth and intuitive experience for personal content creation and management."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>


          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={poll}
              isBlog={false}
              title="Poll Application"
              description="Poll Application is a web platform that allows users to create public polls, vote, and engage in real-time discussions through a live chatbox. Anyone can participate, share opinions, and create their own polls to gather public feedback. It fosters open interaction and debate around each poll's options and topics."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>


          
          <Col md={4} className="project-card">
            <ProjectCard
               imgPath={todo}
              isBlog={false}
              title="TODO App"
              description="A TODO App built with React and supporting libraries that allows users to add, edit, delete, and mark tasks as completed. It features internal state management and a background theme changer for a smooth, responsive, and customizable experience."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>


          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={olx}
              isBlog={false}
              title="OLX"
              description="A user-friendly platform inspired by OLX for buying and selling products. Built with Firebase, it features Firestore for real-time database operations and Firebase Authentication for secure, seamless login and user management, ensuring a smooth and interactive marketplace experience."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix"
              description="A real-time Netflix clone built using React and the TMDB API for dynamic movie data. It features a sleek UI, live movie trailer playback using React Player, and provides an immersive video streaming experience similar to the original Netflix platform."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={firstStart}
              isBlog={false}
              title="FirstStart"
              description="FirstStart is a website designed to highlight a startup's mission and vision. It showcases the startup’s goals and includes a contact form, making it easy for users to connect and engage with the team."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
