import React from 'react'
import { Link } from 'react-router-dom'
import styles from './nav.module.css'

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                <li className={styles.nav__item}>
                    <Link to='/' className={styles.nav__link}>Main</Link>
                </li>
                <li className={styles.nav__item}>
                    <Link to='/contacts' className={styles.nav__link}>Contacts</Link>
                </li>
                <li className={styles.nav__item}>
                    <a href='https://github.com/kan88/gallery' className={styles.nav__link}>Github</a>
                </li>
            </ul>
        </nav>
    )
}
