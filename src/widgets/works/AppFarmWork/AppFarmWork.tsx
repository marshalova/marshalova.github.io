import {Work} from "../../../components";
import image from "./images/appfarm.png";

export function AppFarmWork() {
    return (
        <Work
            title={"Paas platform for developers"}
            roles={["product designer & analyst"]}
            link={"/projects/appfarm"}
            image={image}
        />
    )
}
