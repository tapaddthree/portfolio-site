import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { ChangeEvent, MutableRefObject, useRef } from "react";

export default function Footer() {
  const formRef = useRef() as MutableRefObject<HTMLFormElement>;

  async function handleOnSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const res = await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
      );
      console.log(res.text);
      Swal.fire({
        icon: "success",
        title: "Message sent succesfully",
      });
    } catch (error) {
      console.log(error.text);
      Swal.fire({
        icon: "error",
        title: "Oooops. Something went wrong",
        text: error.text,
      });
    }
    e.target.reset();
  }

  return (
    <section className="section">
      <div className="container is-max-widescreen">
        <div className="has-text-centered is-size-3 mb-6">
          <span className="is-italic has-text-weight-semibold">
            Let's talk.
          </span>
        </div>
        <form ref={formRef} onSubmit={handleOnSubmit}>
          <div className="columns is-centered">
            <div className="column is-one-third">
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input type="text" name="from_name" className="input" />
                </div>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input type="text" name="from_email" className="input" />
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">Message</label>
                <div className="control is-expanded">
                  <textarea
                    className="textarea"
                    name="message"
                    rows={5}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column is-one-fifth">
              <div className="field">
                <div className="control">
                  <button
                    type="submit"
                    className="button is-primary is-outlined is-rounded is-medium has-text-weight-medium is-fullwidth"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
