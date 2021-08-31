import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Categories.module.css";
import Logo from "../../elements/Logo/Logo";
import icon from "../../images/categories-icon.png";

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
    <div className={styles.container}>
      <section className="card-group">
        <form className={styles.form} onSubmit={handleSubmit}>
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
          <label type="submit" className="">
            Description
            <textarea
              onChange={handleDescriptionChange}
              rows="1"
              placeholder="description goes here..."
            />
          </label>
          <button
            className={styles.form__button}
            type="submit"
            onClick={handleSubmit}
          >
            submit
          </button>
        </form>

        {categories.map((category) => {
          return (
            <article key={category.slug}>
              <div
                className={styles.card}
                src=".../100pxx200"
                alt="Card image cap"
              >
                <img src={icon} alt="icon"></img>
                <h4>{category.slug}</h4>
              </div>
              <p className={styles.description}>{category.description}</p>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Categories;
