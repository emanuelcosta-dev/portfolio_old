export interface Template {
  link: string;
  position: string;
  company:string;
  location: string;
  date: string;
};
const one: Template = {
  link: "https://byside.com/",
  position: "Fullstack Web Developer",
  company: "Byside",
  location: "Porto, Portugal",
  date: "20.09.2021 - Present",
};
const two: Template = {
  link: "https://www.optigest.net/www/PT/",
  position: "Fullstack Web Developer",
  company: "Optigest",
  location: "Porto, Portugal",
  date: "01.12.2020 - 20.09.2021",
};
const three: Template = {
  link: "https://sidis.ai/",
  position: "Fullstack Web Developer",
  company: "Nemobile",
  location: "Porto, Portugal",
  date: "01.03.2020 - 01.09.2020",
};
export const bytitle = {
  one,
  two,
  three,
};
export const details = Object.values(bytitle);
