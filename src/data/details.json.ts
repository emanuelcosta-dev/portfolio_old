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
  date: "13.02.2023",
};
const two: Template = {
  link: "https://www.optigest.net/www/PT/",
  position: "Fullstack Web Developer",
  company: "Optigest",
  location: "Porto, Portugal",
  date: "10.02.2022",
};
const three: Template = {
  link: "https://sidis.ai/",
  position: "Fullstack Web Developer",
  company: "Nemobile",
  location: "Porto, Portugal",
  date: "10.02.2022",
};
export const bytitle = {
  one,
  two,
  three,
};
export const details = Object.values(bytitle);
