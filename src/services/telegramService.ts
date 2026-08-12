import { bot } from "../bot/tgBot";
import { Lead } from "../schemas/leadSchema";

const chatId = process.env.GROUP_CHAT_ID!;

export const sendLead = async (lead: Lead) => {
  const message = `
🔔 <b>НОВА ЗАЯВКА!</b>

<b>Ім'я:</b> ${lead.name}
<b>Телефон:</b> ${lead.phone}
<b>Автопарк:</b> ${lead.cars}
<b>Регіон:</b> ${lead.region}
<b>Контекст заявки:</b> ${lead.context ?? "Не вказано"}
`;

  await bot.api.sendMessage(chatId, message, {
    parse_mode: "HTML",
  });
};
