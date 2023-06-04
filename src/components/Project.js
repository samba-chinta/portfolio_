import React from "react";
import FolderIcon from "@mui/icons-material/Folder";
import GitHubIcon from "@mui/icons-material/GitHub";
import styles from "../styles/page.module.css";

const Project = (props) => {
    console.log(props)
    const classes = `${styles["pro-wrapper"]} ${props.className}`
    return (
        <div className={classes}>
            <div className={styles["project-header"]}>
                <FolderIcon />
                <div>
                    <span className={"status"}>{ props.project_details.status }</span>
                <a
                    href={props.project_details.gitlink}
                    target="_blank"
                    rel="noreferrer"
                >
                    <GitHubIcon fontSize="small"/>
                </a>
                </div>
            </div>
            <div className={styles["project-body"]}>
                <h3>{props.project_details.project_name}</h3>
                <p>{props.project_details.description}</p>
            </div>
            <div className={styles["project-footer"]}>
                <ul>
                {props.project_details.skills.map((skill) => {
                    return <li key={Math.random()}>{skill}</li>;
                })}
                </ul>
            </div>
        </div>
    );
};

export default Project;
