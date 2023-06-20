import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div> 2023 Lamamia. All rights reserved</div>
      <div className={styles.imgContainer}>
        <Image
          src='/images/1 (2).png'
          alt='hero'
          width={15}
          height={15}
          className={styles.icon}
        />
        <Image
          src='/images/2 (2).png'
          alt='hero'
          width={15}
          height={15}
          className={styles.icon}
        />
        <Image
          src='/images/3 (2).png'
          alt='hero'
          width={15}
          height={15}
          className={styles.icon}
        />
        <Image
          src='/images/4 (2).png'
          alt='hero'
          width={15}
          height={15}
          className={styles.icon}
        />
      </div>
    </div>
  )
}

export default Footer
