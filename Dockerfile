# Використовуємо базовий образ Node.js
FROM node:16

# Створюємо робочу директорію всередині контейнера
WORKDIR /app

# Копіюємо файли package.json і package-lock.json
COPY package*.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо весь код в контейнер
COPY . .

# Відкриваємо порт, який використовує ваш додаток
EXPOSE 3000

# Запускаємо додаток
CMD ["npm", "start"]
