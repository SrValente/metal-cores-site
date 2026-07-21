'use client';

import React, { useState } from 'react';
import WhatsAppButton from './WhatsAppButton';
import styles from './PdfViewerSection.module.css';

export default function PdfViewerSection() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <section id="pdf-portfolio" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.badge}>DOCUMENTO TÉCNICO OFICIAL 2026</span>
          <h2 className="section-title">
            Catálogo & Portfólio de <span>Projetos e Soluções</span>
          </h2>
        </div>

        <div className={styles.actionsBar}>
          <div className={styles.pdfInfo}>
            <svg className={styles.pdfIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            <div>
              <span className={styles.fileName}>PORTFÓLIO GMC 2026-REV02.pdf</span>
              <span className={styles.fileMeta}>Formato PDF • 16 Páginas • Apresentação Oficial</span>
            </div>
          </div>

          <div className={styles.buttonsGroup}>
            <a 
              href="/portfolio-gmc-2026.pdf" 
              download="PORTFOLIO_GRUPO_METAL_CORES_2026.pdf" 
              className={styles.downloadBtn}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Baixar PDF
            </a>

            <a 
              href="/portfolio-gmc-2026.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.openBtn}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Abrir em Nova Aba
            </a>

            <button 
              onClick={toggleFullscreen} 
              className={styles.fullscreenBtn}
              title="Expandir Visualização"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                {isFullscreen ? (
                  <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
                ) : (
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                )}
              </svg>
              {isFullscreen ? 'Sair da Tela Cheia' : 'Tela Cheia'}
            </button>
          </div>
        </div>

        <div className={`${styles.viewerWrapper} ${isFullscreen ? styles.fullscreenWrapper : ''}`}>
          {isFullscreen && (
            <div className={styles.fullscreenHeader}>
              <span>Visualizador de Portfólio GMC 2026</span>
              <button onClick={toggleFullscreen} className={styles.closeFullscreenBtn}>✕ Fechar</button>
            </div>
          )}

          <iframe 
            src="/portfolio-gmc-2026.pdf#toolbar=1&view=FitH" 
            title="Portfólio Grupo Metal Cores 2026" 
            className={styles.pdfIframe}
          />

          <div className={styles.fallbackNotice}>
            <p>
              Se o seu navegador não carregar a pré-visualização automática do PDF acima, você pode visualizar diretamente no link abaixo:
            </p>
            <a 
              href="/portfolio-gmc-2026.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              Abrir PDF no Navegador
            </a>
          </div>
        </div>

        <div className={styles.footerCta}>
          <p>
            Precisa de detalhes adicionais ou cotação direta para o seu projeto?
          </p>
          <WhatsAppButton text="Falar com a Engenharia do GMC" />
        </div>
      </div>
    </section>
  );
}
