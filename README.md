# NPortal

Static React + Vite portfolio placeholder for CV and project content.

## Structure

```text
src/
  components/   shared UI such as the sidebar and tabs
  data/         placeholder profile, project, and homelab content
  views/        Profile, Projects, and Homelab pages
```

## Local

```sh
npm install
npm run dev
```

## Checks

```sh
npm run build
npm run preview
docker-compose up -d --build
```

The Docker service exposes the built static site on port `4174`.
