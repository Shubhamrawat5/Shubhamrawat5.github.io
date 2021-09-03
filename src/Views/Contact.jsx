import { useState } from "react";
import emailjs from "emailjs-com";

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
        <form data-aos="zoom-in" onSubmit={submitForm}>
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
        <iframe
          title="location"
          data-aos="zoom-in"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.540338058812!2d79.31647641445244!3d30.3924079090069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909d446cba5503d%3A0x3f651e48498fc8cd!2sInstitute%20of%20Technology%2C%20Gopeshwar!5e0!3m2!1sen!2sin!4v1620591692960!5m2!1sen!2sin"
          width="400"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;
