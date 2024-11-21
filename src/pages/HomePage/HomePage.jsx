import React from "react";
import "./HomePage.scss";
import { useMealcontext } from "../../context/MealContext";
import Loader from "../../components/Loader/Loader";
import CategoryList from "../../components/Category/CategoryList";
import Notfound from "../../components/Notfound/Notfound";
import MealList from "../../components/Meal/MealList";
const HomePage = () => {
  const { categories, meals, categoryLoading, mealsLoading } = useMealcontext();

  return (
    <main className="main-content">
      {mealsLoading ? (
        <Loader />
      ) : meals === null ? (
        <Notfound />
      ) : meals?.length ? (
        <MealList meals={meals} />
      ) : (
        ""
      )}

      {categoryLoading ? <Loader /> : <CategoryList categories={categories} />}
    </main>
  );
};

export default HomePage;
