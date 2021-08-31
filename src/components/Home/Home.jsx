import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.content}>
      <header className={styles.title}>Home Page</header>
      <main className={styles.inner__cover}>
        <h1 className={styles.header}>Welcome to NC Games</h1>
        <p className={styles.lead}>
          This is a game review website which will host mock data from a
          back-end database that I set up during the first phase of this
          project. There are some pages to interact with, such as the categories
          and the reviews page. Users have the ability to like and comment on
          reviews, among other actions such as voting on comments and posting
          categories. I plan to be able to allow users to search the website
          eventually, once the page is fully functional
        </p>
      </main>
      <footer className={styles.footer}>Created by Mahamud Arteh</footer>
    </div>
  );
};

export default Home;
