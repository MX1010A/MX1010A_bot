const TelegramBot = require('node-telegram-bot-api');
const token = "5439079424:AAE5Z6V2xVCuZm_RXlZUP7eNpzP5ScyVqDs"; //process.env.BOT_TOKEN;
const bot = new TelegramBot(token, {polling: true});

const default_phrases = ["ого", "лааадно", "найс", "справедливо", "туда его", "реально", "хвазхавхзвхза", "норм", "мдааа",
    "хуй", "))", "такое", "хвхазвх", "челты", "дефолт", "понял", "азвахахвхах", "))0)", "харош", ")", "бля", "кринж",
    "лааааадно", "похуй"];
const dead_phrases = ["после такого хочется сдохнуть", "я умер 2 года назад, кст", "тильт",
    "скучаю по временам, когда меня еще не было", "нахуя я вообще живу, не понимаю", "когда я уже умру блять"];
const answer_phrases = ["хз", "¯\\_(ツ)_/¯", "ебу", "не шарю", "именно", "нет", "да"];
const rus_phrases = ["я рот ебал этой русни", "да когда уже эта русня вымрет нахуй", "бля, русские назад",
    "вот бы ракету в эту русню пустить"];
const stickers = ["CAACAgEAAxkBAAIDHWLX-hqPVw8oizd6OzNJHEJemgECAAKVAQACKYKQR7G_efofu-dPKQQ",
    "CAACAgQAAxkBAAIDkmLYAAEMCIMdKBvDUVgcXolN095V6QACXAADFXbpB2ZqgU0Oc4fvKQQ",
    "CAACAgIAAxkBAAIDk2LYAAFCkBz315sR9XR_leDsL5IZXwACCRgAAkfIIUkvxYh7vHYguikE",
    "CAACAgEAAxkBAAIDlGLYAAFmsRwVjiL1lU86C7iqf12SAgACsQEAAnY3dj-kdqoozr_pcykE",
    "CAACAgQAAxkBAAIDlWLYAAF_td2GDa4qh6EHcKZec0vzIAACqwADFXbpBycjvGCIRQ6QKQQ",
    "CAACAgIAAxkBAAIDmGLYAAG4cEm1HVRZ26ubFsY7r3y78AACPhgAAj_VIEnfd2f-qXtsVSkE",
    "CAACAgIAAxkBAAIDmWLYAAHazmJ-4NNY9K4DzzvNPcHlvQACshgAAi3PIEl_AAEhOOLJDbQpBA",
    "CAACAgIAAxkBAAIDmmLYAAH5xjHPctOkNMMknaQ-Wljl1gACqRYAAlxkuEksfLc4eZOWcCkE",
    "CAACAgIAAxkBAAIDm2LYARteQKAeOc-1hcbKbAcUWu4UAAIBHAAC4shgSHnt7uqlAfDJKQQ",
    "CAACAgIAAxkBAAIDnWLYAUtz6Jid4rxyFwTlntJWaK8CAAJZFQACq0opSy5HaOfkW0A2KQQ",
    "CAACAgIAAxkBAAIDnmLYAZH87OLH8jI1V9e0iFq0oy6sAALbEAACLb8JSiYINZRNWgHTKQQ",
    "CAACAgIAAxkBAAIDn2LYAa8QmVAi6kFvuYHM2tgHDkFXAAJxEgACwgABCEqJgHQO5VVqAAEpBA",
    "CAACAgIAAxkBAAIDoGLYAdtrrG8FxrBjCRm3PEULHRIPAAL3EQACYnP5STHVSE7pilmUKQQ",
    "CAACAgIAAxkBAAIDomLYAgfRnnsLwNI-SKCtH-nlNVb1AAI5AAPhjpgt1pVtE3e4YMApBA"];

let counter = 0;// let >= var

bot.onText(/\/start/, function (msg) {
    bot.sendMessage(msg.chat.id, "привет, я бот Антон.\nя буду отвечать на ваши сообщения вместо Антона Басана)");
});

bot.onText(/\/info/, function (msg) {
    bot.sendMessage(msg.chat.id, "моя задача - отвечать на ваши сообщения вместо Антона Басана.\nтекущая версия бота: 4.2.0");
});

bot.onText(/\/dad/, function (msg) {
    bot.sendMessage(msg.chat.id, "@MX1010A, кому-то потребовался более осмысленный ответ, чем обычно)");
});

/*bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content of the message

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});*/

// Listen for any kind of message. There are different kinds of messages.
bot.on('message', (msg) => {
    if((msg.text === "/start" || msg.text === "/echo" || msg.from.username === 'MX1010A')) return; //!!!
    const chatId = msg.chat.id;
    const replyId = msg.message_id;
    console.log(msg.text);

    if (msg.text.endsWith("?") && random(3) === 1) {
        const rand = random(answer_phrases.length - 1);
        bot.sendMessage(chatId, answer_phrases[rand], {reply_to_message_id: replyId});
    } else if (msg.text.includes("рус") && msg.text !== "рус") {
        const rand = random(rus_phrases.length - 1);
        bot.sendMessage(chatId, rus_phrases[rand], {reply_to_message_id: replyId});
    }

    else if (msg.text.toLowerCase() === "пошел нахуй" || msg.text.toLowerCase() === "иди нахуй") {
        bot.sendMessage(chatId, "своим помахуй", {reply_to_message_id: replyId});
    } else if (msg.text.toLowerCase().endsWith("тебе в рот попал")) {
        bot.sendMessage(chatId, "а я головку откусил и из нее суп сварил", {reply_to_message_id: replyId});
    }

    else if (msg.text.toLowerCase() === "пидора ответ") {
        bot.sendMessage(chatId, "шлюхи аргумент", {reply_to_message_id: replyId});
    } else if (msg.text.toLowerCase().endsWith("пидор обнаружен")) {
        bot.sendMessage(chatId, "пидор засекречен, твой анал не вечен", {reply_to_message_id: replyId});
    } else if (msg.text.toLowerCase() === "твоей мамы здесь нет" || msg.text.toLowerCase() === "твоей мамы тут нет") {
        bot.sendMessage(chatId, "есть зато твоя: берет в ротик у меня)", {reply_to_message_id: replyId});
    }

    else if (random(100) === 1) {
        counter = 0;
        const rand = random(dead_phrases.length - 1);
        bot.sendMessage(chatId, dead_phrases[rand]);
    } else if (random(30) === 1) {
        const rand = random(default_phrases.length - 1);
        bot.sendMessage(chatId, default_phrases[rand], {reply_to_message_id: replyId});
    } else if (random(40) === 1) {
        const rand = random(stickers.length - 1);
        bot.sendSticker(chatId, stickers[rand], {reply_to_message_id: replyId});
    }

    counter++;
});

function random(maxValue) {
    return Math.round(Math.random() * maxValue);
}

