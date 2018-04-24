import Section from "../section_definition";

let sections: Array<Section> = [];

import * as introduction from "./01_introduction";
sections.push({ id: sections.length, ...introduction });

import * as creating_strong_passwords from "./02_creating_strong_passwords";
sections.push({ id: sections.length, ...creating_strong_passwords });

import * as password_management from "./03_password_management";
sections.push({ id: sections.length, ...password_management });

import * as enable_2fa from "./04_securing_your_data";
sections.push({ id: sections.length, ...enable_2fa });

import * as additional_resources from "./05_additional_resources";
sections.push({ id: sections.length, ...additional_resources });

export default sections;
