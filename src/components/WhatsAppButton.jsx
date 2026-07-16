'use client';

import React, { useState } from 'react';
import styles from './WhatsAppButton.module.css';

export default function WhatsAppButton({ text = 'Faça seu Orçamento', className = 'btn btn-primary', isMicro = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phone = '5521974467506';
    const textMessage = `Olá, me chamo *${formData.name}* da empresa/projeto *${formData.company}*.\n\nGostaria de solicitar um estudo/orçamento sobre:\n${formData.message}`;
    const encodedText = encodeURIComponent(textMessage);
    window.open(`https://wa.me/${phone}?text=${encodedText}`, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)} 
        className={isMicro ? styles.microLink : className}
      >
        {text}
      </button>

      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3>Solicitação de Orçamento</h3>
              <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>&times;</button>
            </div>
            
            <p className={styles.modalSubtitle}>Preencha seus dados básicos para que nossa equipe de engenharia analise sua demanda.</p>
            
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label>Nome Completo</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="Ex: João Silva"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label>Empresa / Projeto</label>
                <input 
                  type="text" 
                  name="company" 
                  required 
                  value={formData.company} 
                  onChange={handleChange} 
                  placeholder="Ex: Construtora Alpha / Residencial Beta"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label>Descreva sua necessidade</label>
                <textarea 
                  name="message" 
                  required 
                  rows="4" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Ex: Preciso de orçamento para fachada unitizada de um prédio comercial de 10 andares..."
                ></textarea>
              </div>
              
              <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                Enviar para o WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
