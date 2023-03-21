# Primeros pasos con Backend 

Este proyecto fue inicializado con [Express](https://github.com/expressjs/express).

## Clonar el repositorio:

```bash
# Para clonar el repositorio solo tenemos que abrir nuestra terminal y ejecutar:

  git clone https://github.com/Julio-Vasquez/ml-api

# Ahora abrimos la carpeta

  cd ml-api

```

## Ahora instalamos las dependencias

```bash
# Dependiendo del gestor de paquetes utilicemos (npm, yarn, pnpm)
  - npm install
  - yarn install
  - pnpm install
```

## Variables de entorno

Para ejecutar este proyecto, deberá añadir las siguientes variables de entorno a su archivo .env

-   `BASE_URL_API`
-   `TIMEOUT_API`
-   `PORT`
-   `PREFIX`

## Tecnologías

-   `Node js`
-   `Axios`
-   `Cors`
-   `Express`
-   `Morgan`
-   `TypeScript`

## Scripts Disponibles

En el directorio del proyecto, puede ejecutar

### `yarn run tsc` | `npm run tsc` | `pnpm run start`

Ejecuta una compilación de los archivos .ts a .js
el directorio de salida depende del tsconfig, para el caso es `/build`

### `yarn run dev` | `npm run dev` | `pnpm run dev`

Ejecuta la aplicación en modo desarrollo.
La página se volverá a cargar cuando realice cambios.
También puede ver errores en la consola.

### `yarn run start` | `npm run start` | `pnpm run start`

Compila a JavaScript y Ejecuta la aplicación.
La página no se recargar cuando realice cambios.

## Author

-   [@Julio Vasquez](https://www.github.com/Julio-Vasquez)
