import { TabView, TabPanel } from "primereact/tabview";
import ResponsiveTab from "../components/ResponsiveTab";
import MiniNav from "./MiniNav";
import Personal from "../components/Personal";
import PageTransions from "../components/PageTransions";

const Projects = () => {
  return (
    <>
      <PageTransions>
        <div className="work">
          <div className="innerWork">
            <TabView>
              <TabPanel header="Fully Responsive">
                <ResponsiveTab />
              </TabPanel>
              <TabPanel header="JavaScript & Node.js">
                <p className="m-0 fs-1 text-light text-center">
                  projects to be added soon
                </p>
              </TabPanel>
              <TabPanel header="Personal Projects">
                <p className="m-0 fs-1 text-light text-center">
                  projects to be added soon
                </p>
              </TabPanel>
            </TabView>
          </div>
          <MiniNav />
        </div>
      </PageTransions>
    </>
  );
};

export default Projects;
