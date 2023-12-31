import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'

const Navbar = () => {
  const links = [
    {
      id: 1,
      title: 'Home',
      url: '/',
    },
    {
      id: 2,
      title: 'Portfolio',
      url: '/portfolio',
    },
    {
      id: 3,
      title: 'Blog',
      url: '/blog',
    },
    {
      id: 4,
      title: 'About',
      url: '/about',
    },
    {
      id: 5,
      title: 'Contact',
      url: '/contact',
    },
    {
      id: 6,
      title: 'Dashboard',
      url: '/dashboard',
    },
  ]

  return (
    <div className={styles.navCountainer}>
      <Link className={styles.logo} href={'/'}>
        Lamamia
      </Link>
      <div className={styles.links}>
        {links?.map((link) => {
          return (
            <Link href={link.url} key={link.id}>
              {link.title}
            </Link>
          )
        })}
        <button className={styles.logout}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
