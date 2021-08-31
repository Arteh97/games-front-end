import React, { useEffect, useState } from "react";
// import axios from "axios";
import styles from "./Categories.module.css";
// import Logo from "../../elements/Logo/Logo";
import icon from "../../images/categories-icon.png";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  // const [slugInput, setSlugInput] = useState("");
  // const [descriptionInput, setDescriptionInput] = useState("");

  // const handleSlugChange = (e) => {
  //   setSlugInput(e.currentTarget.value);
  // };
  // const handleDescriptionChange = (e) => {
  //   setDescriptionInput(e.currentTarget.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newCategory = {};
  //   newCategory.slug = slugInput;
  //   newCategory.description = descriptionInput;
  //   axios.post("https://arteh97.herokuapp.com/api/categories", newCategory);
  // };

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
      <header>Categories</header>
      <div className={styles.__categories}>
        <section className="card-group">
          {categories.map((category) => {
            return (
              <article className={styles.card} key={category.slug}>
                <div
                  className="card-img-top"
                  src=".../100pxx200"
                  alt="Card image cap"
                >
                  <img src={icon} alt="icon"></img>
                </div>
                <h4>{category.slug}</h4>
                <p className={styles.description}>{category.description}</p>
              </article>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default Categories;
