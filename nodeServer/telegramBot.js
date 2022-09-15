const TelegramBot = require("node-telegram-bot-api");
const token = "5680080701:AAEbY_L65Sp8q8OmiKlGEue42Y6WTu1Cvc4";
const bot = new TelegramBot(token, {polling:true});
bot.onText(/질문 (.+)/, (msg, match)=>{
  const chatId = msg.chat.id;
  const resp = "이게 질문입니까?" + match[1];

  bot.sendMessage(chatId, resp);
});
bot.onText(/안녕 (.+)/, (msg, match)=>{
  const chatId = msg.chat.id;
  const resp = "반갑습니다.";

  bot.sendMessage(chatId, resp);
})

bot.on('message', (msg)=>{
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "라고 말했습니다.");
})