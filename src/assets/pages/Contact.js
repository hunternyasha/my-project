import React, { useState,  } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";


import PageTransions from "../components/PageTransions";
import { Button } from "primereact/button";
import Footer from "./Footer";
import MiniNav from "./MiniNav";

const Contact = () => {
  const contactTitles = {
    conTitle: "Get in Touch",
    conTitle2: "Name",
    conTitle3: "Surname",
    conTitle4: "Email",
    conTitle5: "Compose message",
    btnTxt: "Send",
    conTitle6: `Let's Chat`,
    conTitle7: "Contact Details",
    conTitle8:
      "Feel free to contact to me anytime. Will get back to you as soon as possible",
  };
  const [userName, setUserName] = useState("");
  const [sName, setSName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  return (
    <>
      <PageTransions>
        <div className="contact">
          <h2 className="text-center mb-5">{contactTitles.conTitle}</h2>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-xl-6 col-xxl-6">
                <div className="row ">
                  <div className="col-12 col-md-6">
                    <span className="p-float-label">
                      <InputText
                        id="username"
                        className="p-inputtext-lg"
                        value={userName}
                        onChange={(e) => setUserName(e.target.userName)}
                      />
                      <label htmlFor="username">
                        {contactTitles.conTitle2}
                      </label>
                    </span>
                  </div>
                  <div className="col-12 col-md-6">
                    <span className="p-float-label mb-4">
                      <InputText
                        id="username"
                        className="p-inputtext-lg"
                        value={sName}
                        onChange={(e) => setSName(e.target.sName)}
                      />
                      <label htmlFor="username">
                        {contactTitles.conTitle3}
                      </label>
                    </span>
                  </div>
                  <div className="col-12 col-md-12">
                    <span className="p-float-label mb-4">
                      <InputText
                        id="email"
                        className="p-inputtext-lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.email)}
                      />
                      <label htmlFor="email">{contactTitles.conTitle4}</label>
                    </span>
                  </div>
                  <div className="col-12 col-md-12">
                    <span className="p-float-label mb-4">
                      <InputTextarea
                        id="description"
                        value={msg}
                        className="textrea"
                        onChange={(e) => setMsg(e.target.value)}
                        rows={10}
                        cols={30}
                      />
                      <label htmlFor="description" className="msgLabel">
                        {contactTitles.conTitle5}
                      </label>
                    </span>
                  </div>
                </div>
                <Button label={contactTitles.btnTxt} />
              </div>
              <div className="col-12 col-md-6 col-xl-6 col-xxl-6">
                <h3>{contactTitles.conTitle6}</h3>
                <h2>{contactTitles.conTitle7}</h2>
                <p>{contactTitles.conTitle8}</p>
              </div>
            </div>
          </div>
          <MiniNav />
        </div>

        <Footer />
      </PageTransions>
    </>
  );
};

export default Contact;
