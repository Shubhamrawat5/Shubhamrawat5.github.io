function Contact() {
  return (
    <section id="contact">
      <div>
        <h2 className="section-heading">&#60; Contact me / &#62;</h2>
      </div>
      <div className="contact-container">
        <form data-aos="zoom-in">
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
            Send
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
