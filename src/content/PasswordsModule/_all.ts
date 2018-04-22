let allSectionsContents: Array<String> = [];

import introduction from "./01_introduction";
allSectionsContents.push(introduction);

import creating_strong_passwords from "./02_creating_strong_passwords";
allSectionsContents.push(creating_strong_passwords);

import password_management from "./03_password_management";
allSectionsContents.push(password_management);

import securing_your_data from "./04_securing_your_data";
allSectionsContents.push(securing_your_data);

import additional_resources from "./05_additional_resources";
allSectionsContents.push(additional_resources);

const sectionsTitlesIds = [
  {
    id: 0,
    title: "Introduction"
  },
  {
    id: 1,
    title: "Strong Passwords"
  },
  {
    id: 2,
    title: "Password Management"
  },
  {
    id: 3,
    title: "Enabling 2FA"
  },
  {
    id: 4,
    title: "Additional Resources"
  }
];

export { allSectionsContents, sectionsTitlesIds };
