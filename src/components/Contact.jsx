const Contact = () => {
  return (
    <div className="container">
      <form
        action="https://formsubmit.co/ashish.kongati@itagnok.ca"
        className="contact-form"
        method="POST"
      >
        <h2>Keep in touch !</h2>
        <span>Name</span>
        <input type="text" name="name" className="input" required></input>
        <span>Email</span>
        <input type="email" name="email" className="input" required></input>
        <span>Phone number</span>
        <input type="text" name="phone" className="input" required></input>
        <span>Message</span>
        <textarea
          cols="30"
          rows="10"
          type="text"
          name="message"
          className="message-input"
          required
        ></textarea>
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
