<img width="2659" height="984" alt="capa riso" src="https://github.com/user-attachments/assets/d906e07c-bdf2-46dc-97ed-7c5739cbafcb" />

# 🤖 Assistente Virtual da GGP – WhatsApp Bot  

Este projeto implementa um **bot de atendimento automático no WhatsApp** para a **EMPETUR (Empresa de Turismo de Pernambuco)**.  
O assistente, chamado **Riso**, foi desenvolvido com **Node.js** e a biblioteca [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js).  

O objetivo é **automatizar o atendimento** de servidores, fornecendo informações sobre licenças, benefícios, férias, auxílios, cursos e outros serviços de RH.  

---

## 🚀 Funcionalidades  

- 📲 **Atendimento automatizado via WhatsApp**  
- 👋 **Saudação personalizada** com o nome do usuário  
- 🧾 Responde automaticamente dúvidas frequentes:  
  - Licença TRE  
  - Férias (programação, alteração e suspensão)  
  - Licença Saúde  
  - Licença Maternidade e Paternidade  
  - Declarações e Certidões  
  - Contracheque, Matrícula e Informe de Rendimento  
  - Recadastramento  
  - Estacionamento  
  - Abono de Ponto  
  - Crachá  
  - Auxílios (alimentação, transporte, creche, PNE, funeral, saúde, etc.)  
  - Cursos (EGAPE, ECI, ESAFAZ)  
- 📍 Informações sobre a **missão e localização da EMPETUR**  
- 📞 Acesso a **contatos úteis** de setores institucionais  
- 🙋 Resposta padrão quando a dúvida não está no escopo do bot  

---

## 🛠️ Tecnologias Utilizadas  

- [Node.js](https://nodejs.org/) – Ambiente de execução JavaScript  
- [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js) – Integração com WhatsApp Web  
- [qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal) – Exibição do QR Code para autenticação  

---

## 📂 Estrutura do Projeto  

```bash
├── index.js        # Arquivo principal do bot  
├── package.json    # Dependências do projeto  
├── /node_modules   # Bibliotecas instaladas automaticamente

```

---

## ⚙️ Como Executar o Projeto  

1. **Clone este repositório**  
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. **Instale as dependências**  
   ```bash
   npm install
   ```

3. **Inicie o bot**  
   ```bash
   node index.js
   ```

4. **Escaneie o QR Code** exibido no terminal com o aplicativo WhatsApp.  
   Após a leitura, o bot será conectado à sua conta.  

---

## 📌 Como o Bot Funciona  

1. O bot escuta todas as mensagens recebidas.  
2. Ele identifica **palavras-chave** (exemplo: "férias", "TRE", "maternidade").  
3. Dependendo da palavra, envia uma resposta pré-definida.  
4. Se não encontrar correspondência, envia uma **resposta padrão** com sugestão de contato com o RH.  
5. Para tornar a conversa mais natural, o bot **simula digitação** antes de responder.  

---

## 📌 Melhorias Futuras  

- 🔒 Autenticação persistente para não precisar escanear o QR Code sempre.  
- 📊 Relatórios de atendimento.  
- 🌐 Integração com outros canais (Telegram, Webchat).  
- 📂 Banco de dados para registrar interações.  
- 🎛️ Uso de **botões interativos e menus clicáveis** no WhatsApp.  

---

## 👨‍💻 Autor  

Desenvolvido por **Beatriz Paredes** – Cientista dedicada e entusiasta de tecnologia.  

---


