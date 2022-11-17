---
title: Creando un blog con NextJS
slug: creando-un-blog-con-nextjs
date: '2022-10-28'
---

```bash
pnpm i unified remark-parse remark-html gray-matter
```

yo utilizo la función nativa de JS `toLocaleDateString` para formatear la fecha -> mas info [https://www.freecodecamp.org/espanol/news/como-formatear-fechas-en-javascript-con-una-linea-de-codigo/](https://www.freecodecamp.org/espanol/news/como-formatear-fechas-en-javascript-con-una-linea-de-codigo/)

pero para un format más complejo de las fechas se puede instalar la librería [date-fns](https://date-fns.org/)

```bash
pnpm i date-fns
```

Añadiendo prisma para code highlighting

```bash
pnpm i remark-prism prismjs
```

```js
import 'prismjs/themes/prism.min.css';
import 'prismjs/themes/prism-tomorrow.min.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.min.css';
```


y en _app.js los overrides

```js
import '../styles/override-prism.css';
```

GA4 - Consent mode

https://javascript.plainenglish.io/manage-cookie-consent-in-next-js-with-google-tag-manager-4d58818266ea
