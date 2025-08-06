# --- Base image ---
FROM node:18-alpine

# --- Set working directory ---
WORKDIR /app

# --- Copy package files and install dependencies ---
COPY package*.json ./
RUN npm install --production

# --- Copy source code ---
COPY . .

# --- Expose port (default 5000, can be overridden by ENV) ---
EXPOSE 5000

# --- Start the app ---
CMD ["npm", "start"]