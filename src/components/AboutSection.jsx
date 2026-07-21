import React from 'react';
import WhatsAppButton from './WhatsAppButton';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section id="sobre" className={`section ${styles.sectionBg}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.imageWrapper}>
          <img 
            src="/about-image.png" 
            alt="Grupo Metal Cores Instalações" 
            className={styles.image} 
          />
          <div className={styles.badge}>
            <strong>+35 Anos</strong>
            <span>de Evolução Estrutural</span>
          </div>
        </div>
        <div className={styles.content}>
          <h2>A Evolução da Inteligência Construtiva.</h2>
          <p>
            Com raízes sólidas fincadas em 1989, o Grupo Metal Cores representa a vanguarda tecnológica em soluções metálicas e envidraçamentos no Rio de Janeiro. A consolidação corporativa da nossa marca em 2004 e a aquisição estratégica da RAS Alumínio em 2018 não apenas expandiram massivamente nosso parque fabril, mas forjaram um ecossistema completo de Building Systems, capaz de gerir obras de escala monumental.
          </p>
          <p>
            Unimos a precisão extrema do maquinário CNC e engenharia de software avançada para fabricar esquadrias de alumínio premium e estruturas industriais que desafiam os limites da física arquitetônica. Nosso compromisso transcende o fornecimento de materiais; entregamos mitigação de riscos e segurança incontestável para empreendimentos milionários.
          </p>
          <ul className={styles.bulletPoints}>
            <li>Conformidade rigorosa com normas de estabilidade (NBR 6123).</li>
            <li>Centro de usinagem e extrusão com tecnologia de ponta.</li>
            <li>Logística própria e equipe de montagem orquestrada.</li>
          </ul>
          <div className={styles.actions}>
             <WhatsAppButton text="Conhecer nossa Estrutura Fabril" />
             <a href="#pdf-portfolio" className="btn btn-secondary">Apresentação Oficial em PDF</a>
          </div>
        </div>
      </div>
    </section>
  );
}
