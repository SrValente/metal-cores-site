import React from 'react';
import WhatsAppButton from './WhatsAppButton';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.contentGrid}`}>
        <div className={styles.textContent}>
          <div className={styles.badge}>
            CONSTRUINDO A INFRAESTRUTURA DO RIO DE JANEIRO DESDE 1989
          </div>
          
          <h1 className={styles.title}>
            Engenharia de Fachadas e Estruturas Metálicas para Obras de Alta Complexidade.
          </h1>
          
          <p className={styles.subtitle}>
            Com raízes sólidas fincadas em 1989, o Grupo Metal Cores alia a precisão do maquinário CNC e engenharia avançada de Building Systems para materializar a visão de arquitetos e construtoras. Da fabricação de esquadrias de alumínio premium a estruturas metálicas pesadas, garantimos rigor técnico absoluto, mitigação de riscos e conformidade às normas ABNT NBR 10821 e 6123.
          </p>

          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <strong>+35 Anos</strong>
              <span>de Evolução Construtiva</span>
            </div>
            <div className={styles.statItem}>
              <strong>1.200 m²</strong>
              <span>Área Fabril Industrial</span>
            </div>
            <div className={styles.statItem}>
              <strong>13 ton/mês</strong>
              <span>Capacidade Produtiva</span>
            </div>
          </div>

          <div className={styles.actions}>
            <WhatsAppButton text="Solicitar Estudo de Viabilidade" />
            <a href="#pdf-portfolio" className="btn btn-secondary">Apresentação Oficial (PDF)</a>
          </div>
        </div>

        <div className={styles.imageCol}>
          <div className={styles.imageCard}>
            <img 
              src="/images/hero-factory-miguel.png" 
              alt="Unidade Fabril e Engenharia Grupo Metal Cores" 
              className={styles.heroImg}
            />
            <div className={styles.imageBadgeTop}>
              <span>PARQUE FABRIL E UNIDADE INDUSTRIAL GMC</span>
            </div>
            <div className={styles.imageBadgeBottom}>
              <div className={styles.statusDot}></div>
              <span>Tecnologia CNC & Maquinário de Ponta</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
