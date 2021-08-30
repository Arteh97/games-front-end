import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Categories.module.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [slugInput, setSlugInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  const handleSlugChange = (e) => {
    setSlugInput(e.currentTarget.value);
  };
  const handleDescriptionChange = (e) => {
    setDescriptionInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCategory = {};
    newCategory.slug = slugInput;
    newCategory.description = descriptionInput;
    axios.post("https://arteh97.herokuapp.com/api/categories", newCategory);
  };

  useEffect(() => {
    fetch("https://arteh97.herokuapp.com/api/categories")
      .then((response) => response.json())
      .then((body) => {
        setCategories(body.categories);
      })
      .catch((err) => console.log(err));
  }, [categories]);

  return (
    <div className="rectangle-page">
      <h1>Categories</h1>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Post Category</h2>
        <label className="form">
          Category:
          <textarea
            onChange={handleSlugChange}
            rows="1"
            value={slugInput}
            type="text"
            placeholder="new category here..."
          />
        </label>
        <label type="submit" className="form">
          Description
          <textarea
            onChange={handleDescriptionChange}
            rows="2"
            placeholder="description goes here..."
          />
        </label>
        <button className="form-button" type="submit" onClick={handleSubmit}>
          submit
        </button>
      </form>
      <ul>
        {categories.map((category) => {
          return (
            <li key={category.slug} className="category">
              <div className="category-name">{category.slug}</div>
              <div className="category-description">{category.description}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
