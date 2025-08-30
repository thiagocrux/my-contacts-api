# MyContacts (API)

API of the MyContacts, a contact agenda app.

## Technologies

These are some of the tecnologies used in this project:

- `commitlint`: A tool that checks your commits and ensures consistency in version control.
- `eslint`: A linting tool for JavaScript/TypeScript code.
- `express-async-errors`: A package that automatically handles errors in asynchronous Express route handlers without the need of **_try...catch_** and **_next(error)_** in each one of them.
- `express`: A Node.js minimalist framework.
- `husky`: A tool for adding Git hooks to automate tasks like linting, testing, or commits in JavaScript/Node.js projects.
- `lint-staged`: Runs linters on Git staged files.
- `node`: JavaScript runtime built on Chrome's V8 engine, used for building fast and scalable server-side applications.
- `pg`: Non-blocking PostgreSQL client for Node.js.
- `prettier`: A code formatter.
- `tsx`: A command-line tool and Node.js enhancement that allows you to execute TypeScript files directly without needing to explicitly compile them to JavaScript first.
- `typescript`: Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

_For more information about other dependencies, see the `package.json` file._

## Prerequisites

Before installing and running this project, make sure you have the following:

- **PostgreSQL**: You need to have PostgreSQL installed to run this project.
  - The recommended way is to use Docker for easy setup and management.
  - Alternatively, you can install PostgreSQL directly on your system using your package manager.
- **Node.js**: Install Node.js from [nodejs.org](https://nodejs.org/).
- **Package Manager**: You need a package manager for Node.js. This tutorial uses [pnpm](https://pnpm.io/), but you can use npm or yarn if you prefer.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/thiagocrux/my-contacts-api.git
```

2. Browse to the project folder:

```bash
cd my-contacts-api
```

3. Install dependencies:

```
pnpm install
```

4. (Docker only) Enter the PostgreSQL container shell:

```sh
docker exec -it <container_name> bash
```

5. Create the database:

```sh
psql -U root -d postgres -c 'CREATE DATABASE my_contacts;'
```

6. Create the extension and tables:

```sh
psql -U root -d my_contacts -c 'CREATE EXTENSION IF NOT EXISTS "uuid-ossp";'
psql -U root -d my_contacts -c 'CREATE TABLE IF NOT EXISTS categories (id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(), name VARCHAR NOT NULL);'
psql -U root -d my_contacts -c 'CREATE TABLE IF NOT EXISTS contacts (id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(), name VARCHAR NOT NULL, email VARCHAR UNIQUE, phone VARCHAR, category_id UUID, FOREIGN KEY(category_id) REFERENCES categories(id));'
```

## Available scripts

This section describes the available scripts in the `package.json` file and their functionalities.

### Development

- #### `dev`

  Starts the server in development mode, enabling faster builds and live-reloading.

  ```bash
  pnpm dev
  ```

### Production

- #### `build`

  Compiles the application for production.

  ```bash
  pnpm build
  ```

- #### `start`

  Start the server for production from the compiled files.

  ```bash
  pnpm start
  ```

### Git hooks

- #### `prepare`

  Automatically configures Git hooks (via husky) before each commit.

  ```bash
  pnpm prepare
  ```

## Related links

- [JStack](https://app.jstack.com.br/)

## License

[MIT](https://choosealicense.com/licenses/mit/)
