---
title: Sobre JAMstack
slug: sobre-jamstack
date: '2021-03-01'
updated: null
published: false
description: '...'
terms:
    - javascript
---

JAMstack es un _stack_ tecnológico compuesto por Javascript + API + Markup, este último como generador de plantillas. A grandes rasgos, cada parte de este stack se encarga de lo siguiente:

* **Javascript:** se encarga de la carga de datos en el sitio y se hace en el lado del cliente (_client-side_). Los _frameworks_ más conocidos son React, Vue...
* **API:** en lugar de un servidor con base de datos permite utilizar servicios de terceros o CMS headless.  Existen algunos especializados para JAMstack (Netlify CMS, Contentful, Kentico, Strapi...)
* **Markup:** es el código HTML, pero se referencia como un generador de plantillas/contenido. Al igual que el resto, hay herramientas que ayudan a realizar esta tarea, las más conocidas: Next.js, Gatsby, Nuxt, Hugo, Jekyll...

## Diferencias con un desarrollo web tradicional

Las webs y _Content Management System_ (CMS) tradicionales dependen de un servidor al que se le hace una petición para que renderice y nos devuelva el HTML pedido. A esto, es necesario sumar la latencia de las peticiones que se realizan a las bases de datos para obtener el contenido que se administra desde el CMS. A más, estos servidores y CMS necesitan personas capacitadas para su mantenimiento, así como también:

* Controlar las vulnerabilidades de ataques de _hackers_
* Caídas del servidor por el crecimiento de las visitas
* Reducción de velocidad de respuesta del servidor
* Necesidad constante de soporte técnico y mantenimiento

A diferencia de esto, JAMstack nos ofrece la facilidad de despliegue de sitios estáticos que se pueden alojar en distintas localizaciones, solucionando así, el problema de la dependencia de un servidor.

La única posibilidad de los atacantes es copiar lo que existe en el contenido del HTML, el cual ya es público.

La velocidad de respuesta también se ve mejorada en gran medida, ya que la petición se realiza sobre archivos HTML previamente generados, sin necesidad de realizar otras peticiones, por ejemplo, a las bases de datos. Además del uso de [sevidores CDN (_Content Delivery Network_)](https://es.wikipedia.org/wiki/Red_de_distribuci%C3%B3n_de_contenidos) que permiten tener alojadas las páginas y recursos en distintos servidores alrededor del mundo.

---

Pendiente:

- CI/CD — no hay diferencia si tienes implementado este flujo en tu trabajo. Al
- CMS agnostico
- La construcción y el alojamiento están desacoplados.
- La página se envía al navegador desde un CDN
- FTP — en este caso si lo hay, pero es un flujo poco ...
- SSG (Static Site Generator)
- SSR (Server Side Rendered)
- Los SSG de JAMstack ofrecen mejoras en el rendimiento y WPO, utilizando mecanismos modernos que ofrecen esta capacidad
- Seguridad, no está conectado al servidor en tiempo de ejecución ya que se genera en el tiempo de construcción
- PWA — facilita el desarrollo dentro de esta filosofía
  - Offline mode
  - Instalar como aplicación de dispositivos
  - Posibilidad de incorporarlas a los OS Markets
  - Push notifications

---

Que es Static Generation?

Static Generation describe el proceso de compilar y renderizar, es decir, crear el contenido html, en tiempo de compilación o build time. El resultado de este proceso será un set de archivos estáticos, incluyendo html, imagenes, css y javascript.

Desde este proceso nace el nombre de Static Site Generator.
Que ocurre durante este proceso?

Una aplicación javascript, como las conocemos funciona en un browser. El browser descarga un archivo HTML bastante sencillo que a su vez solicita la descarga de archivos javascript que contienen la lógica para renderizar el contenido de la interfaz, un proceso también conocido como “hidratación” o hydrate.

Los generadores estáticos ejecutan este mismo proceso, pero durante el tiempo de compilación y sin necesitar un browser creando internamente el árbol de componentes del futuro sitio web.

La ventaja de este proceso es que el resultado, al ser simples archivos estáticos ofrecen un tiempo de carga bajo además de permitir servir el contenido desde muchos servicios e incluso gratis o al menos muy barato. Además, este tipo de apps pueden tener un muy buen ranking SEO ya que al ser contenido simple HTML se pueden aplicar muchas ténicas de optiización para buscadores.

Existen dos problemas importantes con éste método: los tiempos de compilación pueden ser muy largos, ya que con cada cambio que se haga al contenido el sitio debe ser compilado nuevamente. El otro problema es que el contenido se vuelve obsoleto, ya que los cambios no se reflejan hasta una nueva compilación y deploy.

Recordemos que a pesar de ser llamados sitios estáticos, esto no implica que no puedan tener bits de dinamismo en la página ya compilada. Es posible, por ejemplo, consumir alguna api desde los archivos generados permitiendo asi evitar el problema del contenido obsoleto.

Algunos generadores de sitios estáticos que puede encontrar
Gatsby, Hugo, Jekyll, 11ty, nuxt, etc. Puedes encontrar una extensa lista visitando http://staticgen.com/
Que es Server Side Rendered

Por otro lado, Server Side Rendered es también una ténica que ha existido por años en la web, se trata básicaente de permitir que sea el servidor quien genere los archivos HTML o el contenido HTML en tiempo de ejeución. Esto es lo que siempre han hechos los sitios escritos en PHP como Wordpress o sitios creados con Rails, Django, etc.

La diferencia con la nueva iteración de esta ideaa es que existian limitantes a la hora de manejar la interacción con el cliente, el servidor está limitado a manejar sólo el contenido inicial que se renderiza, cualquier otro comportamiento adicional que se requiera debe o ser creado con llamadas a alguna api para hacer modificaciones sobre los datos de forma “dinámica” o volviendo a renderizar la página.

Cuando hablamos de SSR en el mundo de Javascript, lo que realmente estamos diciendo es Javascript Isomorphic Rendering
Desde hace años que Javascript puede ejecutarse tanto en el browser como en el server gracias a Nodejs (o Deno), lo que permite compartir lógica entre ambas caras de una aplicación.
Finalmente lo que Nextjs, Nuxt y otros ofrecen es una forma de compartir logica de renderizado entre la carga inicial desde el servidor y las interacciones futuras en el cliente.

Algunas de las ventajas de esta ténica es que le contenido que se muestra al cliente siempre está actualizado y no hay necesidad de iniciar nuevos build cada vez que el contenido cambia, menos tiempo de compilación.

Y dentro de sus limitaciones o desventajas, no puedes distribuir un sitio 100% SSR a un CDN, y el tiempo de renderizado del primer contenido es mas lento ya que dicho contenido debe ser creado cada vez que se accede al sitio.

Algunas formas de resolver estas limitaciones es por ejemplo el uso de algún sistema de cache o como lo resuelve Next: Generando contenido estático cuando la página no define que requiere algun dato en particular por medio del método getInitialProps
