FROM node:18-bullseye-slim as build
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /app
COPY ./package.json ./tsconfig.json ./
ADD src /app/src
RUN yarn install --production
ENV PATH /app/node_modules/.bin:$PATH
RUN yarn build

FROM node:18-bullseye-slim
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /app
COPY --from=build /app ./
ENV PATH /app/node_modules/.bin:$PATH
EXPOSE 3000
CMD ["yarn", "serve"]
