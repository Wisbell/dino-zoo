# Jurassic Park Animal and Personnel Management System

## Description

Software for keeping track of personnel and dinosaurs at Jurassic Park.\
Built with
* Nest JS (Server) - https://nestjs.com/
* Pug JS (Templating) - https://pugjs.org/
* TypeORM (Database ORM) - https://typeorm.io/#/
* Bulma (CSS Framework) - https://bulma.io/
* Postgres (SQL DB) - https://www.postgresql.org/

## Setup

```bash
$ npm install
```

## Running the app
NOTE: Requires running of a postgres server.  Modify config in /config as needed. Migrations will be applied upon successful server start

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Updating SASS/CSS
Modify _sass folder files with changes and run
```bash
# single update
$ npm run sass:build

# watch mode
$ npm run sass:watch
```

## TODO
- Add tests for services/controllers/maybe front end as well

- Refactor create/edit forms into one pug file

- Add image link validation in create/edit form

- TODO: When deleting check if data exists first otherwise error will occur

- TODO: Move setting up of new animal dtos functionality into dto function itself
          See animal service, ie: parseId functions