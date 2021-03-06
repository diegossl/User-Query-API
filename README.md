# User Query API

This API is intended to download data from a list of users and save it to the database.

## Technologies used

- [NodeJS](https://nodejs.org/en/)
- [ExpressJS](https://expressjs.com/pt-br/)
- [MySQL](https://www.mysql.com/)
- [Jest](https://jestjs.io/)
- [TypeORM](https://typeorm.io/#/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Axios](https://github.com/axios/axios)

## Setup

To execute the project, it will be necessary to install as dependencies by typing the following command in the terminal:

```bash
npm install
```

Then it is necessary to transpile the application to JavaScript, for this type the following command in the terminal:

For the API to work, you need to have MySQL installed on your machine. Then configure the credentials for **username**, **password** and **database** that are in the file **index.ts** in the folder **database** and create a database with the name of your choice.


After configuration, the application can be built:

```bash
npm run build
```

Finally, to start using, type the following command:

```bash
npm start
```

## Tests

### Jest

The API can be tested using the following command:

```bash
npm test
```

### Postman

Api route collection link:

[https://www.getpostman.com/collections/52d3c83303d2b8535257](https://www.getpostman.com/collections/52d3c83303d2b8535257)

## Use

The API is ready to be used on the routes:

**[GET] Baixar Dados** [http://localhost:3000/list](http://localhost:3000/list)

**[POST] Salvar Dados** [http://localhost:3000/register](http://localhost:3000/register)



