import React, { useRef, useState } from "react";
import { Heading, Link, Media, Text, Icon, Loader } from "components";
import { PageBase } from "structure";
import styles from "./Contact.module.scss";
import { checkIfValidEmail } from "utils/functions";
import emailjs from "@emailjs/browser";
import { LINK_TARGET_EXTERNAL } from "utils/constants";
import axios from "axios";
import cx from "classnames";
import fileDownload from "js-file-download";

const ContactPage = () => {
  const form = useRef();

  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState(true);

  const [nameError, setNameError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sent, setSent] = useState(false);
  const [sendingError, setSendingError] = useState(false);

  const [loading, setLoading] = useState(false);

  const checkForErrors = () => {
    setErrors(true);

    if (name === "") {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (subject === "") {
      setSubjectError(true);
    } else {
      setSubjectError(false);
    }

    if (message === "") {
      setMessageError(true);
    } else {
      setMessageError(false);
    }

    if (email === "") {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (
      submitted &&
      !nameError &&
      !subjectError &&
      !messageError &&
      !emailError
    ) {
      setErrors(false);
      setLoading(true);

      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            setSent(true);
            setSendingError(false);
            setLoading(false);
          },
          (error) => {
            setSendingError(true);
            setLoading(false);
          }
        );
    } else {
      setErrors(true);
    }
  };

  const handleDownload = (url, filename) => {
    axios
      .get(url, {
        responseType: "blob",
      })
      .then((res) => {
        fileDownload(res.data, filename);
      });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitted(true);
    checkForErrors();
  };

  const ErrorMessage = () => {
    return (
      <Heading content="There was an error sending your email. Please contact me through LinkedIn or at chacon.seb@gmail.com" />
    );
  };

  const SuccessMessage = () => {
    return (
      <div className={styles.success}>
        <Heading
          content="Email sent! I will reply as soon as possible. You can also contact me via LinkedIn"
          headingStyle="h3"
        />
      </div>
    );
  };

  const LoadingMessage = () => {
    return (
      <div className={styles.loader}>
        <Loader />
        <Heading content="Loading..." headingStyle="h4" />
      </div>
    );
  };

  return (
    <PageBase headingText="Contact" title="Contact">
      <div className={styles.container}>
        <Heading
          content="Any doubts, commentary, feedback, or job offer. Feel free to contact me through this form. You are also welcome to download my resume or visit my Github page."
          headingStyle="h5"
          className={styles.heading}
        />
        <div className={styles["form-container"]}>
          {loading && <LoadingMessage />}

          {!sent && (
            <form ref={form} onSubmit={sendEmail} className={styles.form}>
              <div className={styles.field}>
                <div className={styles["input-container"]}>
                  <label className={styles.label}>
                    <Text content={"Name:"} size="lg" />
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className={cx(styles.input, {
                      [styles["input--error"]]: nameError,
                    })}
                  />
                </div>
                {nameError && (
                  <Text
                    className={styles.error}
                    size="sm"
                    content={"Please do not leave the name field empty."}
                    color="red"
                  />
                )}
              </div>

              <div className={styles.field}>
                <div className={styles["input-container"]}>
                  <label className={styles.label}>
                    <Text content={"Email:"} size="lg" />
                  </label>
                  <input
                    id="email"
                    type="text"
                    name="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className={cx(styles.input, {
                      [styles["input--error"]]: emailError,
                    })}
                  />
                </div>
                {emailError && (
                  <Text
                    className={styles.error}
                    size="sm"
                    content={"Please enter a valid email address."}
                    color="red"
                  />
                )}
              </div>

              <div className={styles.field}>
                <div className={styles["input-container"]}>
                  <label className={styles.label}>
                    <Text content={"Subject:"} size="lg" />
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                    className={cx(styles.input, {
                      [styles["input--error"]]: subjectError,
                    })}
                  />
                </div>
                {subjectError && (
                  <Text
                    className={styles.error}
                    size="sm"
                    content={"Please do not leave the subject field empty."}
                    color="red"
                  />
                )}
              </div>

              <div className={styles.field}>
                <div className={styles["input-container"]}>
                  <label className={styles.label}>
                    <Text content={"Message:"} size="lg" />
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    className={cx(styles.input, styles.textarea, {
                      [styles["input--error"]]: messageError,
                    })}
                  />
                </div>
                {messageError && (
                  <Text
                    className={styles.error}
                    size="sm"
                    content={"Please do not leave the message field empty."}
                    color="red"
                  />
                )}
              </div>

              <button
                className={cx("g-recaptcha", styles.submit)}
                data-sitekey="reCAPTCHA_site_key"
                data-callback="onSubmit"
                data-action="submit"
              >
                Submit
              </button>
            </form>
          )}
          {sent && <SuccessMessage />}

          {sendingError && <ErrorMessage />}
        </div>

        <div className={styles["link-container"]}>
          <div className={styles.link}>
            <Icon name="github" className={styles.icon} size="md" />
            <Link
              href="https://github.com/sebaschr"
              target={LINK_TARGET_EXTERNAL}
              linkText="Github.com/sebaschr"
              className={styles.social}
            />
          </div>
          <div className={styles.link}>
            <Icon name="linkedin" className={styles.icon} size="md" />
            <Link
              href="https://www.linkedin.com/in/sebaschr/"
              target={LINK_TARGET_EXTERNAL}
              linkText="LinkedIn.com/sebaschr"
              className={styles.social}
            />
          </div>
          <div
            className={styles.link}
            onClick={() => {
              handleDownload("/documents/resume.pdf", "resume.pdf");
            }}
          >
            <Icon name="download" className={styles.icon} size="md" />
            <Text
              content="Download Resume"
              className={styles.social}
              size="lg"
            />
          </div>
        </div>
      </div>
    </PageBase>
  );
};

export default ContactPage;
