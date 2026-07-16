import React from 'react';
import WhatsAppButton from './WhatsAppButton';
import styles from './PortfolioSection.module.css';

export default function PortfolioSection() {
  const works = [
    {
      title: '1ª Fase Ninho do Urubu - CRF',
      description: 'Estruturas de alta performance para o centro de treinamento do Clube de Regatas do Flamengo. Entrega com tolerâncias milimétricas, cumprindo rigorosamente os cronogramas.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Hospital Municipal Pedro II',
      description: 'Engenharia de precisão para ambiente hospitalar de alta complexidade. Implementação de fachadas e esquadrias com isolamento técnico e estanqueidade certificada.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop'
    },
    {
      title: 'Complexo Esportivo de Deodoro',
      description: 'Participação na infraestrutura metálica e envidraçamentos deste pólo olímpico. Rigor normativo máximo para garantir a segurança em edificações de grande concentração pública.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Câmara Municipal de Angra dos Reis',
      description: 'Soluções arquitetônicas e estruturais completas para o setor público. Esquadrias e revestimentos projetados para suportar intempéries costeiras e manter a estética institucional.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
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
