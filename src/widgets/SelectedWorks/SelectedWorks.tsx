import { WorkGallery } from "../../components";
import {AppFarmWork, SSOWork, VMCloudWork, VMDocsWork} from "../works";

export function SelectedWorks() {
  return (
    <WorkGallery header={"Selected Works"}>
      <VMCloudWork />
      <VMDocsWork />
      <SSOWork />
      <AppFarmWork />
    </WorkGallery>
  );
}
