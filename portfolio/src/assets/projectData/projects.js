import Statistics from "../LTJobStatistics.png";
import ReflixBrowse from "../ReflixAppBrowse.gif";
import ReflixLibrary from "../ReflixAppLibrary.gif";
import ReflixSearch from "../ReflixAppSearch.gif";
import TimeBoxIT from "../TimeBoxItMainView.png";
import HandBookIOS from "../HandBookIOS.gif";
import HandBookAndroid from "../HandBookAndroid.gif";

export default [
  {
    key: "1",
    title: "LT Job Statistics",
    description:
      "This website was made to research the trends of technologies/tools mentioned in IT job adverts. You can see generated charts from data we gathered, the default charts are of top 10 technologies in the database, but there is a filter if you want to view different data, feel free to check out 😎.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Puppeter ",
    ],
    images: [Statistics],
    codeRepoLink: "https://github.com/DomantasMk/LtJobStatistics",
    liveLink: "https://ltitjobstatistics.herokuapp.com/",
  },
  {
    key: "2",
    title: "TimeBoxIt",
    description:
      "Personal Project similar to google calendar with the goal of planning your own schedule on a calendar. In case you try it out and dont want to bother registering you can check it out with a test account: Email: test@test.com password: test",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "GraphQL (Flexible API)",
      "JWT (Tokens for authentication)",
      "Axios",
    ],
    images: [TimeBoxIT],
    codeRepoLink: "https://github.com/DomantasMk/TimeBoxIt",
    liveLink: "https://timeboxapp.herokuapp.com/",
  },
  {
    key: "3",
    title: "ReflixApp",
    description:
      "A basic application for browsing/searching/saving movies and saving them to your personal library.",
    technologies: [
      "App - React Native",
      "Server side - Node.js/Express.js",
      "Express.js",
      "Scraping data - Puppeter library",
      "MongoDB",
      "Mongoose",
    ],
    images: [ReflixBrowse, ReflixLibrary, ReflixSearch],
    codeRepoLink: "https://github.com/DomantasMk/ReflixApp",
  },
  {
    key: "4",
    title: "Hand book app",
    description:
      "Our application is a survival guide for students in Brno, mainly targeted at incoming foreign students to collect and present all the necessary information a new student would need to thrive. There is a lot of information the first few weeks and a lot of things to remember. Our application would solve the problem of information overload and different information sources, gathering it in one application, available offline after the initial download.",
    technologies: [
      "App - React Native",
      "Expo",
      "XCode (testing on iOS)",
      "Android studio (testing on Android)",
      "Git",
    ],
    images: [HandBookIOS, HandBookAndroid],
    codeRepoLink: "https://github.com/oisteinhaugland/appdevBrno-nowedont",
  },
];
