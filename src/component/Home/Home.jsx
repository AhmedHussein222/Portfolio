import React from "react";
import style from './Home.module.css';

const Home = () => {
  return (
    <div className={`${style.container} gap-5`}>
      <h1>Katie Raeed</h1>
      <h2>Lorem ipsum dolor sit.</h2>
      <button className="w-25 mx-auto">Click Me</button>
    </div>
  );
}

export default Home;
