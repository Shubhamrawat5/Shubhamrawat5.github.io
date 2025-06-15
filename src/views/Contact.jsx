import { useState } from "react";
import emailjs from "emailjs-com";
import bg from "../assets/8401.jpg";

function Contact() {
  const [sendBtnMsg, setSendBtnMsg] = useState("Send");
  const [isSending, setIsSending] = useState(false);

  function submitForm(e) {
    e.preventDefault();
    setIsSending(true);
    setSendBtnMsg("Sending");

    const form = e.target;
    const form_name = form.form_name.value;
    const form_email = form.form_email.value;
    const form_message = form.form_message.value;

    const obj = {
      form_name,
      form_email,
      form_message,
    };

    emailjs
      .send(
        "service_0i7zsh5",
        "template_y8g6gr8",
        obj,
        "user_3WNdj8XTKrCjy5PNgNtJm"
      )
      .then((res) => {
        if (res.status === 200) {
          console.log("Message sent!");
          setSendBtnMsg("Sent!");
        } else {
          console.log("Error in sending message");
          setSendBtnMsg("Error!");
        }
        setIsSending(false);
        form.reset();
      })
      .catch((err) => {
        console.error("Send error:", err);
        setSendBtnMsg("Error!");
        setIsSending(false);
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
            Wants to make a website or custom bots (WhatsApp, Telegram, etc)?
          </p>
          <p>Feel free to Contact/Hire</p>
          <a
            style={{ textDecoration: "underline" }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/919353804615"
          >
            whatsapp
          </a>
        </div>
        <form data-aos="fade" onSubmit={submitForm}>
          <div>
            <label htmlFor="form_name">NAME</label>
            <input
              type="text"
              name="form_name"
              id="form_name"
              placeholder="abc"
              required
            />
          </div>
          <div>
            <label htmlFor="form_email">EMAIL</label>
            <input
              type="email"
              name="form_email"
              id="form_email"
              placeholder="abc@xyz.com"
              required
            />
          </div>
          <div>
            <label htmlFor="form_message">MESSAGE</label>
            <textarea
              id="form_message"
              name="form_message"
              placeholder="Hey there! . . . ."
              required
            ></textarea>
          </div>
          <button type="submit" id="send-btn" disabled={isSending}>
            {sendBtnMsg}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
