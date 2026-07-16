import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <div className={styles.logoLink}>
            <img src="/logo.png" alt="Grupo Metal Cores Símbolo" className={styles.logoImg} />
            <div className={styles.logoText}>
              <span className={styles.line1}>GRUPO METAL CORES</span>
              <span className={styles.line2}>QUALIDADE & INOVAÇÃO</span>
            </div>
          </div>
          <p>
            Engenharia de vanguarda em esquadrias de alumínio premium e infraestrutura metálica pesada para o Estado do Rio de Janeiro. Confiabilidade estrutural desde 1989.
          </p>
        </div>
        
        <div className={styles.address}>
          <h4>Planta Fabril e Sede Administrativa</h4>
          <p>Rua Henrique Scheid, 179 A</p>
          <p>Bairro Engenho de Dentro</p>
          <p>Rio de Janeiro - RJ</p>
          <p>CEP: 20770-060</p>
        </div>

        <div className={styles.contact}>
          <h4>Departamento Comercial & Engenharia</h4>
          <p>Central de Atendimento / WhatsApp:</p>
          <p className={styles.highlight}>(21) 99661-5156</p>
          <p>E-mail Corporativo:</p>
          <p className={styles.highlight}>comercial@grupometalcores.com.br</p>
          <div className={styles.social}>
            <a href="https://www.facebook.com/grupometalcores" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://br.linkedin.com/company/grupo-metal-cores-aluminio" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Grupo Metal Cores. Todos os direitos reservados. Sistemas de Engenharia Avançada.</p>
        <p className={styles.legal}>Razão Social: YLC METAL CORES LTDA - EPP</p>
      </div>
    </footer>
  );
}
