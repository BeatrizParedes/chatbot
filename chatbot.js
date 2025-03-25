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

    if (msg.body.match(/(menu|Menu|dia|tarde|noite|oi|Oi|Olá|olá|ola|Ola|hello|Hello|hi|Hi)/i) && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000); 
        const contact = await msg.getContact(); 
        const name = contact.pushname; 
        await client.sendMessage(msg.from,'Olá! '+ name.split(" ")[0] + ' Meu nome é Riso e eu sou o assistente virtual da GGP. Como posso ajudá-lo hoje?\n- Licença TRE\n- Férias\n- Licença Saúde\n- E-mail Institucional e SEI\n- Declaração de Vínculo\n- Certidão de Tempo de Serviço\n- Licença Prêmio\n- Recadastramento\n- Estacionamento\n- Frequência\n- Abono de Ponto\n- Suspensão de Contrato'); //Primeira mensagem de texto
    }
    else if (msg.body.match(/(empetur|missao|localização|localizacao|LOCALIZAÇAO|LOCALIZAÇÃO)/i) && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'A EMPETUR (Empresa de Turismo de Pernambuco) é o órgão responsável pela promoção e desenvolvimento do turismo no Estado de Pernambuco.');
            
        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'A missão da EMPETUR é fomentar o turismo sustentável no estado, promovendo Pernambuco como destino turístico e incentivando o desenvolvimento econômico do setor. Seus valores incluem transparência, inovação, sustentabilidade e compromisso com o turismo local.');

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'A sede da EMPETUR está localizada no Centro de Convenções de Pernambuco, na cidade de Olinda, PE.');
    }
    else if (msg.body.match(/(TRE|tre)/i) && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Como solicitar licença TRE:');

        await delay(3000);
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'A solicitação deve ser feita pelo SEI, preenchendo o Requerimento Geral com os dias desejados e anexando o documento comprobatório. Enviar para EMPETUR-SAP com a ciência do chefe imediato.');
    }
    else if (msg.body.match(/(ferias|férias|Férias|Ferias|FERIAS|FÉRIAS)/i) && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Como programar as férias anuais:');
        
        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'A programação é feita pelo Mapa de Férias, disponibilizado em outubro do ano anterior. Importante: a Lei 13.467/2017 veda o início das férias nos dois dias anteriores a um feriado ou repouso semanal remunerado.');

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Como alterar o período de férias:');
        
        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Solicitar via SEI com 60 dias de antecedência, justificando a alteração e indicando a nova data. Necessário encaminhar para EMPETUR-SAP com ciência do chefe imediato.');
       
        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Como suspender férias:');
        
        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Enviar despacho pelo SEI com justificativa e nova data para EMPETUR-SAP, incluindo a ciência do chefe imediato.');
    }
    else if (msg.body.match(/(saúde|saude|Saúde|Saude|SAÚDE|SAUDE)/i) && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Como solicitar licença saúde:');

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Enviar despacho pelo SEI, solicitando os dias de afastamento e anexando o documento comprobatório. Enviar para EMPETUR-SAP com ciência do chefe imediato.');
    }
    else if (msg.body.match(/(e-mail|institucional|email|E-mail|E-MAIL|EMAIL|sei|SEI)/i) && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Como obter acesso ao e-mail institucional e SEI:');

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'O acesso é criado automaticamente pelo Setor de Informática após a nomeação do servidor.');
    }  
    else if (msg.body.match(/(dúvida|duvida|DÚVIDA|ajuda|atendente)/i) && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Se você tiver outras dúvidas ou precisar de mais informações, por favor, compareça ao setor de Recursos Humanos da EMPETUR ou entre em contato pelo telefone (81) 3182-8077.');
    }
    else if (msg.body.match(/(vinculo|vínculo)/i) && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Como solicitar a declaração de vínculo:');

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Solicitar pelo SEI, preenchendo o Requerimento Geral com justificativa e dados pessoais (nome completo, CPF, matrícula, e-mail e celular). Enviar para EMPETUR-SCP. Retorno em até 5 dias úteis via SEI ou e-mail.');
    }
    else if (msg.body.match(/(tempo|certidão|certidao|CERTIDAO|CERTIDÃO)/i) && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Como solicitar a certidão de tempo de serviço:');

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, '\n*Para servidores:* Enviar requerimento via SEI, informando justificativa e dados pessoais, anexando documentos como contracheque e portaria de nomeação/exoneração.\n*Para ex-servidores:* Solicitar via e-mail (spc@empetur.pe.gov.be), informando os mesmos dados e anexos necessários.\n*Entrega:* Via SEI ou e-mail em até 5 dias úteis.');
    }
    else if (msg.body.match(/(premio|prêmio|Premio|Prêmio|PREMIO|PRÊMIO|premium|Premium|PREMIUM)/i) && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Quem pode solicitar a licença prêmio:');

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Empregados públicos que completaram 10 ou 20 anos de atividade até 2020, com direito a 90 ou 180 dias, respectivamente, em períodos de 30 dias.');

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Como solicitar:');

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Enviar requerimento via SEI com 60 dias de antecedência, incluindo anuência do chefe imediato e encaminhamento para EMPETUR-SCP.');
    }
    else if (msg.body.match(/(recadastramento|Recadastramento|RECADASTRAMENTO)/i) && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Como realizar o recadastramento GGP:');

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Anualmente, enviar pelo SEI cópia atualizada do RG, CNH e comprovante de residência para atualização da pasta funcional.');

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Como realizar o recadastramento Bradesco:');

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Comparecer a uma agência Bradesco no mês do aniversário com RG, CTPS, comprovante da Receita Federal, comprovante de endereço e quitação eleitoral. O não comparecimento pode bloquear o salário.');
    }
    else if (msg.body.match(/(estacionamento|Estacionamento|ESTACIONAMENTO)/i) && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Como ter acesso ao estacionamento da EMPETUR:');

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Após a nomeação, a Diretoria de Equipamentos fornecerá o cartão de acesso ao estacionamento da empresa.');

    }
    else if (msg.body.match(/(frequencia|frequência|Frequencia|Frequência|FREQUENCIA|FREQUÊNCIA)/i) && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Como funciona o controle de frequência:');

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Existem dois tipos: frequência no relógio de ponto para servidores sem nível superior e sem gratificação, e frequência por folha de ponto para os demais. A folha deve ser entregue ao departamento pessoal até o 5º dia útil do mês subsequente.');
    }
    else if (msg.body.match(/(PONTO|ponto|Ponto)/i) && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Como solicitar abono de ponto:');

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Solicitar via SEI, preenchendo o Requerimento Geral com justificativa e documento comprobatório. Deve incluir a autorização do chefe imediato antes de enviar para EMPETUR-SAP.');
    }
    else if (msg.body.match(/(obrigada|obrigado|thanks|thank you|grato|grata|gratidão|Obrigada|Obrigado|Obrigado!|Obrigada!|Gracias|gracias)/i) && msg.from.endsWith('@c.us')){
        const chat = await msg.getChat();

        await delay (3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Fico feliz em ter ajudado. Se tiver qualquer outra dúvida é só falar! 😉');
    } 
    else if (msg.body.match(/(suspensão|suspensao|contrato)/i) && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Quem pode solicitar suspensão de contrato:');

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Empregados públicos da EMPETUR podem solicitar via SEI com antecedência de 45 dias, preenchendo o Requerimento Geral e obtendo anuência do chefe imediato.');
    }
    else if (msg.body.match(/(telefone|contato|falar|fone)/i) && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Telefone do Recursos Humanos: (81) 91828077');
    }
    else{
        const chat = await msg.getChat();

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000); 
        const contact = await msg.getContact(); 
        const name = contact.pushname; 
        await client.sendMessage(msg.from,'Desculpe! '+ name.split(" ")[0] + ' Não consigo responder sua pergunta mas você pode tirar sua dúvida no setor de Recursos Humanos da EMPETUR. ');
    }
});