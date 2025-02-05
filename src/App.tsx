import { useState } from "react";

import initialEmails, { Email } from "./data/emails";

import "./styles/App.css";
import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Emails from "./components/Emails";
import EmailContent from "./components/EmailContent";

function App() {
  const [emails, setEmails] = useState(initialEmails);
  const [hideRead, setHideRead] = useState(false);
  const [currentTab, setCurrentTab] = useState("inbox");
  const [searchString, setSearchString] = useState("");
  const [openEmail, setOpenEmail] = useState<Email | null>(null);

  const searchEmails = (emails: Email[]) =>
    emails.filter((e) =>
      e.title.toLowerCase().includes(searchString.toLowerCase())
    );
  const unreadEmails = (emails: Email[]) => emails.filter((e) => !e.read);
  const starredEmails = (emails: Email[]) => emails.filter((e) => e.starred);
  const filteredEmails = (emails: Email[]) => {
    let a = currentTab == "starred" ? starredEmails(emails) : emails;
    a = searchEmails(a);
    return hideRead ? unreadEmails(a) : a;
  };

  const toggleStar = (targetEmail: Email) => {
    const updatedEmails = (emails) =>
      emails.map((email) =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      );
    setEmails(updatedEmails);
  };

  const toggleRead = (targetEmail: Email) => {
    const updatedEmails = (emails) =>
      emails.map((email) =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      );
    setEmails(updatedEmails);
  };

  return (
    <div className="app">
      <Header onChangedSearchString={setSearchString} />
      <Nav
        emails={emails}
        onTabChange={(newTab) => setCurrentTab(newTab)}
        currentTab={currentTab}
        onToggleHideRead={() => setHideRead(!hideRead)}
        hideRead={hideRead}
      />
      {openEmail != null ? (
        <EmailContent email={openEmail} goBack={() => setOpenEmail(null)} />
      ) : (
        <Emails
          emails={filteredEmails(emails)}
          onToggleRead={toggleRead}
          onToggleStar={toggleStar}
          onEmailClicked={setOpenEmail}
        />
      )}
    </div>
  );
}

export default App;
