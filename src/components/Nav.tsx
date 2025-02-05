import React, { useState } from "react";

import { Email } from "./Email";

type NavProps = {
  emails: Email[];
  onTabChange: (newTab: string) => void;
  onToggleHideRead: () => void;
  currentTab: string;
  hideRead: boolean;
};

export default function Nav({
  emails,
  onTabChange,
  currentTab,
  onToggleHideRead,
  hideRead,
}: NavProps) {
  const unreadEmails = emails.filter((email) => !email.read);
  const starredEmails = emails.filter((email) => email.starred);

  return (
    <>
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className={`item ${currentTab === "inbox" ? "active" : ""}`}
            onClick={() => onTabChange("inbox")}
          >
            <span className="label">Inbox</span>
            <span className="count">{unreadEmails.length}</span>
          </li>
          <li
            className={`item ${currentTab === "starred" ? "active" : ""}`}
            onClick={() => onTabChange("starred")}
          >
            <span className="label">Starred</span>
            <span className="count">{starredEmails.length}</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={hideRead}
              onChange={onToggleHideRead}
            />
          </li>
        </ul>
      </nav>
    </>
  );
}
