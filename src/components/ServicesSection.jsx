import React from 'react';
import WhatsAppButton from './WhatsAppButton';
import styles from './ServicesSection.module.css';

export default function ServicesSection() {
  const services = [
    {
      title: 'Esquadrias de Alumínio Premium',
      description: 'Sistemas de esquadrias minimalistas com excepcional desempenho termoacústico. Tratamentos de superfície por anodização e pintura eletrostática sob padrões rigorosos (certificações Qualanod e Qualicoat). Dimensionamento técnico perfeito para edifícios corporativos e residenciais de alto padrão, garantindo estanqueidade total segundo a NBR 10821.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '48px', height: '48px', color: 'var(--accent-color)' }}>
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      )
    },
    {
      title: 'Estruturas Metálicas e Galpões Industriais',
      description: 'Fabricação e montagem de estruturas pesadas, meticulosamente projetadas para resistir a severas cargas de vento e intempéries climáticas (NBR 6123). Soluções eficientes de engenharia para vencer grandes vãos livres, otimizando o layout interno de plantas industriais, hangares e complexos logísticos de larga escala.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '48px', height: '48px', color: 'var(--accent-color)' }}>
          <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
          <path d="M17 18h1"></path>
          <path d="M12 18h1"></path>
          <path d="M7 18h1"></path>
        </svg>
      )
    },
    {
      title: 'Fachadas Envidraçadas e Revestimentos Especiais',
      description: 'Engenharia de envoltórias prediais de vanguarda. Implementação de fachadas unitizadas, sistemas stick, painéis em ACM e projetos de Structural Glazing, concebidos para maximizar a eficiência energética, reduzir a carga térmica e revitalizar integralmente a volumetria arquitetônica dos grandes empreendimentos urbanos.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '48px', height: '48px', color: 'var(--accent-color)' }}>
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
          <path d="M9 22v-4h6v4"></path>
          <path d="M8 6h.01"></path>
          <path d="M16 6h.01"></path>
          <path d="M12 6h.01"></path>
          <path d="M12 10h.01"></path>
          <path d="M12 14h.01"></path>
          <path d="M16 10h.01"></path>
          <path d="M16 14h.01"></path>
          <path d="M8 10h.01"></path>
          <path d="M8 14h.01"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="servicos" className={`section ${styles.sectionBg}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="section-title">Sistemas Desenvolvidos para <span>Alta Performance</span>.</h2>
          <p className={styles.subtitle}>
            Engenharia de precisão para projetos corporativos e industriais que exigem estética impecável, estanqueidade absoluta e resistência estrutural máxima.
          </p>
        </div>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className={styles.microCta}>
                <WhatsAppButton text="Ver Especificações Técnicas →" isMicro={true} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
