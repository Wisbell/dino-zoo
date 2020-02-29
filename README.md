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

## Updating SASS
Modify _sass folder files with changes and run
```bash
# single update
$ npm run sass:build

# watch mode
$ npm run sass:watch
```

## TODO
- Add Personnel CRUD

- Add tests for services/controllers/maybe front end as well

- Refactor create/edit forms into one pug file

- Add nullable type to age/numberOfkills for animal entity

- Add about page with github link

- Add image link validation in create/edit form

