const { Configuration, OpenAIApi } = require('openai');
const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');
const { config } = require('dotenv');

config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('Client is ready!');
});

client.on('message', async (msg) => {
  const text = msg.body.toLowerCase() || '';
  if(text){
    if (text === 'ping') {
      msg.reply('pong. Tanya sesuatu untuk dijawab!');
    } else if(text.includes('!generate image')) {
      msg.reply('Sedang memproses...');
      const response = await openai.createImage({
        prompt: text.replace('generate image', ''),
        n: 1,
        size: '1024x1024',
      });
      msg.reply(response.data.data[0].url);
    } else{
      msg.reply('Sedang memproses...');
      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: text,
        max_tokens: 3000,
        temperature: 0.3,
        top_p: 1.0,
        presence_penalty: 0.0,
        frequency_penalty: 0.0,
      });
      msg.reply(response.data.choices[0].text);
    }
  }
});

client.initialize();