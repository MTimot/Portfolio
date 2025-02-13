import "./contact.css";

function Contact() {
  return (
    <article className="contact-whole">
      <h2 className="contact-h2">Contactez-moi !</h2>
      <form className="contact-form">
        <label className="contact-label">
          Nom :
          <input type="text" className="contact-input" />
        </label>
        <label className="contact-label">
          Prénom :
          <input type="text" className="contact-input" />
        </label>
        <label className="contact-label">
          Mail :
          <input type="text" className="contact-input" />
        </label>
        <label className="contact-label">
          Message :
          <textarea className="contact-input contact-textarea" />
        </label>
      </form>
    </article>
  );
}

export default Contact;
