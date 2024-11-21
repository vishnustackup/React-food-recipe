import React, { useState, useEffect } from "react";
import "./Header.scss";
import { BsSearch } from "react-icons/bs";
import { useMealcontext } from "../../context/MealContext";
import { useNavigate } from "react-router-dom";
import { startFetchMealBySearch } from "../../actions/MealActions";

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { dispatch, meals } = useMealcontext();

 



  const handleSearchTerm = (e) => {
    const value = e.target.value;
    console.log("Input value (onInput):", value); 
    setSearchTerm(value); 
    if (value.trim().length === 0) {
      setErrorMsg("Invalid search term..."); 
    } else {
      setErrorMsg(""); 
    }
  };


  const handleSearchResult = (e) => {
    e.preventDefault();
    const cleanedSearchTerm = searchTerm.trim(); 
    console.log("Trimmed search term:", cleanedSearchTerm); 
    if (cleanedSearchTerm) {
      startFetchMealBySearch(dispatch, cleanedSearchTerm); 
      navigate("/"); 
    } else {
      console.log("Search term is empty or invalid"); 
    }
  };

  return (
    <form className="search-form flex align-center" onSubmit={handleSearchResult}>
      <input
        type="text"
        className="form-control-input text-dark-gray fs-15"
        placeholder="Search recipes here ..."
        value={searchTerm} 
        onInput={handleSearchTerm} 
      />
      <button
        type="submit"
        className="form-submit-btn text-white text-uppercase fs-14"
      >
        <BsSearch className="btn-icon" size={24} />
      </button>
      {errorMsg && <p className="error-msg">{errorMsg}</p>} 
    </form>
  );
};

export default SearchForm;
