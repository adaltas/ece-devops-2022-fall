
# Lab

Implementing DevOps to IT companies is starting from writing a clean and high-quality source code as well as its documentation. The goal of the lab is to learn the proper way of creating an IT project following best practices. 

As an example of programming language, we will use JavaScript with its server-side runtime - [Node.js](https://nodejs.org/en/). It is one of the most popular languages for developing various types of applications, and it's very easy to get started with.

> **Note.** You are not obliged to use JavaScript for the lab, you are allowed to repeat similar steps using any other programming language like Python, Java, C++, or up to your choice, but the realization of these steps will be different for the specific runtime.

## Objectives

1. Start a project
2. Initialize a Node.js package
3. Create a Node.js script
4. Create a web application using the Express package
5. Create a `CHANGELOG.md` file
6. Describe the project in a `README.md` file

As result, you will achieve creation a documented project on Node.js of a simple web server displaying a "Hello world!" message on a home page.

## Before starting

1. Install an **IDE or a text editor**, for example, [Atom](https://atom.io/) or [VS Code](https://code.visualstudio.com/).
2. Install **Git**, use for installation:
  - Windows: https://gitforwindows.org/
  - Linux: https://git-scm.com/download/linux
  - macOS: https://git-scm.com/download/mac   
3. Install **Node.js**: https://nodejs.org/
4. Open a command-line interface:
  - macOS or Linux: use **Terminal**
  - Windows: use **Git Bash** (should be installed when installing Git). **Note!** Don't use default *CMD.exe*, because it has different commands from a command line of the Linux OS, which is used in most IT environments.

## 1. Start a project

1. Using **CLI bash commands** in your terminal (Terminal or Git Bash) navigate to the directory where you will store your project folder.

[Learn basic CLI bash commands](https://www.educative.io/blog/bash-shell-command-cheat-sheet)

Example:

```bash 
cd ~/path/to/your-root-project-directory
```

2. Choose an appropriate name for your project by following the [name attributions](./index.md#naming).

> **Note!** Never put spaces (` `) ether in folder names either in file names. Otherwise, you will always have to use escape characters when navigating to them.

Use the "kebab-case" naming convention by separating words with dashes (`-`) and create a directory:

```bash
mkdir myschool-devops-myproject
```

Then navigate to this directory:

```bash
cd myschool-devops-myproject
```

3. Initialize a [Git repository](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)

```bash
git init
```

## 2. Initialize a Node.js package

1. Initialize a Node.js package running this command:

```bash
npm init -y
```
This will create an initial `package.json` file with the package (Node.js project) description. Later, you can manually modify the content respecting the [JSON format](https://en.wikipedia.org/wiki/JSON). For example, these values:
  - `author`
  - `description`

[Read more about Node.js packages and modules](https://docs.npmjs.com/about-packages-and-modules)

[Read more about `package.json` file](https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/)

2. Run the NPM script:

```bash
npm run test
# or
npm test
```

It will run the bash script `echo \"Error: no test specified\" && exit 1` defined in the `package.json` file, which outputs the string `Error: no test specified` to stdout.

## 3. Create a Node.js script 

Now, we start using a text editor or IDE (Atom, VS Code, WebStorm, or up to your choice). 

1. Open a project folder in your editor.

You also can use bash commands for opening it. Being under the root of the project directory, run one of the commands:

```bash
# For Atom
atom .

# For VS Code
code .
```

2. Create a file `index.js` with the following content:

```js
str = "Hello Node.js!"
console.log(str)
```

3. Run the Node.js script in the terminal:

```bash
node index.js
```

It will print the message `Hello Node.js!`.

4. Define this command as an NPM script. Modify in the `package.json` file like this:

```json
...
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },
...
```

5. Run the NPM script with the command:

```bash
npm run start
# or
npm start
```

It will do the same as in step 2.

## 4. Create a web application using Express package

1. Install the [Express](https://www.npmjs.com/package/express) package:

```bash
npm install express
```

It will install the package files and their dependencies sourced on GitHub to you project directory inside `node_modules` folder.

Also, this command will add a dependency to your `package.json` like:

```json
...
"dependencies": {
    "express": "^4.17.1"
  }
...  
``` 

It is a Node.js (actually NPM) "feature" to let developers install all the necessary packages for the current project using just one single command, instead of installing each package repeating such a command like `npm install PACKAGE_NAME`. You can experiment with it by removing the entire `node_modules` folder and running the `npm install` command.

2. Modify the `index.js` file with the following content:

```js
const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello world!')
})

module.exports = app.listen(port, (err) => {
  if (err) throw err
  console.log("Server listening the port " + port)
})
```

3. Run the NPM `start` script like in the previous step.

## 5. Create a `CHANGELOG.md` file

`CHANGELOG.md` is a file that describes the evolution of the project. All notable changes will be documented in this file. 

[Read more about CHANGELOG](https://keepachangelog.com/en/1.0.0/)

1. Create the `CHANGELOG.md` file under the root of your project with content like:

```md
# Changelog

## Unreleased

### Added

- Create an HTTP web server using Express
- Initialize a project
```

Since now, when working on the project you will be constantly updating it. 

## 6. Describe the project in the `README.md` file

You may take inspiration for what to write in a `README.md` file from any [Adaltas projects on GitHub](https://github.com/adaltas/), where the best practices for writing such a file are followed.

Also, you can refer to [this documentation](https://www.makeareadme.com/) to learn more.

1. Create a `README.md` file and describe the project with information such as:
  
- Short description
- List of functionalities
- Installation instructions
- Usage instructions
- Author information

## Bonus tasks

1. Learn and try the [common Bash commands](https://www.educative.io/blog/bash-shell-command-cheat-sheet)

2. Learn to use Vim (run `vimtutor` in the terminal to read the tutorial)
