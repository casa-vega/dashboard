# Services Dashboard

This is a nextjs application that allows services to rapidly build and prototype ui/api applications that can be used internally or for customer engagements. The application is built on several ideas:

- Look and Feel like GitHub
- Integrate easily in customer environments
- Provide customers a framework for extending GitHub with the API and/or UI
- Opinioned auth, logging, and user management
- Integrate with Issue Ops 

We're currently working with Salesforce to build out a shim that enables users that do not have settings privledges on the repo to still control some parts of the repo via self service if they've been given that permission.

## What's included?

- Primer based to support GitHub look/feel
- Octokit.js
- Chart.js
- Sharp (image optimization)
- NextAuth.JS (supports too many auth providers to list)
- Prisma/Sqlite
- Pino and middleware logging
- Docker
- ASDF support
- PNPM

## What does it look like?

This is example proof we're doing for salesforce:

<p align="center">
<img src="https://user-images.githubusercontent.com/376532/225733348-a9c0cce6-0cf3-4ac0-be74-e779b5154160.png" width="300">
</p>
<hr>

![Screenshot 2023-03-07 at 11 52 22 AM](https://user-images.githubusercontent.com/376532/223537301-4372f2b1-52c1-44dc-8b1d-a49b3c5f38cc.png)


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting started with development

The project provides an `.env.local` file to demonstrate the required environment variables needed at runtime. In production we will not use a file like this to inject secrets. Those secrets will be injected via docker or a deploy mechanism to the environment. Be careful not to commit any keys here.

### Prisma generate/migration

You will need to tell prisma about the database

```bash
pnpx prisma generate
```

A successful generation will produce the following output:

```bash
.../Library/pnpm/store/v3/tmp/dlx-64174  |   +2 +
.../Library/pnpm/store/v3/tmp/dlx-64174  | Progress: resolved 2, reused 2, downloaded 0, added 2, done
Prisma schema loaded from prisma/schema.prisma

✔ Generated Prisma Client (4.11.0 | library) to ./node_modules/.pnpm/@prisma+client@4.11.0_prisma@4.11.0/node_modules/@prisma/client in 361ms
You can now start using Prisma Client in your code. Reference: https://pris.ly/d/client

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
```

### Prime your `.env.local` file

#### Nextjs settings

```ini
# next settings
NEXTAUTH_URL=http://127.0.0.1:3000/api/auth
NEXTAUTH_SECRET=""
NEXT_TELEMETRY_DISABLED=1
```

Generate a key for `NEXTAUTH_SECRET`

```bash
openssl rand -base64 32
```

#### GitHub Apps (provider and client)

We recommend using two GitHub apps, one with limited access for login, one for client api calls with broad access. The client API may change to something like an enterprise token for borad access purposes. For more details on setting up GitHub Apps please see https://docs.github.com/en/apps

```ini
# github api client
GITHUB_APP_ID=""
GITHUB_PRIVATE_KEY=""
GITHUB_INSTALLATION_ID=""

# github login provider
GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""
```

#### Okta provider

If you need a developer Okta account please see https://www.okta.com/developers

```ini
# okta login provider
OKTA_CLIENT_ID=""
OKTA_CLIENT_SECRET=""
OKTA_ISSUER=""
```

Run the development server:

```bash
pnpm i
pnpm run dev --hostname="127.0.0.1" 
```

Note, the development server is handy, but much slower than a production build and it's not always a `1:1`, somethings may work in development but not production. 

## Starting a production build

```bash
pnpm i
pnpm run build
pnpm run start
```

## Gettings started with Docker

```bash
sudo docker run -d -t -i -e NAMESPACE='staging' \
  -e NEXTAUTH_URL='' \
  -e NEXTAUTH_SECRET='' \
  -e NEXT_TELEMETRY_DISABLED='' \
  -e GITHUB_CLIENT_ID='' \
  -e GITHUB_CLIENT_SECRET='' \
  -e GITHUB_APP_ID='' \ 
  -e GITHUB_PRIVATE_KEY='' \
  -e GITHUB_INSTALLATION_ID='' \
  -e OKTA_CLIENT_ID='' \
  -e OKTA_CLIENT_SECRET='' \
  -e OKTA_ISSUER='' \
  -e SITE_URL='staging.mysite.com' \
  -p 80:80 \
  --name container_name dockerhub_id/image_name
```

## Logging

The following object on every request. We use an ip route to try and capture the client `ip`, however well likely want to use `X-Forwarded-For` to surface the actual `ip` from the proxy which is a TODO.

```json
{
  "time": 1679559736890,
  "level": 30,
  "id": "clfjarq9u0000zbdnsjlt2byl",
  "url": "/hub",
  "client_ip": "127.0.0.1",
  "method": "GET",
  "referrer": "http://127.0.0.1:3000/hub/project",
  "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
  "uid": "98231781-79d9-4882-919ebbfc10dd8614"
}
```
or
```json
{"time":1679559736890,"level":30,"id":"clfjarq9u0000zbdnsjlt2byl","url":"/hub","client_ip":"127.0.0.1","method":"GET","referrer":"http://127.0.0.1:3000/hub/project","ua":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36","uid":"98231781-79d9-4882-919ebbfc10dd8614"}
```


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
