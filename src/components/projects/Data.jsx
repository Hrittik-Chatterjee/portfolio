import Nextflix from "../../assets/nextflix.jpg";
import CaseCraftopia from "../../assets/casecraftopia.avif";
import NinjaDevQuiz from "../../assets/ninjadev.jpg";

export const projectsData = [
  {
    id: 3,
    image: CaseCraftopia,
    title: "Case Craftopia",
    category: "React",
    live: "https://casecraftopia.netlify.app/",
    source: "https://github.com/Hrittik-Chatterjee/case-craftopia",
  },
  {
    id: 1,
    image: NinjaDevQuiz,
    title: "Ninja Dev",
    category: "React",
    live: "https://ninjadevquiz.netlify.app/",
    source: "https://github.com/Hrittik-Chatterjee/Ninja-dev-quiz",
  },

  {
    id: 2,
    image: Nextflix,
    title: "Nextflix Project",
    category: "Next",
    live: "https://nextflixproject.vercel.app/",
    source: "https://github.com/Hrittik-Chatterjee/nextflix",
  },
];

export const projectsNav = [
  {
    name: "All",
  },
  {
    name: "React",
  },
  {
    name: "Next",
  },
  {
    name: "Others",
  },
];
