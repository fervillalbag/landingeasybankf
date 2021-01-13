
import React, { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {

   const [menuStatus, setMenuStatus] = useState(false)

   const showMenu = () => setMenuStatus(!menuStatus)

   return (
      <nav className="navigation">
         <div className="container">
            <div className="navigation-brand">
               <Link href="/">
                  <a className="navigation-brand__link">
                     <img className="navigation-brand__image" src="/logo.svg" alt="" />
                  </a>
               </Link>
            </div>

            <div
               className={menuStatus
                  ? "navigation-menu__overlay active"
                  : "navigation-menu__overlay"}
               aria-hidden="true"></div>
            <ul
               className={menuStatus
                  ? 'navigation-menu active'
                  : 'navigation-menu'}
            >
               <li className="navigation-menu__item">
                  <Link href="/">
                     <a className="navigation-menu__link">Home</a>
                  </Link>
               </li>
               <li className="navigation-menu__item">
                  <Link href="/">
                     <a className="navigation-menu__link">About</a>
                  </Link>
               </li>
               <li className="navigation-menu__item">
                  <Link href="/">
                     <a className="navigation-menu__link">Contact</a>
                  </Link>
               </li>
               <li className="navigation-menu__item">
                  <Link href="/">
                     <a className="navigation-menu__link">Blog</a>
                  </Link>
               </li>
               <li className="navigation-menu__item">
                  <Link href="/">
                     <a className="navigation-menu__link">Careers</a>
                  </Link>
               </li>
            </ul>

            <div className="navigation-footer">
               <Link href="/">
                  <a className="navigation-footer__link">
                     Request Invite
               </a>
               </Link>
            </div>

            <div className="navigation-bars">
               <button
                  className="navigation-bars__button"
                  onClick={showMenu}
               >
                  <img
                     className="navigation-bars__image"
                     src={!menuStatus
                        ? 'icon-hamburger.svg'
                        : 'icon-close.svg'}
                     alt="" />
               </button>
            </div>
         </div>
      </nav>
   )
}
