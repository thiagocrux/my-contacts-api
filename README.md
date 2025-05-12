# MyContacts (API)

API of the MyContacts, a contact agenda app.

## Technologies

These are some of the tecnologies used in this project:

- `commitlint`: A tool that checks your commits and ensures consistency in version control.
- `eslint`: A linting tool for JavaScript/TypeScript code.
- `express`: A Node.js minimalist framework.
- `express-async-errors`: A package that automatically handle errors in asyncronous Express route handlers without the need of **_try...catch_** and **_next(error)_** in each one of them.
- `husky`: A tool for adding Git hooks to automate tasks like linting, testing, or commits in JavaScript/Node.js projects.
- `lint-staged`: Runs linters on Git staged files.
- `pg`: Non-blocking PostgreSQL client for Node.js.
- `prettier`: A code formatter.
- `tsx`: A command-line tool and Node.js enhancement that allows you to execute TypeScript files directly without needing to explicitly compile them to JavaScript first.

_For more information about other dependencies, see the `package.json` file._

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
