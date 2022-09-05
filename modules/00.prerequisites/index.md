---
duration: 1-3 hours
---

# Prerequisites for DevOps course

## Software presets

Install the following software on your computer:

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Node.js](https://nodejs.org/en/download/)
- [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
- [Docker](https://docs.docker.com/get-docker/)

## Terminal

- Most useful developer tool
- Any number of customizations
- On Windows: Linux Bash Shell, Powershell, Git Bash (don't use default CMD!)
- On macOS / Linux: native Terminal

## Bash

Learn Bash base commands:

- [Bash base commands](https://www.educative.io/blog/bash-shell-command-cheat-sheet)
- [GameShell: a "game" to teach the Unix shell](https://github.com/phyver/GameShell)

## Vi(m)

- Bash text editor
- Use `:` to enter command mode
  - `:w` to write file
  - `:q` to quit
  - `:q!` to quit without saving
  - `:wq` to write & quit
- Use `/` to search for text
- Use `i` to enter edit mode and `ESC` to exit it
- `vimtutor` is the best tutorial to learn

## Client VS Server

- Two parts of a distributed computing model:
  - Client requests the info and displays it
  - Server processes the request and services the result
- We will do server work + a bit of client-side

## The IP protocol

- Send data from one computer to another over a network (ex: client/server)
- Use of IPV4 addresses (ex: 172.16.254.1), IPV6 also available but not much used
- Data packaged in IP packets with 2 sections
  - Header: IP version, addresses, TTL, ...
  - Data: the packet's content

## The HTTP protocol

- Application protocol for transmitting hypermedia documents (HTML)
- Two types of messages: _requests_ & _responses_
- HTTP message split between _headers_ & _body_
- HTTP response always contains
  - the _protocol_ (HTTP/1.1)
  - a _status code_ (200, 404, ...)
  - a _status text_ (page not found)

## API and REST API

- Application Programming Interface (API)
- In web: REST API
  - Expose a set of HTTP routes
  - Use HTTP verbs (GET / POST / PUT / DELETE)
  - Client connects to communicate
  - Usually communicating in JSON

REST API example: https://petstore.swagger.io/

## SSL/TLS & HTTPS

(Secure Sockets Layer / Transport Layer Security)

- Establish an encrypted link over a network
- Exchange of public & private keys to secure the exchange
  - Server sends SSL certificate + public key
  - Client checks the certificate & answers with an encrypted session key
  - Client & server exchange messages encrypted with the keys to authenticate
- SSL certificate has been certified by a renowned authority
- HTTPS: HTTP secured with SSL/TLS

## SSH - Secure shell

- Cryptographic network protocol to operate network services securely over an unsecured network
- Exchange of public & private keys to secure the exchange
  - Client has the private key
  - Server needs to have the associated public key
  - Client & server exchange messages encrypted with the keys to authenticate

## The SFTP protocol

- Send files over SSH
- ex: deploy a website to a server
- SFTP apps: FileZilla, Cyberduck, WinSCP, ...

## Databases

- RDBMS (basis for SQL): MySQL, PostgreSQL, Hive, Oracle
- NoSQL:
  - Filesystems: posix and object storage
  - Documents store: MongoDB, ElasticSearch
  - Key/value and sorted key/value stores: Redis, LevelDB
  - Column families: HBase, Cassandra
  - Graph DBs: JanusGraph (ex-TitanDB), Neo4J

## Security

- Use a password manager
- Don't wait, do it now. It will serve you well!
- Open source solutions include:
  - [Buttercup](https://buttercup.pw/)
  - [Bitwarden](https://bitwarden.com/)
  - [KeePass](https://keepass.info/)
  - [pass](https://www.passwordstore.org/)

## Editors, IDE

As a developer, the terminal being your partner and the editor is your best friend:

- [Vim](https://www.vim.org/) (Linux, macOS, Windows)  
  Free, one of the most powerful, many will say the most powerful, single file or project-oriented.
- [Atom](https://atom.io/) (Linux, macOS, Windows)  
  Free project-oriented, minimalist, and productive UI (my day to day favorite editor), slow and memory hungry
- [VS Code](https://code.visualstudio.com/) (Linux, macOS, Windows)  
  Free most popular editor, most active community, and plugins development
- [Sublime Text](https://www.sublimetext.com/) (Linux, macOS, Windows)  
  Free, very fast, single file or project-oriented
- [BBedit](https://www.barebones.com/products/bbedit/) (macOS)  
  Free version very powerful, very fast
- [Notepad++](https://notepad-plus-plus.org/) Windows)  
  Free, almost a Windows standard, powerful and fast
- [WebStorm](https://www.jetbrains.com/webstorm/) (Linux, macOS, Windows)
  Licensed, 30 days trial
- ...

## Programmation paradigms

- "A way of programming"
- Common paradigms:
  - **Declarative:** the program describes its desired results without explicitly listing commands or steps.
  - **Imperative:** the control flow is an explicit sequence of commands.
  - **Functional:** the computation proceeds by function calls, no global state
  - **Object-oriented:** everything is an object, functions are methods and are executed with the object's context
  - **Event-driven:** the control flow is triggered and determined by async actions

## Unit Testing

- Method to test individual parts of a program to show that each is correct
- Goals:
  - Source of trust
  - Find problems early in the development phase
  - Facilitate refactoring
  - Simplify integration
  - Documentation
- What is not tested is not supported
- Limited, should always be coupled with other tests
- Platforms: [GitHub Actions](https://github.com/features/actions), Jenkins, Circle CI, GitLab pipelines, ...

## StackOverflow

- Huge data source
- Reactive community
- Any subject
- Lots of answered questions (> 1M !)
- Don’t forget the source code!

## JSON format

- JSON is a subset of JavaScript, JavaScript is built upon JSON
- Data format

Valid JavaScript:

```js
const user = {
  firstname: "Lucky",
  lastname: `Luke`,
  password: "secret",
  age: 42,
  mood: 0.9,
  languages: ["en", ["fr_FR", "fr_CA"], ,],
  level: null,
  friends: undefined,
};
```

Valid JSON:

```json
{
  "firstname": "Lucky",
  "lastname": "Luke",
  "password": "secret",
  "age": 42,
  "mood": 0.9,
  "languages": ["en", ["fr_FR", "fr_CA"]],
  "level": null
}
```

## YAML format

- Human-readable data-serialization format
- Indentations are important!
- _"Yet Another Markup Language"_ (V1.0), then _"YAML Ain't Markup Languauge"_ (V1.1)

The same as above JSON, but YAML:

```yml
firstname: Lucky
lastname: Luke
password: secret
age: 42
mood: 0.9
languages:
  - en
  - - fr_FR
    - fr_CA
level:
```

## Markdown

- Most common format for readme and documentation sites
- Markdown may be extended
  - With your own plugins
  - Almost all implementation support [GitHub Flavored Markdown (GFM)](https://www.markdownguide.org/cheat-sheet/#extended-syntax) or a supset of it
- MDX is an enhanced version of Markdown with React components
