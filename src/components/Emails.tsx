import React, { useState } from "react";
const getReadEmails = (emails) => emails.filter((email) => !email.read);
const getStarredEmails = (emails) => emails.filter((email) => email.starred);

import initialEmails, { Email } from "../data/emails";
import EmailElement from "./Email";

type EmailsProps = {
  emails: Email[];
  onToggleStar: (targetEmail: Email) => void;
  onToggleRead: (targetEmail: Email) => void;
  onEmailClicked: (targetEmail: Email) => void;
};

export default function Emails({
  emails,
  onToggleRead,
  onToggleStar,
  onEmailClicked,
}: EmailsProps) {
  return (
    <>
      <main className="emails">
        <ul>
          {emails.map((email, index) => (
            <EmailElement
              key={email.id}
              onClick={onEmailClicked}
              email={email}
              onToggleRead={onToggleRead}
              onToggleStar={onToggleStar}
            />
          ))}
        </ul>
      </main>
    </>
  );
}
