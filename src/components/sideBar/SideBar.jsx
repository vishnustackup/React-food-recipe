import React from "react";
import { usesidebarContext } from "../../context/SideBarContext";
import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-router-dom";
import { useMealcontext } from "../../context/MealContext";
import "./SideBar.scss";

const SideBar = () => {
  const { isSidebarOpen, closesidebar } = usesidebarContext();
  const { categories } = useMealcontext();
  return (
    <nav className={`sidebar ${isSidebarOpen ? 'sidebar-visible' : ""}`}>
            <button type = "button" className='navbar-hide-btn' onClick={() => closesidebar()}>
                <ImCancelCircle size = {24} />
            </button>

            <div className='side-content'>
                <ul className='side-nav'>
                    {
                        categories.map(category => (
                            <li className='side-item' key = {category.idCategory}>
                                <Link to = {`/meal/category/${category.strCategory}`} className='side-link ls-1 fs-13' onClick={() => closesidebar()}>
                                    {category.strCategory}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
  );
};

export default SideBar;
