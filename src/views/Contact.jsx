import { useState } from "react";
import emailjs from "emailjs-com";
import bg from "../asserts/8401.jpg";
function Contact() {
  const [sendBtnMsg, setSendBtnMsg] = useState("Send");

  function submitForm(e) {
    setSendBtnMsg("Sending");
    e.preventDefault();
    const form_name = e.target[0].value;
    const form_email = e.target[1].value;
    const form_message = e.target[2].value;

    let obj = {
      form_name,
      form_email,
      form_message,
    };

    // console.log(obj);
    emailjs
      .send(
        "service_0i7zsh5",
        "template_y8g6gr8",
        obj,
        "user_3WNdj8XTKrCjy5PNgNtJm"
      )
      .then((res) => {
        if (res.status === 200) {
          console.log("message sent!");
          setSendBtnMsg("Sent !");
        } else {
          console.log("error in sending message");
          setSendBtnMsg("Error !");
        }
      });
  }

  return (
    <section id="contact">
      <div>
        <h2 className="section-heading">&#60; Contact me / &#62;</h2>
      </div>
      <div className="contact-container">
        <div className="iframe">
          <img src={bg} alt="" className="contact-bg" />
          <p>
            Wants to make a website or custom bots (whatsapp, telegram, etc)?
          </p>
          <p>Feel free to Contact/Hire</p>
          <a
            style={{ textDecoration: "underline" }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/919557666582"
          >
            whatsapp
          </a>
        </div>
        <form data-aos="fade" onSubmit={submitForm}>
          <div>
            <label htmlFor="name">NAME</label>
            <input
              type="text"
              name=""
              id="form-name"
              placeholder="abc"
              required
            />
          </div>
          <div>
            <label htmlFor="email">EMAIL</label>
            <input
              type="email"
              name=""
              id="form-email"
              placeholder="abc@xyz.com"
              required
            />
          </div>
          <div>
            <label htmlFor="message">MESSAGE</label>
            <textarea
              id="form-message"
              placeholder="Hey there! . . . ."
              required
            ></textarea>
          </div>
          <button type="submit" id="send-btn">
            {sendBtnMsg}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
