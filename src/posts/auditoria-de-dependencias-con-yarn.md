---
title: Auditoría de dependencias con Yarn
slug: auditoria-de-dependencias-con-yarn
date: '2020-04-07'
updated: null
published: true
description: '...'
terms:
    - node
    - audit
---


Dentro de uno de nuestros proyectos tuvimos alertas sobre algunas vulnerabilidades de algunas dependencias, una versión de `minimist` en concreto.

Por lo general, suele ser sencillo. Actualizando nuestras dependencias, manualmente o gracias a la ayuda de paquetes como [npm-check-updates](https://www.npmjs.com/package/npm-check-updates). Pero hay situaciones un poco más complejas porque no sabemos qué dependencia esta utilizando ese paquete ni cómo actualizar dicha versión, especialmente si no lo siguen manteniendo. Vamos a ver varias maneras de encontrarlo.

Para listar las dependencias de nuestro proyecto podemos utilizar el siguiente comando, que nos dará un listado similar a la imagen siguiente:

```
yarn list
```

![Yarn list](/images/posts/auditoria-de-dependencias-con-yarn/yarn-list.png)

Existen [otras opciones interesantes de yarn list](https://classic.yarnpkg.com/en/docs/cli/list/) para filtrar el resultado.

Pero este listado suele ser bastante extenso, dependiendo de la cantidad de dependencias que tenga nuestro proyecto.

Para encontrar qué dependencia está utilizando el paquete que estamos buscando lo podemos hacer de manera más fácil y directa. En este ejemplo, utilizaremos `optimist` que es un paquete _deprecated_ que lo importaba otra dependencia y que nos estaba generando problemas de vulnerabilidad.

Si ejecutamos el siguiente comando, obtendremos la información necesaria para saber qué dependencias utilizan este paquete.

```
yarn why optimist
```

![Yarn why](/images/posts/auditoria-de-dependencias-con-yarn/yarn-why.png)

Podéis ver [otras opciones interesantes de yarn why](https://classic.yarnpkg.com/en/docs/cli/why/) que nos ayudan a refinar la búsqueda.

Gracias al resultado de este comando pudimos ver que se estaba importando en nuestra dependencia `karma`.

Con estos comandos trazamos de dónde provenía el error, pero podemos utilizar el siguiente comando para hacer una auditoría de nuestras dependencias para encontrar las vulnerabilidades de una manera más detallada y poder tomar acciones para solucionarlo.

```
yarn audit
```

![Yarn audit](/images/posts/auditoria-de-dependencias-con-yarn/yarn-audit.png)

Si queréis [saber más sobre yarn audit](https://classic.yarnpkg.com/en/docs/cli/audit/) podéis acceder a la información que nos ofrecen en su página.

Una vez conocemos cómo solucionar nuestro problema, existe una opción que podemos utilizar en nuestro `package.json` para actualizar estas dependencias.

```json
{
    ...

    "resolutions": {
      "minimist": "1.2.5"
    },

    ...
}
```

Con esto, solo quedará eliminar la carpeta `node_modules` y el archivo `yarn.lock` y volver a ejecutar:

```
yarn install
```
