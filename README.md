# Express + TypeScript Template

A simple, ready-to-use Express.js template with TypeScript support and watch mode using Nodemon.

## Features
- Express.js with TypeScript
- Nodemon for automatic server restarts
- Pre-configured `tsconfig.json`
- Easy setup and use

## Installation

### Using CLI (if published as an npm package)
```sh
npx create-ts-express-template my-app
cd my-app
npm install
```

## Usage

### Start in development mode (with watch mode)
```sh
npm run dev
```

### Build and run production
```sh
npm run build
npm start
```

## Project Structure
```
my-app/
├── src/
│   ├── index.ts  # Main Express server file
├── dist/          # Compiled output
├── package.json   # Project metadata & scripts
├── tsconfig.json  # TypeScript configuration
├── nodemon.json   # Nodemon settings
```

## License
MIT

