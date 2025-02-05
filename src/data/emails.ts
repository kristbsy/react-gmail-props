export type Email = {
  id: number;
  sender: string;
  title: string;
  starred: boolean;
  read: boolean;
  content: string;
};

const emails: Email[] = [
  {
    id: 1,
    sender: `Zoom`,
    title: `Cloud Recording - Nicolas Marcora's Personal Meeting Room is now available`,
    starred: false,
    read: true,
    content: 'The recording is now public!!!!!!!!'
  },
  {
    id: 2,
    sender: `Zoom`,
    title: `Sean Davison has joined your Personal Meeting Room`,
    starred: false,
    read: false,
    content: `Sean Davison has joined your Personal Meeting Room`,
  },
  {
    id: 3,
    sender: `Notion`,
    title: `1 update in Boolean`,
    starred: true,
    read: true,
    content: `One user has broken the git ci/cd pipeline, plz fix`,
  },
  {
    id: 4,
    sender: `The Calendly Team`,
    title: `Use more than one calendar?`,
    starred: false,
    read: false,
    content: `Use more than one calendar? No. Of course not, that would be strange`,
  },
  {
    id: 5,
    sender: `Patrick`,
    title: `Updated invitation: Coding chat with Nico`,
    starred: true,
    read: false,
    content: `The meeting has been moved to next week on monday`,
  }
]

export default emails;
