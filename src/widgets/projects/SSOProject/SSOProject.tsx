import {ProjectDetails} from "../../../components";
import image from './images/SSO.png'
import {VMCloudWork, VMDocsWork} from "../../works";

export function SSOProject() {
    return <ProjectDetails
        title={"Single sign-on service"}
        image={image}
        results={<>
            A unified authentication service for the bank's users has been implemented.
            The client authentication and registration path in the bank's systems was shortened.
        </>}
        product={<>A single multiplatform user authentication service for access to various systems of the bank and its partners based on Keycloack.</>}
        tasks={[
            "Explored the target audience and their needs. Analyzed competitors and industry trends. Defined user tasks and usage scenarios.",
            "Determine the key functions and structure of the interface. Planned the user flow.",
            "Documented requirements using User Stories, Customer Journey Maps (CJM), SMART, and Job Stories (JTBD).",
            "Participated in agile projects as a business and system analyst (full-stack development).",
            "Participated in developing security requirements. Designed the application considering Keycloak requirements.",
            "Conducted tests with real users. Collected feedback and analyzed user behavior.",
            "Made changes based on testing results.",
            "Managed processes for business stakeholders, including demos, training, and change management.",
        ]}
        challenges={[
            {
                challenge: "Every system had its own way of signing in, different from the rest. This meant users had many different usernames, passwords, and sign-in steps for the bank's services.",
                solution: "I explored the target audience and their needs. Analyzed competitors and industry trends. Defined user tasks and usage scenarios."
            },
            {
                challenge: "Every system had its own authentication page interface and processes, and did not want to switch to a unified service.",
                solution: "Regular meetings with system representatives and reasoned arguments for using a single service. I also agreed on the design with the system representatives."
            },
            {
                challenge: "There are specific technical aspects and restrictions when designing for web-view using Keycloak.",
                solution: "Regular consultations with developers optimized the design."
            }
        ]}
        otherProjects={[
            <VMCloudWork />,
            <VMDocsWork />
        ]}
    />
}