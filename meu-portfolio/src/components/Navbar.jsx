import React from 'react'
import {NavLink} from 'react-router-dom'
import { IconHome, IconUser, IconFolderCode, IconMail, IconBrandGithub, IconBrandLinkedin} from '@tabler/icons-react';


export const Navbar = () => {
  return (
    <nav className="Navbar">
        <ul className="nav-top">
            <li><NavLink to="/" aria-label="Introdução"><IconHome stroke={2} /></NavLink></li>
            <li><NavLink to="/sobre" aria-label="Sobre"><IconUser stroke={2} /></NavLink></li>
            <li><NavLink to="/projetos" aria-label="Projetos"><IconFolderCode stroke={2} /></NavLink></li>
            <li><NavLink to="/contato" aria-label="Contato"><IconMail stroke={2} /></NavLink></li>
        </ul>
        <ul className="nav-bottom">
            <li><a href="https://github.com/bresantos" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><IconBrandGithub stroke={2} /></a></li>
            <li><a href="https://www.linkedin.com/in/brendatrsantos/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><IconBrandLinkedin stroke={2} /></a></li>
        </ul>
    </nav>
  )
}