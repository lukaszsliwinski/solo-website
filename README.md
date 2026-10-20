# Personal Music Website

## Preview

**[www.lukaszsliwinski.pl](http://www.lukaszsliwinski.pl)**

## About project

Personal website of my music solo project. It's a lightweight, SSR application written in Next.js.

## Features:

- server side rendering
- integration with SoundCloud API

## Technologies used

- TypeScript
- Next.js
- Tailwind CSS

## Docker deployment

The Docker image uses Node.js 24 Alpine and a multi-stage Next.js standalone
build. The production container runs as a non-root user and listens on
`0.0.0.0:3000` by default.

Create a local `.env` file with the deployment settings:

```dotenv
DOMAIN=example.com
PORT=3000
```

Compose sets `NODE_ENV=production` and disables Next.js telemetry. `PORT` is
optional and defaults to `3000`; the application and Traefik use the same value.
The deployment expects Traefik on the existing external Docker network `web`,
with the `websecure` entrypoint and `le` certificate resolver configured.

Build and start the application:

```sh
docker compose up -d --build
docker compose logs -f solo_website
```

The `.env` file is excluded from the build context and supplied at runtime by
Compose. Variables needed during `next build`, including any future
`NEXT_PUBLIC_*` variables, must be supplied separately at build time.
