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
        await client.sendMessage(msg.from,'Olá! '+ name.split(" ")[0] + ' Meu nome é Riso e eu sou o assistente virtual da GGP. Como posso ajudá-lo hoje?\n- Licença TRE\n- Férias\n- Licença Saúde\n- Licença Maternidade\n- E-mail Institucional e SEI\n- Contracheque, Matrícula e Informe de Rendimento\n- Declaração\n- Certidão de Tempo de Serviço\n- Licença Prêmio\n- Recadastramento\n- Estacionamento\n- Frequência\n- Abono de Ponto\n- Suspensão de Contrato\n- Crachá\n- Auxílios (Cesta básica, Vale refeição, Natalina, Transporte, Educação, Creche, PNE, Funeral, Plano de saúde, Seguro de vida)\n- Cursos (EGAPE, ECI, ESAFAZ)'); //Primeira mensagem de texto
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
        await client.sendMessage(msg.from, 'Solicitar via SEI, preenchendo o Requerimento Geral, anexando documento comprobatório e enviando para EMPETUR-SAP, com ciência do chefe imediato.');
    }

    else if (msg.body.match(/(crachá|Cracha|Crachá|CRACHÁ)/i) && msg.from.endsWith('@c.us')) {
            const chat = await msg.getChat();

            await delay(3000); 
            await chat.sendStateTyping(); 
            await delay(3000);
            await client.sendMessage(msg.from, 'Como solicitar o crachá:');

            await delay(3000);
            await chat.sendStateTyping(); 
            await delay(3000);
            await client.sendMessage(msg.from, 'Primeiro: entregue pela GGP após a nomeação.\nSegunda via: via SEI, requerimento geral com justificativa, enviado para EMPETUR-SBS, com ciência do chefe imediato.');
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
        await client.sendMessage(msg.from, 'Programação: via Mapa de Férias (disponibilizado em outubro do ano anterior). Proibido iniciar 2 dias antes de feriado ou repouso semanal.');

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Como alterar o período de férias:');
        
        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Alteração: via SEI, despacho com 60 dias de antecedência, justificativa e nova data.');
       
        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Como suspender férias:');
        
        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Suspensão: via SEI, despacho com justificativa e nova data.');
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
        await client.sendMessage(msg.from, 'Via SEI, com requerimento geral, anexando documento comprobatório e enviando para EMPETUR-SAP, com ciência do chefe imediato.\nAté 15 dias: responsabilidade da EMPETUR (salário mantido).\nA partir do 16º dia: convertido em auxílio-doença pelo INSS.');
    }

    else if (msg.body.match(/(maternidade|materno)/i) && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Como solicitar licença maternidade:');

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Via SEI, com requerimento geral, anexando documento comprobatório e enviando para EMPETUR-SAP, com ciência do chefe imediato.\n120 dias de afastamento (pode iniciar até 28 dias antes do parto com atestado médico).\nSalário maternidade pago pelo INSS.');
    
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
    else if (msg.body.match(/(declaração|declaracao)/i) && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Como solicitar a declaração:');

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Solicitar via SEI, preenchendo requerimento geral com: tipo da declaração, justificativa, nome completo, CPF, matrícula, e-mail e celular.\nEnviar para EMPETUR-SCP.\nPrazo: até 5 dias úteis via SEI.');
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
        await client.sendMessage(msg.from, '\nServidor ativo: via SEI, requerimento geral, justificativa, dados pessoais e anexos (contracheque, portarias).\nEx-servidor: via e-mail scp@empetur.pe.gov.br com justificativa, dados pessoais e documentos.\nPrazo: até 5 dias úteis.');
    }
    else if (msg.body.match(/(premio|prêmio|Premio|Prêmio|PREMIO|PRÊMIO|premium|Premium|PREMIUM)/i) && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Quem tem direito:');

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Empregados públicos que completaram 10 anos (90 dias) ou 20 anos (180 dias) de serviço até 2020.');

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Como solicitar:');

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Via SEI, com 60 dias de antecedência, requerimento geral, ciência do chefe imediato e envio para EMPETUR-SCP.\nImportante: só pode iniciar após a portaria assinada pela direção da EMPETUR.');
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
        await client.sendMessage(msg.from, 'Via SEI, no mês do aniversário, anexando RG, CNH, comprovante de residência e demais documentos atualizados. Enviar para EMPETUR-SAP e EMPETUR-SFP. O não envio pode bloquear o salário.');

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Como realizar o recadastramento Bradesco:');

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'presencial, no mês do aniversário, em agência Bradesco, com RG, CTPS, comprovante da Receita Federal, comprovante de endereço e quitação eleitoral.');
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
        await client.sendMessage(msg.from, 'Relógio de ponto: para casos específicos (Portaria 19/2010).\nFrequência física: para comissionados e demais não abrangidos pela portaria. Entregar folha até o 5º dia útil no SAP.\nFrequência mobile: em uso para alguns servidores.');
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
        await client.sendMessage(msg.from, 'Solicitar via SEI, requerimento geral com justificativa, documento comprobatório e autorização do chefe imediato.\nEnviar para EMPETUR-SAP.\nAcompanhamento: deve ser feito pelo servidor.');
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
        await client.sendMessage(msg.from, 'Recursos Humanos EMPETUR – GGP: (81) 3182-8077\nSDT (Treinamento e Atenção ao Servidor): (81) 3182-8234\nPROLAZER (Programa de Lazer do Servidor Público) : (81)3182-8194\nSAP (Setor Administrativo Pessoal): (81) 3182-8077\nSAP (Setor Administrativo Pessoal): (81) 3182-8077\nSOP (Setor de Controle Pessoal): (81) 3182-8077\nSBS (Setor de Benefícios e Segurança): (81) 3182-8077\nSFP (Setor de Folha de Pagamento): (81) 3182-8218\nEGAPE: (81) 3183-8001\nECI: (81) 3183-0965\nESAFAZ: (81) 3183-5992');
    }

        else if (msg.body.match(/(auxílios|auxilios|auxilio|Auxílios|Auxílios|AUXÍLIOS)/i) && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'Cesta básica: fevereiro, julho e novembro.\nVale refeição: crédito mensal via cartão (1% desconto).\nCesta natalina: para efetivos, comissionados e cedidos, com desconto de 1%.\nTransporte: via SEI, comprovantes + cartão VEM.\nEducação: para servidores com filhos até 24 anos (universitários).\nCreche: filhos até 6 anos, 11 meses e 29 dias.\nPNE: filhos com necessidades especiais, mediante laudo.\nFuneral: para efetivos (inclusive parentes 1º grau).\nPlano de saúde / odontológico e seguro de vida: via SEI, com documentos.');
    }

     else if (msg.body.match(/(cursos|Cursos|CURSOS|EGAPE|ECI|ESAFAZ)/i) && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'EGAPE: cursos gratuitos para servidores públicos. Inscrição via SGIC (sgic.pe.gov.br). Site: egape.pe.gov.br\nECI: cursos sobre controle interno. Site: scge.pe.gov.br/escola-de-controle-interno\nESAFAZ: cursos para servidores da SEFAZ. Site: esafaz.sefaz.pe.gov.br');
    }

    else if (msg.body.match(/(contracheque|Contracheque|Contra-cheque|contra-cheque|matrícula|matricula|Matrícula|MATRÍCULA|INFORME|informe|Informe)/i) && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); 
        await chat.sendStateTyping(); 
        await delay(3000);
        await client.sendMessage(msg.from, 'PARA TIRAR IR OU CONTRA CHEQUE ENTRA NESSE SITE:https://www.sistemas.sad.pe.gov.br/contracheque/html/redirecionamento.html');
       
        await delay(1000); 
        await chat.sendStateTyping(); 
        await delay(1000);
        const image = MessageMedia.fromFilePath('./src/img1.jpg');
        await client.sendMessage(msg.from, image);
        await client.sendMessage(msg.from, 'Criar senha → acessar contracheque, matrícula e informe de rendimentos.');

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
