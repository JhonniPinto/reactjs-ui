import React from 'react'
import styles from './styles.module.css'

const input = ({className, ...props}) => <input className={`${styles.green} ${className || ''}`} {...props} />

export default input