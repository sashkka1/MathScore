const TelegramBot = require('node-telegram-bot-api');

// Вставьте сюда токен, полученный от BotFather
const token = '7821008520:AAHFgDRwM1ZEgzTdeQFyg1QSMTPmP0dnfmQ';

const api_id = '25640470';
const api_hash = '584d94e2c1bd6eff762eb2fe0c4ed9ee';
// Создаем экземпляр бота

// Ваш токен бота Telegram
const TELEGRAM_BOT_TOKEN = token;
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}`;

const bot = new TelegramBot(token, { polling: true });

// Обработчик для текстовых сообщений
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    if(text === '/start'){
        // Отправляем стикер
        bot.sendSticker(chatId,'https://tlgrm.eu/_/stickers/a01/6b5/a016b558-dd17-33de-8c3e-d7342bf8fab2/192/16.webp');
        const options = {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Привет, порешаем?', // Текст на кнопке
                            web_app: { url: 'https://sashkka1.github.io/MathScore/index.html' } // Ссылка на ваше мини-приложение
                        }
                    ]
                ]
            }
        };
        // Отправляем сообщение с кнопкой
        bot.sendMessage(chatId, 'Нажмите на кнопку, чтобы порешать', options);
    } else{
        // Отвечаем пользователю тем же текстом
        bot.sendMessage(chatId, `Вы сказали: ${text}`);
    }

});

console.log('Бот запущен...');

