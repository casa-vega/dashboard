FROM node:18-alpine

RUN npm install -g pnpm

WORKDIR /app

COPY package*.json ./

RUN pnpm install
RUN pnpx prisma migrate dev

ENV NODE_ENV production
ENV PORT 3000

COPY . .

RUN pnpm run build

EXPOSE $PORT

CMD ["pnpm", "run", "start"]
