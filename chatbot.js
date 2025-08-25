const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); 
const client = new Client();
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); 

client.on('message', async msg => {

    const chat = await msg.getChat();
    const contact = await msg.getContact();
    const name = contact.pushname ? contact.pushname.split(" ")[0] : "amigo";

    async function typeAndSend(text, typingTime = 1000) {
        await delay(typingTime); 
        await chat.sendStateTyping();
        await delay(typingTime); 
        await client.sendMessage(msg.from, text);
    }

    if (msg.body.match(/(menu|oi|olá|hello|hi)/i) && msg.from.endsWith('@c.us')) {
        await typeAndSend(`Oi, ${name}! 😄  
Eu sou o Riso, assistente virtual da GGP.  
Você pode me perguntar sobre:  
- Licença TRE  
- Férias  
- Licença Saúde  
- Licença Maternidade  
- Licença Paternidade  
- E-mail Institucional e SEI  
- Contracheque, Matrícula e Informe de Rendimento  
- Declaração  
- Certidão de Tempo de Serviço  
- Licença Prêmio  
- Recadastramento  
- Estacionamento  
- Frequência  
- Abono de Ponto  
- Suspensão de Contrato  
- Crachá  
- Auxílios (Cesta básica, Vale refeição, Transporte, Educação, Creche, PNE, Funeral, Plano de saúde, Seguro de vida)  
- Cursos (EGAPE, ECI, ESAFAZ)  

É só me dizer sobre qual assunto você quer mais informações! 😊`);
    }

    else if (msg.body.match(/(empetur|missao|localização|localizacao)/i) && msg.from.endsWith('@c.us')) {
        await typeAndSend(`Ah, entendi! Você quer saber sobre a EMPETUR. 🌴  
Ela é a Empresa de Turismo de Pernambuco, responsável por cuidar do turismo no nosso estado.`);

        await typeAndSend(`Nossa missão é incentivar o turismo de forma sustentável e promover Pernambuco como destino turístico, sempre com transparência e inovação.`);

        await typeAndSend(`A sede da EMPETUR fica no Centro de Convenções de Pernambuco, em Olinda, PE. Se quiser nos visitar, será um prazer recebê-lo! 😃`);
    }

    else if (msg.body.match(/(TRE|tre)/i) && msg.from.endsWith('@c.us')) {
        await typeAndSend(`Ah, entendi! Você quer saber como solicitar a licença TRE.  
Para isso:  
1️⃣ Acesse o SEI e preencha o Requerimento Geral.  
2️⃣ Anexe o documento comprobatório.  
3️⃣ Envie para EMPETUR-SAP com ciência do seu chefe.`);
    }

    else if (msg.body.match(/(crachá|cracha)/i) && msg.from.endsWith('@c.us')) {
        await typeAndSend(`Ah, você quer saber sobre o crachá.  
- Primeira via: entregue automaticamente após a nomeação.  
- Segunda via: solicite via SEI com justificativa, enviado para EMPETUR-SBS, com ciência do seu chefe.`);
    }

    else if (msg.body.match(/(ferias|férias)/i) && msg.from.endsWith('@c.us')) {
        await typeAndSend(`Ah, entendi! Você quer saber sobre férias. ☀️  
- Para programar: use o Mapa de Férias (disponível em outubro do ano anterior) ou peça diretamente à Gerência de Gestão de Pessoas.  
- Atenção: não inicie férias 2 dias antes de feriado ou repouso semanal.`);

        await typeAndSend(`Para alterar o período de férias:  
- Via SEI, com 60 dias de antecedência, justificativa e ciência do chefe.`);

        await typeAndSend(`Para suspender as férias:  
- Também via SEI, informando justificativa, nova data e ciência do chefe.`);
    }

    else if (msg.body.match(/(saúde|saude)/i) && msg.from.endsWith('@c.us')) {
        await typeAndSend(`Ah, entendi! Você quer saber sobre licença saúde.  
- Solicitação via SEI, preenchendo Requerimento Geral e anexando documento comprobatório.  
- Enviar para EMPETUR-SAP com ciência do chefe.  
- Até 15 dias, a EMPETUR paga o salário; após isso, o INSS assume com auxílio-doença.`);
    }

    else if (msg.body.match(/(maternidade|materno)/i) && msg.from.endsWith('@c.us')) {
        await typeAndSend(`Ah, você quer saber sobre licença maternidade.  
- Via SEI, com Requerimento Geral e documento comprobatório, enviado para EMPETUR-SAP com ciência do chefe.  
- Duração: 120 dias (pode iniciar até 28 dias antes do parto com atestado médico).  
- Pagamento pelo INSS.`);
    }

    else if (msg.body.match(/(paternidade|paterno)/i) && msg.from.endsWith('@c.us')) {
        await typeAndSend(`Ah, entendi! Você quer saber sobre licença paternidade.  
- Via SEI, Requerimento Geral e documento comprobatório, enviado para EMPETUR-SAP com ciência do chefe.  
- Duração: 5 dias corridos a partir do nascimento ou adoção da criança.`);
    }

    else if (msg.body.match(/(e-mail|institucional|email|sei)/i) && msg.from.endsWith('@c.us')) {
        await typeAndSend(`Ah, você quer saber sobre o e-mail institucional e SEI.  
O acesso é criado automaticamente pelo Setor de Informática após a sua nomeação. 😊`);
    }

    else if (msg.body.match(/(declaração|declaracao)/i) && msg.from.endsWith('@c.us')) {
        await typeAndSend(`Ah, entendi! Você quer saber como solicitar declaração.  
- Via SEI, preenchendo Requerimento Geral com tipo de declaração, justificativa, nome, CPF, matrícula, e-mail e celular.  
- Enviar para EMPETUR-SCP.  
- Prazo: até 5 dias úteis.`);
    }

    // Resposta padrão se não encontrar correspondência
    else {
        await typeAndSend(`Ah, entendi! 😅  
Desculpe, ${name}, não consegui encontrar uma resposta para sua pergunta.  
Mas você pode entrar em contato com o setor de Recursos Humanos da EMPETUR para mais informações.`);
    }
});
