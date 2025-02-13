import "./contact.css";

function Contact() {
  return (
    <article>
      <h2>Contactez-moi !</h2>
      <form className="contact-form">
        <label>
          Nom
          <input type="text" />
        </label>
        <label>
          Prénom
          <input type="text" />
        </label>
        <label>
          Mail
          <input type="text" />
        </label>
        <label>
          Message
          <input type="text" />
        </label>
      </form>
    </article>
  );
}

export default Contact;
