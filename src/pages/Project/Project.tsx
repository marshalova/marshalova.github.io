import {useParams} from "react-router";
import {AppFarmProject, SSOProject, VMCloudProject, VMDocProject} from "../../widgets";



export function Project() {
    const { projectId } = useParams()

    switch (projectId) {
        case "appfarm":
            return <AppFarmProject />
        case "vmdocs":
            return <VMDocProject />
        case "vmcloud":
            return <VMCloudProject />
        case "sso":
            return <SSOProject />
        default:
            return <>Page not found</>
    }
}