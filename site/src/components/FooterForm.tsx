import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { ChangeEvent, MutableRefObject, useRef } from "react";
import { motion } from "framer-motion";

export default function FooterForm() {
  const formRef = useRef() as MutableRefObject<HTMLFormElement>;

  async function handleOnSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      (formRef.current[0] as HTMLFormElement).value.length === 0 &&
      (formRef.current[1] as HTMLFormElement).value.length === 0 &&
      (formRef.current[2] as HTMLFormElement).value.length === 0
    ) {
      Swal.fire({
        icon: "error",
        title: "Ooops. Something went wrong",
        text: "Form cannot be empty.",
      });
      return;
    }

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
      );
      Swal.fire({
        icon: "success",
        title: "Message sent succesfully",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Ooops. Something went wrong",
        text: error.text,
      });
    }
    e.target.reset();
  }

  return (
    <section className="section has-text-black">
      <div className="container is-max-widescreen">
        <div className="has-text-centered is-size-3 mb-6 is-italic has-text-weight-semibold">
          Let's talk.
        </div>
        <form ref={formRef} onSubmit={handleOnSubmit}>
          <div className="columns is-centered">
            <div className="column is-one-third">
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    type="text"
                    name="from_name"
                    className="input"
                    minLength={3}
                    maxLength={30}
                  />
                </div>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    type="text"
                    name="from_email"
                    className="input"
                    minLength={6}
                  />
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
                    minLength={10}
                    maxLength={600}
                    style={{ maxHeight: "150px", minHeight: "150px" }}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column is-one-fifth">
              <div className="field">
                <div className="control">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    type="submit"
                    className="button is-primary is-outlined is-rounded is-medium has-text-weight-medium is-fullwidth"
                  >
                    Submit
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
