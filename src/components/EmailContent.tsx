import { Email } from "../data/emails";

import React from "react";

type EmailContentProps = {
  email: Email;
  goBack: () => void;
};
export default function EmailContent({ email, goBack }: EmailContentProps) {
  return (
    <>
      <article className="email-content">
        <div className="title">
          <h1>{email.title}</h1>
        </div>
        <header className="email-content--header">
          <div className="avatar"></div>
          <div className="email-info">
            <div className="sender-info">
              <h2>Sender: {email.sender}</h2>
            </div>
          </div>
        </header>
        <section className="email-body">
          <div className="content">{email.content}</div>
        </section>
        <button onClick={goBack}>Go back</button>
      </article>
    </>
  );
}
