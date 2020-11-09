import React from 'react'
import Link from 'next/link'
import s from './style.module.scss'

const Header = () => {
    return (
        <header className={s.header}>
            <menu className={s.menu}>
                <section className={s.logo}>
                    <Link href="/">
                       <a>LOGO</a>
                    </Link>
                </section>
                <section className={s.nav_container}>
                <nav>
                    <ul className={s.menu_list}>
                        <li>
                           <Link href="/home"><a>Home</a></Link>
                        </li>
                        <li>
                           <Link href="/about"><a>About</a></Link>
                        </li>
                        <li>
                           <Link href="/contact"><a>Contact</a></Link>
                        </li>
                    </ul>
                </nav>
                </section>
            </menu>
        </header>
    )
}

export default Header