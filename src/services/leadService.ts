import { Lead } from "../schemas/leadSchema";
import { sendLead } from "./telegramService";

export const createLead = async (lead: Lead) => {
  await sendLead(lead);
};
