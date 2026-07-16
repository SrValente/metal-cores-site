import React from 'react';
import WhatsAppButton from './WhatsAppButton';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.content}`}>
        <div className={styles.badge}>
          CONSTRUINDO A INFRAESTRUTURA DO RIO DE JANEIRO DESDE 1989
        </div>
        <h1 className={styles.title}>
          Engenharia de Fachadas e Estruturas Metálicas para Obras de Alta Complexidade.
        </h1>
        <p className={styles.subtitle}>
          O Grupo Metal Cores materializa a visão de arquitetos e construtoras através de sistemas de esquadrias em alumínio de alto padrão e estruturas pesadas. Rigor técnico absoluto, conformidade às normas ABNT NBR 10821 e 6123, e execução industrial de ponta.
        </p>
        <div className={styles.actions}>
          <WhatsAppButton text="Solicitar Estudo de Viabilidade" />
          <a href="#portfolio" className="btn btn-secondary">Explorar Obras Entregues</a>
        </div>
      </div>
    </section>
  );
}
