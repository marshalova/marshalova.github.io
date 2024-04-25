import React, {JSX} from 'react'
import styles from "./ProjectDetails.module.scss";
import {Chips, IntLink} from "..";
import {RiArrowGoBackLine} from "react-icons/ri";

export interface Challenge {
    readonly challenge: string | JSX.Element | (string | JSX.Element)[]
    readonly solution: string | JSX.Element | (string | JSX.Element)[]
}

export interface ProjectDetailsProps {
    readonly title: string
    readonly image: string
    readonly results: string | JSX.Element | (string | JSX.Element)[]
    readonly product: string | JSX.Element | (string | JSX.Element)[]
    readonly tasks: string[]
    readonly challenges: Challenge[]
    readonly otherProjects: JSX.Element[]
}

export function ProjectDetails({title, image, results, product, tasks, challenges, otherProjects} :ProjectDetailsProps) {
    return <>
        <div className={styles.ProjectDetailsBack}>
            <IntLink to={"/"}><RiArrowGoBackLine /> Back to the main page</IntLink>
        </div>
        <h1 className={styles.ProjectDetailsTitle}>{title}</h1>
        <img className={styles.ProjectDetailsPic} src={image} alt={title} />
        <ProjectDetailsBlock header={"Results"}>{results}</ProjectDetailsBlock>
        <ProjectDetailsBlock header={"Product"}>{product}</ProjectDetailsBlock>
        <ProjectDetailsBlock header={"Tasks"}>
            <ul className={styles.ProjectDetailsList}>
                {tasks.map(task => (
                    <li>{task}</li>
                ))}
            </ul>
        </ProjectDetailsBlock>
        <ProjectDetailsBlock header={"Challenges"}>
            <div className={styles.ProjectDetailsChallenge}>
            {challenges.map((ch, idx) => (
                <>
                    <div className={styles.ProjectDetailsChallengeItem}>
                        <div>
                            <Chips key={idx} level={"error"}>Challenge №{idx + 1}</Chips>
                        </div>
                        <div>
                            {ch.challenge}
                        </div>
                    </div>
                    <div className={styles.ProjectDetailsChallengeItem}>
                        <div>
                            <Chips key={idx} level={"success"}>Solution №{idx + 1}</Chips>
                        </div>
                        <div>
                            {ch.solution}
                        </div>
                    </div>
                </>
            ))}
            </div>
        </ProjectDetailsBlock>
        <ProjectDetailsBlock header={"Other projects"}>
            <div className={styles.ProjectDetailsOther}>
                {otherProjects}
            </div>
        </ProjectDetailsBlock>
    </>
}

interface ProjectDetailsBlockProps {
    readonly header: string
    readonly children: JSX.Element | string | (JSX.Element | string)[]
}

function ProjectDetailsBlock({header, children}: ProjectDetailsBlockProps) {
    return <div className={styles.ProjectDetailsBlock}>
        <h2 className={styles.ProjectDetailsBlockHeader}>{header}</h2>
        <div className={styles.ProjectDetailsBlockBody}>{children}</div>
    </div>
}