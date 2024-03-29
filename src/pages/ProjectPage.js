import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/projectpage.module.css";
import Project from "../components/Project";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const projects_arr = [
    {
        project_name: "Social Clubs Event Manager",
        gitlink: "https://github.com/samba-chinta/club_manager",
        description: "A project which helps to integrate all the social clubs in the college & helps in scheduling their events without any conflicts with other club events.",
        skills: ['React.js', 'Node.js', 'Express.js', 'REST', 'MongoDB'],
        status: "Completed"
    },
    {
        project_name: "Real-time Chat App",
        gitlink: "https://github.com/samba-chinta/realtime-chat-app",
        description:
            "Help the users to one-to-one communicate in real-time, and it allows the users to make both audio and video calls in real-time.",
        skills: ["React.js", "Node.js", "Express.js", "GraphQL", "Socket.io"],
        status: "In Progress",
    },
    {
        project_name: "Query based Application",
        gitlink:
            "https://github.com/samba-chinta/question_and_answer_website_client",
        description:
            "A project which helps the students to clear their doubts by posting the doubts in the form of question, and get answers from fellow students.",
        skills: ["React.js", "Node.js", "Express.js", "REST"],
        status: "Completed",
    },
];

const ProjectPage = (props) => {
    return (
        <div className={styles["project-page__wrapper"]}>
            <Link to="/" className={styles['home-link']} fontSize="small">
                <KeyboardBackspaceIcon /> Home
            </Link>
            <div className={styles["projects-wrapper"]} id="projects">
                <h2 className={styles["title"]}>My Projects</h2>
                <div className={styles["projects-list"]}>
                    {projects_arr.map((pro) => {
                        return (
                            <Project
                                project_details={pro}
                                className={styles['project-page__display']}
                                key={Math.random()}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;
