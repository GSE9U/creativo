# Museo interactivo TIC y Arte

SPA educativa construida con Next.js (App Router) que presenta 6 salas narrativas sobre la evolucion entre tecnologia, cultura y arte.

## Desarrollo

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev`: inicia entorno local.
- `npm run lint`: ejecuta lint.
- `npm run typecheck`: chequea tipos TS.
- `npm run build`: genera build de produccion.

## Estructura principal

- `app/`: layout global, estilos y pagina inicial.
- `components/`: shell, barra de narracion, mapa de salas y secciones.
- `hooks/`: logica de sala activa y narrador.
- `lib/`: tipos, datos de salas y utilidades.
- `public/images` y `public/audio`: assets locales placeholder.

## Uso

1. Abre la web y elige `Activar narracion` o `Continuar sin audio`.
2. Navega por salas con scroll, botones, sidebar o teclado (`ArrowUp`, `ArrowDown`, `Space`).
3. Ajusta volumen y velocidad desde la barra inferior.

## Deploy

Recomendado en Vercel con build command `npm run build`.
