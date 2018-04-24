import Section from "../section_definition";

let sections: Array<Section> = [];

import * as introduction from "./01_introduction";
sections.push({ id: sections.length, ...introduction });

import * as signs_of_phishing from "./02_signs_of_phishing";
sections.push({ id: sections.length, ...signs_of_phishing });

import * as report_phishing from "./03_report_phishing";
sections.push({ id: sections.length, ...report_phishing });

export default sections;
