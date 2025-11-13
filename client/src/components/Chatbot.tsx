// components/Chatbot.tsx
'use client';

import { useEffect } from 'react';

export default function Chatbot() {
  useEffect(() => {
    // Carrega o script do chatbot apenas no client-side
    const script = document.createElement('script');
    script.type = 'module';
    script.innerHTML = `
      import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"
      Chatbot.init({
        chatflowid: "b14142d1-7dd1-4075-9558-b0e1b4796998",
        apiHost: "https://cloud.flowiseai.com",
        theme: {
            button: {
                backgroundColor: '#C8102E',
                right: 20,
                bottom: 20,
                size: 56,
                dragAndDrop: true,
                iconColor: 'white',
                customIconSrc: '/chatbot-icon.svg', // Crie um ícone personalizado
                autoWindowOpen: {
                    autoOpen: false,
                    openDelay: 5,
                    autoOpenOnMobile: false
                }
            },
            tooltip: {
                showTooltip: true,
                tooltipMessage: 'Precisa de ajuda? 👋',
                tooltipBackgroundColor: '#C8102E',
                tooltipTextColor: 'white',
                tooltipFontSize: 14
            },
            chatWindow: {
                showTitle: true,
                showAgentMessages: true,
                title: 'MB China Assistant',
                titleAvatarSrc: '/logo_mb_china.webp',
                welcomeMessage: 'Olá! Sou o assistente da MB China. Posso ajudar com informações sobre nossa Executive Mission 2026!',
                errorMessage: 'Desculpe, ocorreu um erro. Tente novamente.',
                backgroundColor: '#F5E6D3',
                height: 600,
                width: 380,
                fontSize: 14,
                starterPrompts: [
                    "Quais são as datas da missão?",
                    "Quanto custa investir?",
                    "Quais cidades visitaremos?",
                    "Quem são os líderes da missão?"
                ],
                starterPromptFontSize: 13,
                clearChatOnReload: false,
                botMessage: {
                    backgroundColor: '#ffffff',
                    textColor: '#1f2937',
                    showAvatar: true,
                    avatarSrc: '/logo_mb_china.webp'
                },
                userMessage: {
                    backgroundColor: '#C8102E',
                    textColor: '#ffffff',
                    showAvatar: true,
                    avatarSrc: '/user-icon.svg'
                },
                textInput: {
                    placeholder: 'Digite sua pergunta sobre a missão...',
                    backgroundColor: '#ffffff',
                    textColor: '#1f2937',
                    sendButtonColor: '#C8102E',
                    maxChars: 200,
                    maxCharsWarningMessage: 'Máximo de 200 caracteres permitido.',
                    autoFocus: true
                },
                feedback: {
                    color: '#C8102E'
                },
                footer: {
                    textColor: '#6b7280',
                    text: 'Powered by',
                    company: 'MB China',
                    companyLink: '#hero'
                }
            }
        }
    })
    `;
    
    document.body.appendChild(script);

    return () => {
      // Remove o script quando o componente for desmontado
      document.body.removeChild(script);
    };
  }, []);

  return null;
}