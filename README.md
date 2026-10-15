# Portafolio · Rosa Astaburuaga

Sitio estático (HTML, CSS y un poco de JavaScript). No necesita instalar nada ni compilar.

## Estructura

- `index.html` · portada, índice, about, experiencia y contacto
- `sirep.html`, `dystopia.html`, `vpe.html`, `swapet.html`, `dias-nublados.html`, `escribiendo-memoria.html`, `soco.html`, `craft-and-making.html` · una página por proyecto
- `styles.css` · todo el diseño
- `main.js` · aparición suave de fotos y vista previa del índice
- `img/` · fotos en formato WebP
- `fonts/` · Geist y Geist Mono
- `vercel.json` · hace que las direcciones queden limpias (`/sirep` en vez de `/sirep.html`)

## Subirlo a Vercel

1. Crea un repositorio nuevo en GitHub (por ejemplo `portfolio`) y sube todo el contenido de esta carpeta.
2. En Vercel, elige Add New, luego Project, e importa ese repositorio.
3. En Framework Preset deja "Other". No cambies nada más y presiona Deploy.
4. Si quieres una dirección más linda, en Settings, Domains puedes cambiarla a algo como `rosaastaburuaga.vercel.app`.

## Agregar o cambiar fotos

Guarda la foto en `img/` como WebP y usa el mismo nombre de la que reemplazas, o pídeselo a Claude.

## Cambiar textos

Los textos están directamente en cada archivo `.html`. Busca la frase y edítala.
