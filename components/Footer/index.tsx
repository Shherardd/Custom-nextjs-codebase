import React from 'react'
import s from './style.module.scss'

const Footer = () => {
    return (
        <>
            <footer className={s.footer}>
                <div className={s.sectionWrapper}>
                    <section className={s.section}>This is the first section</section>
                    <section className={s.section}>This is the second section</section>
                </div>
            </footer>
        </>
    )
}

export default Footer
