/* eslint-disable react/prop-types */

import { FiGithub } from "react-icons/fi";
import { HiOutlineArrowSmRight } from "react-icons/hi";

const Projectitems = ({ item }) => {
  return (
    <div className="project__card" key={item._id}>
      <img className="project__img" src={item.image} alt="" />
      <h3 className="project__title">{item.title}</h3>

      <a
        className="project__button"
        href={item.source}
        target="_blank"
        rel="noreferrer"
      >
        <FiGithub className="project__button-icon" /> Source Code
      </a>
      <a
        href={item.live}
        className="project__button"
        target="_blank"
        rel="noreferrer"
      >
        <HiOutlineArrowSmRight className="project__button-icon" /> Live Demo
      </a>
    </div>
  );
};

export default Projectitems;
