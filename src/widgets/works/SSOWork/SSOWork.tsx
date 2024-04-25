import {Work} from "../../../components";
import image from "./images/sso.png";

export function SSOWork() {
    return (
        <Work
            title={"Single sign-on service"}
            roles={["product designer & analyst"]}
            link={"/projects/sso"}
            image={image}
        />
    )
}