# Sitio del libro ROTOS

Sitio estático hecho con Astro. Se publica en Cloudflare Pages.

- Build: `npm run build` · Carpeta de salida: `dist`
- Páginas en `src/pages/` (cada archivo es una ruta)
- Imágenes en `public/img/`
- Redirecciones en `public/_redirects` (`/rotos` → `/libros/rotos/`)
- Mientras `EN_CONSTRUCCION = true` (en `src/layouts/Base.astro`) el sitio muestra el aviso y no se indexa en Google. Al lanzar: ponerlo en `false` y borrar `public/robots.txt`.
