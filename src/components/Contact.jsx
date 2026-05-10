//  (с форма за контакт и Email.JS)
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setMessage("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section>
      <h2>Contact</h2>
      <p>
        Email: stoyanka.kamenova@email.com
        <br />
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </p>

      {/* Контактна форма */}
      <form
        ref={form}
        onSubmit={sendEmail}
        style={{ display: "flex", flexDirection: "column", maxWidth: "400px" }}
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          style={{ padding: "10px", margin: "5px 0" }}
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          style={{ padding: "10px", margin: "5px 0" }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          style={{ padding: "10px", margin: "5px 0" }}
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            margin: "5px 0",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Send Message
        </button>
      </form>
      {message && <p>{message}</p>}
    </section>
  );
}

export default Contact;
