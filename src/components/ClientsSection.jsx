import React from 'react';
import styles from './ClientsSection.module.css';

export default function ClientsSection() {
  const clients = [
    "Rede D'Or",
    "Carioca Engenharia",
    "Engeform",
    "Celta Engenharia",
    "EGTC Infra",
    "SEEL Serviços Especiais",
    "Visione Engenharia",
    "Athomo Incorporadora",
    "Lazarus Engenharia",
    "Geologus",
    "Construtora Tavares e Videira",
    "Tensor"
  ];

  return (
    <section className={`section ${styles.sectionBg}`}>
      <div className="container">
        <h2 className={styles.title}>Confiança depositada pelas <span>maiores construtoras</span> do mercado.</h2>
        <div className={styles.marquee}>
          <div className={styles.track}>
            {/* Duplicando as listas para criar o efeito de scroll infinito perfeito */}
            {[...clients, ...clients, ...clients].map((client, idx) => (
              <div key={idx} className={styles.clientTag}>
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
