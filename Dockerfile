FROM node:16-alpine
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /usr/app
COPY . /usr/app
RUN npm install
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs


EXPOSE 80
ENV PORT 80
RUN npm run build
USER nextjs
CMD ["npm", "run", "start"]
