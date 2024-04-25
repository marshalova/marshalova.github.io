import {ProjectDetails} from "../../../components";
import image from './images/VMCloud.png'
import {VMDocsWork, AppFarmWork} from "../../works";

export function VMCloudProject() {
    return <ProjectDetails
        title={"Dashboard for Monitoring System"}
        image={image}
        results={<>
            I updated the design to align with corporate style requirements. I designed new features and user flows.
        </>}
        product={<>Managed VictoriaMetrics is a managed version of the VictoriaMetrics monitoring solution and time series database hosted on AWS. It offers optimized configuration and maintenance without the need for typical DevOps tasks. This solution allows for scaling instances, automated backups, and paying only for the resources actually used.</>}
        tasks={[
            "Explored the target audience and their needs. Analyzed competitors and industry trends. Defined user tasks and usage scenarios.",
            "Determine the key functions and structure of the interface. Planned the user flow.",
            "Documented requirements using User Stories, Customer Journey Maps (CJM), SMART, and Job Stories (JTBD).",
            "Participated in agile projects as a business and system analyst (full-stack development).",
            "Conducted tests with real users. Collected feedback and analyzed user behavior.",
            "Made changes based on testing results.",
            "Managed processes for business stakeholders, including demos, training, and change management.",
            "An Icon set has been created.",
            "I created a UI kit and compiled guides."
        ]}
        challenges={[
            {
                challenge: "A very complex and specific product for DevOps engineers and developers.",
                solution: "Regular meetings and consultations with the development team, studying documentation and competing products."
            },
            {
                challenge: "Violation of heuristic principles and UX.",
                solution: "I checked for adherence to basic heuristics and UX standards. Designed guide lines to keep the user's attention on the material. Developed a prototype and got approval from the customer."
            }
        ]}
        otherProjects={[
            <VMDocsWork />,
            <AppFarmWork />
        ]}
    />
}