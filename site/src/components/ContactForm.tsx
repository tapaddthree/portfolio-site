import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(
    import.meta.env.VITE_FORMSPREE_FORM_ID
  );
  if (state.succeeded) {
    Swal.fire({
      icon: "success",
      title: "Message sent succesfully",
    });

    return (
      <p className="subtitle has-text-centered">I'll be in touch soon!</p>
    );
  } else if (state.errors) {
    Swal.fire({
      icon: "error",
      title: "Oops. Something went wrong.",
      text: "Please try again later.",
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="columns is-centered">
        <div className="column is-one-third">
          <div className="field">
            <label htmlFor="name" className="label">
              Name
            </label>
            <div className="control">
              <input
                id="name"
                type="name"
                name="name"
                minLength={3}
                maxLength={30}
                required={true}
                className="input"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
          </div>
        </div>
        <div className="column is-one-third">
          <div className="field">
            <label htmlFor="email" className="label">
              Email
            </label>
            <div className="control">
              <input
                id="email"
                type="email"
                name="email"
                minLength={6}
                required={true}
                className="input"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div className="field">
            <label htmlFor="message" className="label">
              Message
            </label>
            <div className="control is-expanded">
              <textarea
                id="message"
                name="message"
                rows={5}
                minLength={10}
                maxLength={600}
                required={true}
                className="textarea"
                style={{ maxHeight: "150px", minHeight: "150px" }}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
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
                disabled={state.submitting}
                className="button is-primary is-outlined is-rounded is-medium has-text-weight-medium is-fullwidth"
              >
                Submit
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
