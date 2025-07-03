# Dinner match

## Installation guide (Android)

### General 
Requirements: 
- Docker 
- Installed Android emulator
- Node

1. Copy `.env.example` to `.env` 
2. Fill in the appropriate values.
3. `cd database` then run `npm link` 

### Running the server
1. `cd api` then run `npm link dinner-match-database`
2.  `cd ..` then `make build` 

### Running the app
1. `cd app`
2. then run `npm link dinner-match-database`
3. `npx expo run:android`

## Installation guide (IOS)
...
