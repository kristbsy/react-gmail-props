import React, { useState } from "react";
import { Email } from "../data/emails";

type EmailProps = {
  email: Email;
  onToggleRead: (email: Email) => void;
  onToggleStar: (email: Email) => void;
  onClick: (email: Email) => void;
};

export default function EmailElement({
  email,
  onToggleRead,
  onToggleStar,
  onClick,
}: EmailProps) {
  return (
    <>
      <li
        key={email.id}
        onClick={(e) => onClick(email)}
        className={`email ${email.read ? "read" : "unread"}`}
      >
        <div className="select" onClick={(e) => e.stopPropagation()}>
          <input
            className="select-checkbox"
            type="checkbox"
            checked={email.read}
            onChange={() => onToggleRead(email)}
          />
        </div>
        <div className="star" onClick={(e) => e.stopPropagation()}>
          <input
            className="star-checkbox"
            type="checkbox"
            checked={email.starred}
            onChange={() => onToggleStar(email)}
          />
        </div>
        <div className="sender">{email.sender}</div>
        <div className="title">{email.title}</div>
      </li>
    </>
  );
}
