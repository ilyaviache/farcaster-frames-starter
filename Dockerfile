# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN npm install -g pnpm husky && pnpm install --prod

# Copy the rest of the application code
COPY . .

# Build the app
RUN pnpm build

# Expose the port
EXPOSE 3000

# Default command for production
CMD ["pnpm", "start"]
