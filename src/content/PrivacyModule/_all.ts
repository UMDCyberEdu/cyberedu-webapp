import Section from "../section_definition";

let sections: Array<Section> = [];

import * as introduction from "./00_introduction";
sections.push({ id: sections.length, ...introduction });

import * as headers from "./01_headers";
sections.push({ id: sections.length, ...headers });

import * as emphasis from "./02_emphasis";
sections.push({ id: sections.length, ...emphasis });

import * as images from "./03_images";
sections.push({ id: sections.length, ...images });

import * as videos from "./04_videos";
sections.push({ id: sections.length, ...videos });

import * as tables from "./05_tables";
sections.push({ id: sections.length, ...tables });

export default sections;
