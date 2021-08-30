import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.content}>
      <header className={styles.title}>Home Page</header>
      <main class={styles.inner__cover}>
        <h1 className={styles.header}>Welcome to NC Games</h1>
        <p className={styles.lead}>
          This is a game review website which will host mock data from a
          back-end database that I set up during the first phase of this
          project. There are several pages to interact with, such as the
          categories and the comments page. Users have the ability to post and
          comment on reviews, among other actions such as voting on comments and
          posting categories. There are also filtering options for users to use
          when searching the webpage.
        </p>
        <p>
          This is a game review website which will host mock data from a
          back-end database that I set up during the first phase of this
          project. There are several pages to interact with, such as the
          categories and the comments page. Users have the ability to post and
          comment on reviews, among other actions such as voting on comments and
          posting categories. There are also filtering options for users to use
          when searching the webpage.
        </p>
      </main>
      <footer class={styles.footer}>Created by Mahamud Arteh</footer>
    </div>
  );
};

export default Home;
