'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import WhatsAppButton from './WhatsAppButton';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink}>
            <img src="/logo-symbol-hd.png" alt="GMC Grupo Metal Cores" className={styles.logoImg} />
            <div className={styles.logoText}>
              <span className={styles.line1}>GRUPO METAL CORES</span>
              <span className={styles.line2}>QUALIDADE & INOVAÇÃO</span>
            </div>
          </Link>
        </div>
        
        <button 
          className={styles.hamburger} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <Link href="#hero" onClick={() => setMenuOpen(false)}>O Grupo</Link>
          <Link href="#servicos" onClick={() => setMenuOpen(false)}>Sistemas Construtivos</Link>
          <Link href="#portfolio" onClick={() => setMenuOpen(false)}>Engenharia Executada</Link>
          <WhatsAppButton text="Faça seu Orçamento" />
        </nav>
      </div>
    </header>
  );
}
