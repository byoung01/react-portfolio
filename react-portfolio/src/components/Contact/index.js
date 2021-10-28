import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Email or username is invalid");
      return;
    }
  };
  return (
    <div>
      <form>
        <div class="form-group row" style={{ padding: "1em 0 1em 3em" }}>
          <label
            for="colFormLabelSm"
            class="col-form-label col-form-label-sm"
            style={{ flex: "0 0 auto", width: "9%" }}
          >
            Name
          </label>
          <div class="col-sm-10">
            <input
              value={email}
              type="email"
              class="form-control form-control-sm"
              id="colFormLabelSm"
              placeholder="name"
            />
          </div>
        </div>
        <div class="form-group row" style={{ padding: "1em 0 1em 3em" }}>
          <label
            for="colFormLabelSm"
            class="col-form-label col-form-label-sm"
            style={{ flex: "0 0 auto", width: "9%" }}
          >
            Email
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control form-control-sm"
              id="colFormLabelSm"
              placeholder="email"
            />
          </div>
        </div>
        <div class="form-group row" style={{ padding: "1em 0 1em 3em" }}>
          <label
            for="colFormLabelSm"
            class="col-form-label col-form-label-sm"
            style={{ flex: "0 0 auto", width: "9%" }}
          >
            Message
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control form-control-sm"
              id="colFormLabelSm"
              placeholder="message"
            />
          </div>
        </div>
        <button
          type="button"
          class="btn btn-secondary"
          onClick={handleFormSubmit}
          style={{ margin: "1em 0 0 3em" }}
        >
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text" style={{ margin: "1em 0 0 3em" }}>
            {errorMessage}
          </p>
        </div>
      )}
    </div>
  );
}

export default Contact;
