# --- Base image ---
FROM node:18-alpine

# --- Set working directory ---
WORKDIR /app

# --- Copy package files and install dependencies ---
COPY package*.json ./
RUN npm install --production

# --- Copy source code ---
COPY . .

# --- Start the app ---
CMD ["npm", "start"]
