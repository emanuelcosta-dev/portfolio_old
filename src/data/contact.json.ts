export interface Template {
  link: string;
  type: string;
  title: string;
};
const one: Template = {
  link: "mailto:hello@emanuelcosta.dev",
  type: "Email",
  title: "hello@emanuelcosta.dev",
};
const two: Template = {
link: "https://www.linkedin.com/in/emanuel-costa/",
    type: "LinkedIn",
  title: "emanuel-costa",
};
const three: Template = {
link: "https://github.com/emanuelcosta-dev",
    type: "GitHub",
  title: "emanuelcosta-dev",
};
export const bytype = {
  one,
    two,
    three,
};
export const contact = Object.values(bytype);
