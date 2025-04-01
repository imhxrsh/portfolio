# Stage 1: Build
FROM node:18-alpine AS builder

# Install bun
RUN npm install -g bun

WORKDIR /app

# Copy dependency files
COPY package.json bun.lockb* ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy all files
COPY . .

# Build the application
RUN bun run build

# Stage 2: Production
FROM node:18-alpine AS runner

WORKDIR /app

# Copy built assets and dependencies
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Install bun for production
RUN npm install -g bun

# Environment variables
ENV NODE_ENV production
ENV PORT 3000

# Expose the port
EXPOSE 3000

# Start the application
CMD ["bun", "run", "start"]