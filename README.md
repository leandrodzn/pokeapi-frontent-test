# Pokémon Finder - Prueba Técnica Fullstack

Esta es una aplicación desarrollada con React que permite visualizar y buscar Pokémones utilizando la PokéAPI. El proyecto cumple con los requisitos técnicos de paginación, búsqueda funcional y diseño responsivo.

## Requisitos del Sistema

Para garantizar el funcionamiento correcto de la aplicación, se recomienda contar con el siguiente entorno:

- Node.js: Versión 22 (seguir archivo .nvmrc)

- Gestor de paquetes: npm versión 9.0.0 o superior.

- Navegador: Base Chromium, Firefox o Edge actualizado (soporte para CSS Grid y Flexbox).

## Instrucciones para correr localmente

Sigue estos pasos para ejecutar la aplicación en un entorno local:

1. Clonar el repositorio:

```
git clone https://github.com/leandrodzn/pokeapi-frontent-test.git
cd pokeapi-frontent-test
```

2. Instalar dependencias: Este proyecto utiliza npm como gestor de paquetes.

```
npm install
```

3. Iniciar el servidor de desarrollo:

```
npm run dev
```

La aplicación estará disponible en http://localhost:5173.

## Tecnologías utilizadas

- React + Vite: Para un entorno de desarrollo rápido y moderno.

- TypeScript: Para garantizar la calidad y robustez del código.

- Redux Toolkit: Gestión del estado global de los Pokémon y la paginación.

- Tailwind CSS: Para una interfaz de usuario moderna y plataforma responsiva.

- Axios: Para el consumo eficiente de la PokéAPI.

## Documentación Funcional

La aplicación implementa las siguientes funcionalidades solicitadas:

- Paginación: Se muestran exactamente 6 Pokémon por página.

- Buscador: Permite encontrar Pokémon por nombre exacto o nombres similares (filtrado local inteligente).

- Diseño: Basado en el layout mínimo solicitado, incluyendo nombre del autor, buscador centrado y paginación inferior.

## Documentación Técnica

- Uso de Hooks: Se implementaron **useState** para el manejo del input de búsqueda,**useEffect** para sincronizar las peticiones a la API con el cambio de página y se incluyó **useRef** para debounce en la búsqueda.

- Optimización de API: Debido a que la PokéAPI no tiene búsqueda parcial nativa, se implementó una lógica que descarga un conjunto de datos mayor cuando existe una consulta activa, permitiendo la búsqueda de "similares" sin sacrificar el rendimiento, ya que solo se solicitan los detalles (imagen) de los 6 resultados visibles.

- Path Aliasing: Se configuraron alias (@/) para mejorar la legibilidad y mantenimiento de las rutas de importación.

## Scripts Disponibles

- **npm run dev**: Inicia el servidor de desarrollo.

- **npm run build**: Compila la aplicación para producción en la carpeta /dist.

- **npm run lint**: Ejecuta ESLint para asegurar que se cumplen las buenas prácticas de código.

## Autor

Leandro Dzib
