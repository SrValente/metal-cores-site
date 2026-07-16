import React from 'react';
import WhatsAppButton from './WhatsAppButton';
import styles from './PortfolioSection.module.css';

export default function PortfolioSection() {
  const works = [
    {
      title: 'Centro Logístico Avançado',
      description: 'Estrutura com vão livre extensivo. Mais de 120 toneladas de aço aplicadas com tolerâncias milimétricas, cumprindo rigorosamente os cronogramas da construtora.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Complexo Corporativo',
      description: 'Implementação de fachadas unitizadas com isolamento acústico superior, revitalizando a volumetria arquitetônica com estanqueidade certificada.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Sede Administrativa Industrial',
      description: 'Structural Glazing executado com precisão e esquadrias de alumínio sob norma NBR 10821 para resistência máxima a ventos severos.',
      image: 'https://images.unsplash.com/photo-1551043047-1d2adf00f3ef?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Hangar de Distribuição',
      description: 'Montagem de superestrutura pesada para galpão de escala monumental. Desafios logísticos superados com a orquestração de nossa equipe especializada.',
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop'
    }
  ];

  return (
    <section id="portfolio" className={`section ${styles.sectionBg}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="section-title">Portfólio de Obras e <span>Desafios Estruturais Superados</span>.</h2>
          <p className={styles.subtitle}>
            O aço e o alumínio moldando o novo horizonte industrial e comercial do Rio de Janeiro. Explore a magnitude geométrica das nossas execuções recentes.
          </p>
        </div>
        
        <div className={styles.grid}>
          {works.map((work, index) => (
            <div key={index} className={styles.card}>
              <div 
                className={styles.image} 
                style={{ backgroundImage: `url(${work.image})` }}
              ></div>
              <div className={styles.overlay}>
                <h3>{work.title}</h3>
                <p className={styles.description}>{work.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.ctaFinal}>
          <h3>O seu próximo grande projeto exige um parceiro corporativo à altura?</h3>
          <p>
            A mitigação de riscos na construção civil começa na escolha certa do fornecedor. Não deixe o sucesso e a estabilidade da sua obra nas mãos de fabricantes não certificados. Consulte nosso conselho de engenheiros para alinhar as especificações técnicas e normativas do seu projeto.
          </p>
          <WhatsAppButton text="Enviar Projeto Técnico para Avaliação" />
        </div>
      </div>
    </section>
  );
}
