// TODO
// Combine titles, ids, content into object
// Use an array to hold the object per section
// So then CyberEduModule can accept one less prop

let sectionsContents: Array<String> = [];

import introduction from "./01_introduction";
sectionsContents.push(introduction);

import creating_strong_passwords from "./02_creating_strong_passwords";
sectionsContents.push(creating_strong_passwords);

import password_management from "./03_password_management";
sectionsContents.push(password_management);

import securing_your_data from "./04_securing_your_data";
sectionsContents.push(securing_your_data);

import additional_resources from "./05_additional_resources";
sectionsContents.push(additional_resources);

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

export { sectionsContents, sectionsTitlesIds };
