#!/usr/bin/env node
import { execSync } from 'child_process';
import fs from 'fs-extra';
import path from 'path';
import { Command } from 'commander';
import chalk from 'chalk';
import { fileURLToPath } from 'url';

const program = new Command();
program
    .name('create-ts-express')
    .description('CLI to set up a TypeScript + Express project')
    .argument('<project-name>', 'Name of the project')
    .action((projectName) => {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const projectPath = path.join(process.cwd(), projectName);
        console.log(chalk.green(`Creating project at ${projectPath}...`));

        // Copy template files
        fs.copySync(path.join(__dirname, 'template'), projectPath);

        // Install dependencies
        console.log(chalk.blue('Installing dependencies...'));
        execSync(`cd ${projectPath} && npm install`, { stdio: 'inherit' });

        console.log(chalk.green('Project setup complete! 🚀'));
        console.log(chalk.cyan(`cd ${projectName} && npm run dev`));
    });

program.parse(process.argv);
