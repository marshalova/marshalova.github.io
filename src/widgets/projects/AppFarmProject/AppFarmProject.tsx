import {ProjectDetails} from "../../../components";
import image from './images/appfarm.png'
import {VMCloudWork, VMDocsWork} from "../../works";

export function AppFarmProject() {
    return <ProjectDetails
        title={"Paas platform for developers"}
        image={image}
        results={<>
            The portal is the primary tool for obtaining information from the cluster about the status of services and working with them.
            The SRE team emphasizes that without this tool, their work becomes impossible.
        </>}
        product={<>PAAS platform from scratch, covering the entire lifecycle of web and mobile applications.</>}
        tasks={[
            "Explored the target audience and their needs. Analyzed competitors and industry trends. Defined user tasks and usage scenarios.",
            "Determine the key functions and structure of the interface. Planned the user flow.",
            "Documented requirements using User Stories, Customer Journey Maps (CJM), SMART, and Job Stories (JTBD).",
            "Participated in agile projects as a business and system analyst (full-stack development).",
            "Participated in developing security requirements.",
            "Conducted tests with real users. Collected feedback and analyzed user behavior.",
            "Made changes based on testing results.",
            "Managed processes for business stakeholders, including demos, training, and change management.",
            "I created a UI kit and compiled guides for creating a Storybook.",
        ]}
        challenges={[
            {
                challenge: "Lack of practical experience in design creation.",
                solution: "I developed a learning plan and began studying design step by step, continuing this process to the present day."
            },
            {
                challenge: "High demands within tight deadlines.",
                solution: "I conducted an audience analysis, proposed hypotheses, prepared information for prioritization, and collaborated with developers to create a roadmap."
            },
            {
                challenge: "Technical constraints hinder user experience research. The platform is located within the company's secure network, making it impossible to integrate external services such as Google Analytics or PostHog.",
                solution: "I established a feedback collection process from users through the SRE task board. For each suggestion, modifications were made or explanations provided on why it is not feasible to implement them at the moment."
            }
        ]}
        otherProjects={[
            <VMCloudWork />,
            <VMDocsWork />
        ]}
    />
}