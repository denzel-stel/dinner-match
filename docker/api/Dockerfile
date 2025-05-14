FROM node:24

WORKDIR /dinner_match/

# copy entire project
COPY . . 
# change directory to ./api

WORKDIR /dinner_match/api

RUN npm install
RUN npx drizzle-kit push
EXPOSE 3000

CMD ["npm", "run", "dev"]