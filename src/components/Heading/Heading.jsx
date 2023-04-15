import React from 'react'
import styles from './Heading.module.css'
import arrowL from '../../assets/Arrow_1.png'
import arrowR from '../../assets/Arrow_2.png'

const Heading = ({title}) => {
  return (
    <div className={styles.Heading}>
            <img src={arrowL} alt="arrowL"/>
            <h1>{title}</h1>
            <img src={arrowR} alt="arrowR"/>       
    </div>
  )
}

export default Heading