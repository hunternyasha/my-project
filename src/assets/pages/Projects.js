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
              <TabPanel header="Front-End">
                <p className="m-0">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Consectetur, adipisci velit, sed quia non numquam
                  eius modi.
                </p>
              </TabPanel>
              <TabPanel header="Personal Projects">
                <Personal />
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
