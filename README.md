# Test Backend

Simple Express + TypeScript backend with in-memory JSON data.

## Endpoints

- `GET /health` -> service health check
- `GET /api/users/random` -> returns one random user from in-memory JSON data
- `PUT /api/users/:id` -> update user fields (`name`, `email`, `role`, `city`) in memory

## Run locally

```bash
npm install
npm run dev
```

## Run tests

```bash
npm test
```

## Build and run with Docker

```bash
docker build -t test-backend .
docker run --rm -p 3000:3000 test-backend
```

