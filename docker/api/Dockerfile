FROM node:24-slim

WORKDIR /dinner_match/

# copy entire project to the container
COPY . . 

# change directory to ./api
WORKDIR /dinner_match/api

RUN npm install
# temp fix
WORKDIR /dinner_match/database
# push current schema to database
RUN npx drizzle-kit push
# return to api directory
WORKDIR /dinner_match/api

EXPOSE 3000
# return to api directory
WORKDIR /dinner_match
# start the API server
CMD ["npm", "run", "dev-api"]