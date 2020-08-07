# POC DB



### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- One instance of [PostgreSQL](https://www.postgresql.org/)

**Clone the project and access the folder**

```bash
$ git clone https://github.com/ARTHURPC03/pocDB.git && cd pocDB
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Make a copy of '.env.example' to '.env'
# and set with YOUR environment variables.
# The aws variables do not need to be filled for dev environment
$ cp .env.example .env

# Once the services are running, run the migrations
$ yarn knex:migrate

# To finish, run the api service
$ yarn start

# Well done, project is started!
```

