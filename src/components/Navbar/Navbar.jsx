import React, { useState } from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const navItems = [
    { name: "Projets", path: "/" },
    { name: "Details", path: "/details" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" }
  ];

  const handleClick = (index) => {
    setActiveItem(index);
    console.log(index);
  };

  return (
    <div className={styles.Navbar} >
      <div className={styles.Logo} onClick={()=>handleClick(null)}>
        <span>S</span>
      </div>
      <div className={styles.NavItems}>
        {navItems.map((item, index) => (
          <div
            key={index}
            className={styles.navItem + ` ${index === activeItem ? styles.active : ""}`}
            onClick={() => handleClick(index)}
          >
            <span className={styles.navItemLabel}>{item.name}</span>
          </div>
        ))}
      </div>
      <div className={styles.bottomIcons}>
        <img src='images/LinkedInLogo.png' alt='linkedin' className={styles.icon}/>
        <img src='images/GithubLogo.png' alt='github' className={styles.icon}/>
        
      </div>
    </div>
  )
}

export default Navbar