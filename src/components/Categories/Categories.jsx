import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Categories.module.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [slugInput, setSlugInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  // onClick(category) will take the user to a page displaying Reviews by category

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
    <div className="container mt-5">
      <div className={styles.content}>
        <div className={styles.form}>
          <form onSubmit={handleSubmit}>
            <h2>Post Category</h2>
            <label className={styles.field}>
              Category:
              <textarea
                onChange={handleSlugChange}
                rows="1"
                value={slugInput}
                type="text"
                placeholder="new category here..."
              />
            </label>
            <label type="submit" className={styles.field}>
              Description
              <textarea
                onChange={handleDescriptionChange}
                rows="3"
                placeholder="description goes here..."
              />
              <button
                className={styles.button}
                type="submit"
                onClick={handleSubmit}
              >
                submit
              </button>
            </label>
          </form>
        </div>
      </div>
      <div className="row">
        {categories.map((category) => {
          return (
            <div class="col-md-4">
              <div class={styles.card}>
                <div class={styles.category}>
                  <div class="d-flex flex-column ml-2">
                    <span class={"text-black-50"}>{category.slug}</span>
                    <span class="text-black-50">{category.description}</span>
                    <span class="ratings">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div />
      </div>
    </div>
  );
};

export default Categories;
