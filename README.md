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

- **Docker**: You must have Docker installed and configured on your computer.

  - The recommended way to run PostgreSQL for this project is using Docker, which simplifies setup and management.
  - If you do not have Docker, you will need to install PostgreSQL manually and execute the SQL queries found in `src/database/schema.sql` to set up the database schema.

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

4. Create a `.env` file in the root of the project and set the environment variables as described below:

```bash
# POSTGRES_DATABASE: The name of your PostgreSQL database.
# The value you set here will be used by Docker Compose to create the database when the container starts,
# and it will also be used by the application to connect to the database.
POSTGRES_DATABASE="my_contacts"

# POSTGRES_USER: The username for your PostgreSQL database.
# Update as needed to match your database user.
POSTGRES_USER="root"

# POSTGRES_PASSWORD: The password for your PostgreSQL database.
# Update as needed to match your database password.
POSTGRES_PASSWORD="root"

# POSTGRES_HOST: The host address for your PostgreSQL database.
# Default is 'localhost', change if your database is hosted elsewhere.
POSTGRES_HOST="localhost"

# POSTGRES_HOST_PORT: The port on your host machine mapped to the PostgreSQL container.
# Default PostgreSQL port is 5432, update if you use a different port.
POSTGRES_HOST_PORT=5432

# POSTGRES_CONTAINER_PORT: The port inside the PostgreSQL container.
# Default PostgreSQL port is 5432, update if you use a different port.
POSTGRES_CONTAINER_PORT=5432
```

5. Execute the command below to execute a PostgreSQL container and run the queries inside `src/database/schema.sql`:

```bash
docker compose up -d

```

6. If you need to stop and remove the container, use:

```bash
docker compose down
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
