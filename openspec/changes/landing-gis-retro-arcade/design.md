# Design técnico: Landing GIS retro arcade

## Arquitectura
Solución estática de 3 capas:
- `index.html`: estructura semántica y contenido.
- `styles.css`: sistema visual, layout responsive y componentes retro.
- `script.js`: microinteracciones no críticas.

## Decisiones clave
1. **Stack simple sin framework**
   - Prioriza performance, portabilidad y mantenimiento básico.
2. **Tipografía dual**
   - `Press Start 2P` para identidad arcade en headings/labels.
   - `VT323` para mejorar legibilidad del cuerpo de texto.
3. **Sistema de diseño por variables CSS**
   - Paleta centralizada en `:root` para escalar tema y consistencia.
4. **Efectos retro controlados**
   - Scanlines, glow y grilla pixel como capa visual; contraste alto para mantener perfil profesional.

## Componentes UI
- `pixel-frame`: marco base reutilizable para paneles.
- `hud-bar` / `hud-pill`: barra superior estilo marcador arcade.
- `arcade-card` / `project-card`: tarjetas de servicios y proyectos.
- `badges`: inventario/stack tecnológico.
- `btn-primary` / `btn-secondary`: CTAs de acción principal y secundaria.

## Responsividad
- Grid principal en desktop para hero de dos columnas.
- Breakpoint en `860px` para stack vertical en hero/about.

## Accesibilidad
- Estructura por secciones y headings jerárquicos.
- Contraste fuerte texto/fondo.
- Enlaces semánticos para CTA y navegación.

## Evolución prevista
- Reemplazar placeholders por assets pixel-art propios (sprites y miniaturas).
- Conectar footer y CTA a perfiles/contacto reales.
- Opcional: animaciones por keyframes para indicadores HUD adicionales.
