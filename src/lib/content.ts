import boxen from "boxen";
import open from "open";
import { data } from "./data.js";

export const questions = [
  {
    type: "list",
    name: "action",
    message: "What's up?",
    choices: [
      {
        name: "Toss an email",
        value: () => {
          open("mailto:devabdultech@gmail.com");
          console.log("\nLooking forward to hearing from you.\n");
        },
      },
      {
        name: "Reach out at @devabdultech",
        value: () => {
          open("https://twitter.com/devabdultech");
          console.log("\nLooking forward to hearing from you.\n");
        },
      },
      {
        name: "Exit",
        value: () => console.log("Enjoy your day.\n"),
      },
    ],
  },
];

export const me = boxen(
  [
    `${data.name}`,
    `${data.handle}`,
    `${data.tagline}`,
    `${data.location}`,
    ``,
    `${data.labelWebsite}  ${data.website}`,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedin}  ${data.linkedin}`,
    "",
  ].join("\n"),
  {
    margin: 1,
    padding: 1,
    borderStyle: "single",
    borderColor: "white",
  }
);
