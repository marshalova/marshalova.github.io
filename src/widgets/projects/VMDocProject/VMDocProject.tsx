import {ProjectDetails} from "../../../components";
import image from './images/VMDoc.png'
import {VMCloudWork, SSOWork} from "../../works";

export function VMDocProject() {
    return <ProjectDetails
        title={"Design for technical documentation"}
        image={image}
        results={<>
            <a href={"https://docs.victoriametrics.com/"} target={"_blank"} rel={"noreferrer"}>The documentation</a> has been redesigned in two modes: light and dark themes. Adaptation for web, tablet, and mobile versions has been completed.
        </>}
        product={<>Online technical documentation for IT solutions VictoriaMetrics. The documentation is used by approximately 40,000+ developers and engineers.</>}
        tasks={[
            "Explored the target audience and their needs. Analyzed competitors and industry trends. Defined user tasks and usage scenarios.",
            "Determine the key functions and structure of the interface. Planned the user flow.",
            "Documented requirements using User Stories, Customer Journey Maps (CJM), SMART, and Job Stories (JTBD).",
            "Participated in agile projects as a business and system analyst (full-stack development).",
            "Conducted tests with real users. Collected feedback and analyzed user behavior.",
            "Made changes based on testing results.",
            "Managed processes for business stakeholders, including demos, training, and change management.",
            "I created a UI kit and compiled guides."
        ]}
        challenges={[
            {
                challenge: "Implement code syntax highlighting that looks good in both light and dark modes of the documentation.",
                solution: "Using AI, I prepared a set of colors for code syntax highlighting based on the most popular VSCode themes. The code has been handed over for development in terms of programming code tokens."
            },
            {
                challenge: "Violation of heuristic principles and UX.",
                solution: "I checked for adherence to basic heuristics and UX standards. Designed guide lines to keep the user's attention on the material. Developed a prototype and got approval from the customer."
            }
        ]}
        otherProjects={[
            <VMCloudWork />,
            <SSOWork />
        ]}
    />
}