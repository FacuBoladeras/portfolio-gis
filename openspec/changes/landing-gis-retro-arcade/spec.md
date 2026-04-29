# Spec: Landing GIS retro arcade

## Requerimiento 1: Estructura de landing
La aplicación DEBE exponer una landing single-page en español con secciones de portfolio personal geoespacial.

### Escenario: Render de secciones principales
Given un navegador moderno
When se carga `index.html`
Then se muestran las secciones Hero, Servicios, About, Proyectos, Stack, CTA final y Footer.

## Requerimiento 2: Identidad visual retro arcade
La landing DEBE implementar una estética retro gaming arcade 8/16-bit y NO una estética sci-fi corporativa.

### Escenario: Aplicación de look & feel
Given los estilos cargados desde `styles.css`
When se renderiza la UI
Then predominan tonos púrpura/violeta con magenta, azul eléctrico y cyan
And se observan elementos pixelados, marcos cuadrados, glow neón y efecto CRT scanlines.

## Requerimiento 3: Hero orientado a conversión
El Hero DEBE presentar propuesta de valor GIS y CTAs claros.

### Escenario: Contenido del Hero
Given la sección Hero
When el usuario la visualiza
Then aparece el título "GIS, Teledetección y Datos Espaciales"
And aparece el subtítulo de transformación de datos geográficos
And existen los botones "Ver proyectos" y "Contactar".

## Requerimiento 4: Comunicación de servicios y proyectos
La landing DEBE comunicar servicios GIS y casos de trabajo mediante cards estilo arcade.

### Escenario: Cards de servicios
Given la sección Servicios
When se listan capacidades
Then aparecen: Mapas temáticos, Teledetección, Big Data Espacial, Automatización GIS con Python.

### Escenario: Grid de proyectos
Given la sección Proyectos
When se listan iniciativas
Then aparecen cards para: Inventario de humedales, Índice de Huella Humana, Clasificación satelital, Dashboards geoespaciales y ETL geoespacial.

## Requerimiento 5: Stack técnico visible
La landing DEBE mostrar el stack geoespacial como badges estilo retro.

### Escenario: Badges de tecnologías
Given la sección Tech Stack
When se renderiza la lista
Then aparecen Python, QGIS, Google Earth Engine, GeoPandas, Rasterio, PostGIS, GeoServer, Leaflet y Streamlit.

## Requerimiento 6: Responsividad e interacción mínima
La landing DEBE funcionar bien en mobile y desktop con interacciones ligeras.

### Escenario: Adaptación responsive
Given un viewport <= 860px
When se renderiza la página
Then el Hero y paneles pasan a una sola columna.

### Escenario: Navegación y HUD
Given enlaces internos con hash
When el usuario hace click
Then la navegación realiza scroll suave
And el HUD muestra score animado sin bloquear la experiencia.
