# AniTec - Landing Page

## Descripción

Landing page oficial de AniTec, una plataforma digital para la gestión ganadera en Latinoamérica. Este proyecto corresponde a la versión web pública de presentación del producto.

## Estructura del Proyecto

```
landing-page/
├── assets/
│   └── images/
│       ├── logo.png           # Logo de AniTec (formato PNG)
│       ├── logo.ico          # Favicon para la pestaña del navegador
│       ├── hero-section.png   # Imagen principal del hero section
│       └── anitec-logo.png    # Logo antiguo (respaldo)
├── index.html              # Archivo principal HTML
├── styles.css            # Estilos CSS
├── script.js            # Funcionalidad JavaScript
└── README.md           # Este archivo
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

Los colores principales están definidos en `styles.css` en la sección `:root`:

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
- `hero-section.png` - Imagen para el hero section

### Contenido

Edita directamente el archivo `index.html` para modificar:
- Textos de las secciones
- Enlaces y URLs
- Información de contacto
- Testimonios y precios

## Secciones de la Landing Page

1. **Header** - Navegación con logo y menú
2. **Hero** - Propuesta de valor principal
3. **Características** - 6 módulos del producto
4. **Cómo Funciona** - 4 pasos simples
5. **Testimonios** - 3 testimonios de usuarios
6. **Precios** - 3 planes disponibles
7. **CTA** - Llamada a la acción final
8. **Footer** - Enlaces y redes sociales

## Tecnologías Usadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos con variables CSS y flexbox/grid
- **JavaScript** - Funcionalidad interactiva
- **Google Fonts** - Tipografía Poppins
- **Bootstrap Icons** - Iconos

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