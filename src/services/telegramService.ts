import { bot } from "../bot/tgBot";
import { Lead } from "../schemas/leadSchema";

export const sendLead = async (lead: Lead) => {
  const message = `
НОВА ЗАЯВКА!

Ім'я: ${lead.name}
Телефон: ${lead.phone}
Автопарк: ${lead.cars}
Регіон: ${lead.region}
`;

  await bot.api.sendMessage(process.env.GROUP_CHAT_ID!, message);
};
