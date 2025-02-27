# Build Stage
FROM node:20 AS build

# Set environment to maximize RAM usage
ENV NODE_OPTIONS="--max-old-space-size=8192"

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

COPY . ./
RUN npm run build

# Final Stage (Smaller Production Image)
FROM node:20-slim AS runtime

WORKDIR /app
COPY --from=build /app/dist ./dist
COPY package.json package-lock.json ./

RUN npm install --omit=dev

CMD ["node", "dist/bundle.js"]
