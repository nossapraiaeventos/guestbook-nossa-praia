# Guestbook Digital - Nossa Praia Eventos

Esta é a primeira versão do microsite para Guestbook Digital.

## O que já tem

- Página inicial bonita
- Campo de nome
- Campo de mensagem
- Upload de foto, áudio ou vídeo
- Autorização de envio
- Botão para WhatsApp
- Layout responsivo para celular

## Importante

Nesta primeira versão, o formulário ainda não salva os dados em banco.
Ele está preparado para receber integração com:

- Supabase
- Firebase
- Airtable
- Backend próprio
- Make/Zapier

## Como testar

1. Abra o arquivo `index.html` no navegador.
2. Preencha o formulário.
3. Envie.
4. O resultado aparece no console do navegador.

## Próximo passo recomendado

Ligar essa página ao Supabase:

- Criar uma tabela `guestbook_messages`
- Criar um bucket `guestbook-media`
- Enviar arquivos para o Storage
- Salvar nome, mensagem, tipo de arquivo e link do arquivo no banco

## WhatsApp

O número configurado está no arquivo `script.js`:

const whatsappNumber = "5521993677487";

Troque se precisar.
