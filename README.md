# RemesaClara

Comparativa de servicios de envío de dinero desde Estados Unidos a Latinoamérica. Información clara, honesta y actualizada para la comunidad hispana.

## Que es

RemesaClara es un sitio web de comparativas de remesas diseñado para ayudar a la comunidad hispana en EE.UU. a encontrar la mejor opción para enviar dinero a Latinoamérica. Comparamos comisiones, tiempos de entrega y tasas de cambio de los principales proveedores.

## Funcionalidades

- Comparativas detalladas de Wise, Remitly, Western Union y más
- Guías paso a paso para cada país
- Selector de país con banderas
- Soporte multi-idioma (español e inglés)
- Tema oscuro profesional
- Scraper automático de datos actualizados
- Diseño responsive para móvil y escritorio

## Tecnologías

- React 19 + Vite 8
- Tailwind CSS v4
- react-router-dom 7
- react-i18next
- Node.js (scraper)

## Instalación

```bash
git clone https://github.com/yaarielre/RemesaClara.git
cd RemesaClara
npm install
npm run dev
Scripts disponibles
Comando
npm run dev
npm run build
npm run scrape
npm run lint
Estructura del proyecto
src/
  components/     Componentes reutilizables (Navbar, Footer, Cards)
  pages/          Páginas principales (Home, Comparativas, Guías, Contacto)
  data/           Datos de comparativas y guías
  i18n/           Traducciones (español e inglés)
  assets/         Imágenes y recursos estáticos
scripts/
  scraper.js      Web scraper para datos actualizados
.github/
  workflows/      Automatización del scraper semanal
Contribuir
1. Forkea el repositorio
2. Crea una rama (git checkout -b feature/nueva-funcionalidad)
3. Haz commit (git commit -m 'Agregar nueva funcionalidad')
4. Push a la rama (git push origin feature/nueva-funcionalidad)
5. Abre un Pull Request
Licencia
MIT
