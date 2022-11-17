---
title: Constant FORCE_SSL_ADMIN already defined
slug: constant-force_ssl_admin-already-defined
date: '2020-02-09'
updated: null
published: true
description: '...'
terms:
    - wordpress
    - howto
---

El mensaje de error `Constant FORCE_SSL_ADMIN already defined` ocurre cuando tienes la variable `FORCE_SSL_ADMIN` definida varias veces o no se encuentra en el lugar correcto.

Revisa si has activado el SSL en tu sitio WordPress. Es decir, que hayas añadido las siguientes líneas a tu fichero `wp-config.php`:

```php
define('FORCE_SSL_LOGIN', true);
define('FORCE_SSL_ADMIN', true);
```

Si es así, es probable que el error sea debido a que las variables `FORCE_SSL_ADMIN` **no estén** definidas por encima de esta línea de comentarios que marca el final de la configuración personalizada del archivo de configuración de Wordpress. Tu código debería quedar de la siguiente manera:

```php
define('FORCE_SSL_LOGIN', true);
define('FORCE_SSL_ADMIN', true);

/* That's all, stop editing! Happy blogging. */
// 👆🏽 debe quedar antes de esta línea
```
