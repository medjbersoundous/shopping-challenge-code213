import React from "react";
import "./Contact.css";
export default function Contact() {
  return (
    <section id="parent">
      <div className="ktiba">
        <h1>CONTACTEZ-NOUS </h1>
        <div className="kht"></div>
        <p>
          Nous sommes là pour répondre à toutes vos questions. Remplissez le
          formulaire ci- <br />                 dessous et nous vous répondrons dès que possible.
        </p>
      </div>
      <div className="bord">
        <form className="contact-form">
          <div className="labelInput">
            <label className="label">Nom complet:</label>
            <input type="text" className="input" name="name" required />
          </div>
          <div className="labelInput">
            <label className="label">Adresse email:</label>
            <input type="email" className="input" name="email" required />
          </div>

          <div className="labelInput">
            <label className="label">Numero de telephone:</label>
            <input type="tel" className="input" name="phone" required />
          </div>
          <div className="labelInput">
            <label className="label">Sujet:</label>
            <input type="text" className="input" name="sujet" required />
          </div>
          <div className="labelInput">
            <label className="label">votre message</label>
            <textarea className="text" cols={50} rows={10} name="message" required></textarea>
          </div>

          <button className="btn" type="submit">Envoyer le message</button>
        </form>
      </div>
    </section>
  );
}
