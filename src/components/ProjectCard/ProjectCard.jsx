import React from 'react'
import styles from './ProjectCard.module.css'

const ProjectCard = ({data}) => {

if(!data || !data.title || !data.img || !data.desc) return null
  return (
    <div className={styles.container}>
        <span className={styles.ProjectTitle}>{data.title}</span>
        <img src={data.img} alt="project" className={styles.ProjectImg}/>
        <span className={styles.ProjectDesc}>{data.desc}</span>
        {
            data.liveBtn 
        }


    </div>
  )
}

export default ProjectCard