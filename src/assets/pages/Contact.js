import React, {  useRef } from "react";

import PageTransions from "../components/PageTransions";
import { Button } from "primereact/button";
import Footer from "./Footer";
import MiniNav from "./MiniNav";
import { Toast } from 'primereact/toast';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3coudh5', 'template_zgb39ni', form.current, 'L0g8KxYgFeO36vLyi')
      .then((result) => {
        console.log(result.text);
        toast.current.show({ severity: 'info', summary: 'Info', detail: 'Message Sent' });
      }, (error) => {
        console.log(error.text);
        toast.current.show({ severity: 'error', summary: 'Error', detail: 'Message Content', life: 3000 });
      });
  };
  const toast = useRef(null);
  const contactTitles = {
    conTitle: "Get in Touch",
    conTitle2: "Full Name",
    conTitle3: "Surname",
    conTitle4: "Email",
    conTitle5: "Compose message",
    btnTxt: "Send",
    conTitle6: `Let's Chat`,
    conTitle7: "Contact Details",
    conTitle8:
      "Feel free to contact to me anytime. Will get back to you as soon as possible",
  };

  return (
    <>
      <PageTransions>
        <div className="contact">
          <h2 className="text-center mb-5">{contactTitles.conTitle}</h2>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-xl-6 col-xxl-6">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="form-floating mb-3">
                    <input className="form-control" id="name" type="text" name="user_name" placeholder="Full NAme"/>
                    <label for="name">{contactTitles.conTitle2}</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input className="form-control" id="email" type="email" name="user_email" placeholder="name@example.com" />
                    <label for="email">{contactTitles.conTitle4}</label>
                  </div>
                  <div className="form-floating">
                    <textarea className=" textarea"  id="floatingTextarea" name="message" />
                    <label for="floatingTextarea">{contactTitles.conTitle5}</label>
                  </div>
                  {/* <label></label>
                  <textarea rows={3} cols={6} className="textrea"   /> */}
                  <Toast ref={toast} />
                  <Button className="submit" onClick={sendEmail}  >
                    <input type="submit" value="Send" />
                  </Button>
                </form>

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
