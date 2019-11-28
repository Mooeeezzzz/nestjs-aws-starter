# Nest application example

This example demonstrates how to setup a [Nest](https://github.com/nestjs/nest) application.

## Use Cases

- Setup & deploy a [Nest Application starter](https://github.com/nestjs/typescript-starter)

## Running the app locally

```bash
npm start
```

Which should result in:

```bash
$ sls offline start
Serverless: Compiling with Typescript...
Serverless: Using local tsconfig.json
Serverless: Typescript compiled.
Serverless: Watching typescript files...
Serverless: Starting Offline: dev/us-east-1.

Serverless: Routes for main:
Serverless: ANY /{proxy*}

Serverless: Offline listening on http://localhost:3000
```

Then browse http://localhost:3000/

## deploy

```bash
sls deploy
```
