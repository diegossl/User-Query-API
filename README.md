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

For the API to work, you need to have MySQL installed on your machine. Then, create a database, configure the **username**, **password** and **database** credentials that are in the **index.ts** file in the **database** folder and create a database with the name of your choice.

After configuration, the application can be built:

```bash
npm run build
```

Finally, to start using, type the following command:

```bash
npm start
```

## Use

The API is ready to be used on the routes:

**GET** [http://localhost:3000/list](http://localhost:3000/list)
**POST** [http://localhost:3000/register](http://localhost:3000/register)