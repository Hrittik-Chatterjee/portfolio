/* eslint-disable react/prop-types */

import { HiOutlineArrowSmRight } from "react-icons/hi";

// eslint-disable-next-line react/prop-types
const ProjectItems = ({item}) => {
  return (
        <div className="project__card" key={item.id}>
            <img className="project__img" src={item.image} alt="" />
            <h3 className="project__title">{item.title}</h3>
            <a href="#" className="project__button">
                Demo <HiOutlineArrowSmRight className="project__button-icon" />
            </a>
        </div>
    );
}

export default ProjectItems;