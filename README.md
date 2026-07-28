# KM Trade Lead Bot

Backend API для прийому заявок із сайту та автоматичної відправки їх у Telegram-групу.

### Функціонал:

- Прийом заявок через REST API
- Валідація даних за допомогою Zod
- Відправка повідомлень у Telegram через Grammy
- JSON API для інтеграції з фронтендом
- Підтримка змінних середовища через dotenv

### Технології:

- Node.js
- TypeScript
- Express
- Grammy
- Zod
- dotenv
- CORS

### Структура проєкту:

```
src/
├── bot/
│   └── tgBot.ts
├── routes/
│   └── leadRoutes.ts
├── schemas/
│   └── leadSchema.ts
├── services/
│   ├── leadService.ts
│   └── telegramService.ts
├── app.ts
└── index.ts
```

### Встановлення

Клонувати репозиторій:

```bash
git clone <repository-url>
```

Перейти у папку:

```bash
cd kmt-lead-bot
```

Встановити залежності:

```bash
npm install
```

Створіть файл `.env`:

```env
PORT=3000
BOT_TOKEN=your_bot_token
GROUP_CHAT_ID=your_group_chat_id
```

### Запуск проєкту 
### Scripts:

```bash
npm run dev # запуск у режимі розробки
npm run build # компіляція TS
npm start # запуск production-збірки
```

### API endpoint
### POST /api/lead

Надсилає нову заявку у Telegram групу.

### Request

```json
{
  "name": "Іван",
  "phone": "+380991112233",
  "cars": 25,
  "region": "Львівська область"
}
```

### Success

```json
{
  "success": true,
  "message": "Lead sent successfully"
}
```

### Validation Error

```json
{
  "success": false,
  "errors": [
    {
      "field": "name",
      "message": "Required"
    }
  ]
}
```

### Server Error

```json
{
  "success": false,
  "message": "Internal server error"
}
```

### Приклад повідомлення у Telegram

```
Нова заявка!

Ім'я: Іван
Телефон: +380991112233
Автопарк: 25
Регіон: Львівська область
```

### License

MIT
