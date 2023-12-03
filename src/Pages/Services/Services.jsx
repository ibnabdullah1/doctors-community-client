import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ServiceCard from "./ServiceCard";
import { useState } from "react";

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="lg:flex justify-center  py-20 px-10">
      <div className="flex-1">
        <img src="https://i.ibb.co/nLm23pj/Rectangle-20078.png" alt="" />
      </div>
      <div className="flex-1">
        <h2 className="text-4xl font-bold mt-4 mb-3">Our Services</h2>
        <p className="mb-3">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        <div>
          <Tabs>
            <TabList className="flex border justify-center  mb-10 border-[#0e6962] items-center">
              <Tab
                onClick={() => handleTabClick(0)}
                className={`${
                  activeTab === 0 ? "bg-[#0e6962]  text-white" : ""
                } px-5 py-3 md:w-full md:text-xl  font-semibold`}
              >
                Cavity Protection
              </Tab>
              <Tab
                onClick={() => handleTabClick(1)}
                className={`${
                  activeTab === 1 ? "bg-[#0e6962]  text-white" : ""
                } px-5 py-3 md:w-full  md:text-xl  font-semibold`}
              >
                Cosmetic Dentist
              </Tab>
              <Tab
                onClick={() => handleTabClick(2)}
                className={`${
                  activeTab === 2 ? "bg-[#0e6962]  text-white" : ""
                } px-5 py-3 md:w-full  md:text-xl  font-semibold`}
              >
                Oral Surgery
              </Tab>
            </TabList>
            <TabPanel>
              <ServiceCard
                img={"https://i.ibb.co/FbSp39X/Rectangle-10.png"}
                title={"Electro  Gastrology Therapy"}
                details1={
                  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error "
                }
                details2={
                  "Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
                }
              />
            </TabPanel>
            <TabPanel>
              <ServiceCard
                img={
                  "https://vicksburgdentist.com/wp-content/uploads/2019/09/shutterstock_1242995230.jpg"
                }
                title={"Cosmetic Dentist Therapy"}
                details1={
                  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error "
                }
                details2={
                  "Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
                }
              />
            </TabPanel>
            <TabPanel>
              <ServiceCard
                img={
                  "https://www.leadingimplantcenters.com/assets/uploads/images/mkg_229352301.jpg"
                }
                title={"Oral Surgery Therapy"}
                details1={
                  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error "
                }
                details2={
                  "Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
                }
              />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Services;
