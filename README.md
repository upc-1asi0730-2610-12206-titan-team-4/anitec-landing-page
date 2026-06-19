# AniTec - Landing Page

## Descripción

Landing page oficial de AniTec, una plataforma digital para la gestión ganadera en Latinoamérica. Este proyecto corresponde a la versión web pública de presentación del producto.

## Estructura del Proyecto

```
anitec-landing-page/
├── index.html                  # Página principal
├── README.md                   # Este archivo
└── assets/
    ├── images/                 # Imágenes del proyecto
    │   ├── logo.png
    │   ├── logo.ico
    │   ├── about-us/
    │   ├── home/
    │   ├── ranchers/
    │   ├── screenshots/
    │   └── veterinarians/
    ├── pages/                  # Páginas internas
    │   ├── about.html
    │   ├── ranchers.html
    │   └── veterinarians.html
    ├── scripts/                # JavaScript
    │   ├── i18n.js
    │   └── script.js
    └── styles/                 # Estilos CSS
        └── styles.css
```

## Requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet (para fuentes Google Fonts y Bootstrap Icons)

## Instalación

1. Clona o descarga este repositorio
2. Abre el archivo `index.html` en tu navegador
3. O sirve los archivos usando un servidor local:

```bash
# Usando Python
python -m http.server 8000

# Usando Node.js
npx serve
```

## Personalización

### Colores

Los colores principales están definidos en `assets/styles/styles.css` en la sección `:root`:

| Variable | Color | Uso |
|---------|-------|-----|
| `--primary-brown` | #925930 | Color primario marrón |
| `--primary-green` | #79B267 | Color primario verde |
| `--primary-cream` | #f5f0e6 | Color de fondo crema |
| `--secondary-brown` | #A3794F | Color secundario marrón |
| `--secondary-green` | #A3C4A8 | Color secundario verde |
| `--text-dark` | #1a1a1a | Color de texto oscuro |
| `--text-light` | #5a554f | Color de texto claro |

### Imágenes

Reemplaza las imágenes en `assets/images/`:
- `logo.png` - Logo principal de la empresa (recomendado: 200x200px)
- `logo.ico` - Favicon (16x16px o 32x32px)
- `home/hero-section.png` - Imagen para el hero section

### Contenido

Edita directamente los archivos HTML en `assets/pages/` para modificar:
- Textos de las secciones
- Enlaces y URLs
- Información de contacto
- Testimonios y precios

## Secciones de la Landing Page

1. **Header** - Navegación con logo y menú
2. **Hero** - Propuesta de valor principal
3. **Segmentos** - Tarjetas para Ganaderos y Veterinarios
4. **Métricas** - Impacto de AniTec
5. **Características** - 6 módulos del producto
6. **Cómo Funciona** - 4 pasos simples
7. **Precios** - 3 planes disponibles
8. **Footer** - Enlaces y redes sociales

### Páginas secundarias

- **Nosotros** (`assets/pages/about.html`) - Equipo, misión/visión, showcase del producto
- **Ganaderos** (`assets/pages/ranchers.html`) - Beneficios, módulos, comparativa
- **Veterinarios** (`assets/pages/veterinarians.html`) - Beneficios, funciones, casos de uso

## Tecnologías Usadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos con variables CSS y flexbox/grid
- **JavaScript** - Funcionalidad interactiva e internacionalización
- **Google Fonts** - Tipografía Poppins
- **Bootstrap Icons** - Iconos

## Navegación entre páginas

- Todas las páginas internas (`assets/pages/`) se enlazan entre sí con rutas relativas
- Los enlaces a `index.html` usan `../index.html` desde las páginas internas
- Las imágenes usan `../images/...` desde los archivos en `assets/pages/`

## Internacionalización

- Soporte completo EN/ES via `assets/scripts/i18n.js`
- Cambio de idioma persistente en `localStorage`
- Atributos `data-i18n` para traducción dinámica
- Actualización automática de meta tags y Open Graph

## Browser Soportados

- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)

## Licencia

Copyright © 2026 AniTec. Todos los derechos reservados.

## Contacto

Para consultas sobre el proyecto:
- Website: https://anitec.com
- Email: contacto@anitec.com
