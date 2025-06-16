FROM node:24-slim

WORKDIR /dinner_match/

# copy entire project
COPY . . 
# change directory to ./api

WORKDIR /dinner_match/api

RUN npm install
# temp fix
WORKDIR /dinner_match/database/src
RUN npx drizzle-kit push
WORKDIR /dinner_match/api

EXPOSE 3000

CMD ["npm", "run", "dev"]