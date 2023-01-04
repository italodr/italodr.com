---
title: Cómo obtener un certificado SSL en localhost
slug: como-obtener-ssl-localhost
date: '2023-01-03'
updated: null
published: true
excerpt: Cuando desarrollamos PWA's, necesitamos comprobar el funcionamiento de nuestra aplicación utilizando los service workers en modo offline, y para ello es necesario simular un servidor con un certificado SSL válido.
description: Cuando desarrollamos PWA's, necesitamos comprobar el funcionamiento de nuestra aplicación utilizando los service workers en modo offline, y para ello es necesario simular un servidor con un certificado SSL válido.
terms:
    - howto
    - development
---

Cuando desarrollamos PWA's (<a href="https://web.dev/progressive-web-apps/" target="_blank" rel="noreferrer noopener">Progressive Web Apps</a>), necesitamos comprobar el funcionamiento de nuestra aplicación utilizando los service workers en modo offline, y para ello es necesario simular un servidor con un certificado SSL válido. El certificado SSL es un documento digital que nos permite tener una sesión del navegador encriptada, por lo que podremos acceder mediante el protocolo HTTPS (Hypertext Transfer Protocol Secure).

Para conseguir tener ambos requisitos, un servidor y un certificado, necesitaremos utilizar dos librerías.

Primero utilizaremos <a href="https://github.com/FiloSottile/mkcert" target="_blank" rel="noreferrer noopener">mkcert</a>, que tal como ellos la definen, es una herramienta sencilla para crear certificados de desarrollo de confianza local, y que no requiere configuración.

Vamos al <a href="https://github.com/FiloSottile/mkcert#installation" target="_blank" rel="noreferrer noopener">apartado de instalación de la herramienta</a> y la instalamos según nuestra necesidad. Y una vez tenemos instalada la librería, tenemos que ejecutar los siguientes comandos:

```sh
# La siguiente línea nos instala los certificados locales en el sistema
mkcert -install
```

Deberíamos ver un resultado como el siguiente:

<img class="contain-image" src="/images/posts/como-obtener-ssl-localhost/resultado-mkcert-install.png" alt="Resultado de la instalación de mkcert" />

```sh
# Accedemos a nuestro proyecto
cd ruta/de/nuestro/proyecto

# Esta línea genera los certificados para los dominios que añadamos
# En este caso creamos un certificado para 127.0.0.1 y modificamos
# los nombres como cert.pem y key.pem
mkcert -cert-file cert.pem -key-file key.pem 127.0.0.1
```

Deberíamos ver un resultado como el siguiente:

<img class="contain-image" src="/images/posts/como-obtener-ssl-localhost/resultado-certificados.png" alt="Resultado de los certificados" />

Con estos comandos obtenemos nuestros archivos certificados que utilizaremos en nuestro servidor. Vamos a simular que dentro de este directorio tenemos desarrollada una PWA en alguna librería Javascript, como puede ser Vue o React, y que este proyecto se compila para producción en una carpeta llamada `dist` con un script llamado `build`. Y ya que los service workers funcionan dentro de un entorno de producción, primero vamos a necesitar ejecutar esta compilación. Y posteriormente, utilizaremos la librería <a href="https://www.npmjs.com/package/http-server" target="_blank" rel="noreferrer noopener">http-server</a> para generar nuestro servidor HTTP y lo ejecutaremos utilizando <a href="https://www.npmjs.com/package/npx" target="_blank" rel="noreferrer noopener">npx</a>.

```sh
# Compilamos nuestro proyecto para un entorno de producción
npm run build

# Ejecutamos nuetro servidor y le pasamos los siguientes parámetros:
# 1. la carpeta donde se compila nuestro proyecto (dist)
# 2. -S que nos habilita el protocolo seguro (SSL)
# 3. -C cert.pem para indicarle dónde se encuentra nuestro certificado,
#    previamente generado con mkcert.
npx http-server dist -S -C cert.pem
```

Deberíamos ver un resultado como el siguiente, y en este caso, podremos acceder a nuestro proyecto a través de la url que nos indica (`https://127.0.0.1:8080`):

<img class="contain-image" src="/images/posts/como-obtener-ssl-localhost/resultado-http-server.png" alt="Resultado de nuestro servidor" />
