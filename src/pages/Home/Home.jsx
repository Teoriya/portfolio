import React from 'react'
import styles from './Home.module.css'
const Home = () => {
  return (
    <div className={`page `+ styles.home}>
      <div className={styles.container}>
      <span className={styles.name}>
          Sidhant Shahi
      </span>
      <span className={styles.title}>
          Full Stack Developer
      </span>
      </div>
    </div>
  )
}

export default Home