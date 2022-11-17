---
title: Full Markdown example
slug: full-example
date: '2020-06-09'
updated: null
published: false
description: '...'
terms:
    - demo
---

## Title

Lorem ipsum dolor sit $x + y = 2$ amet consectetur adipisicing elit. Doloribus temporibus vel voluptates corrupti cupiditate molestiae laboriosam molestias nulla architecto provident illum, quae veritatis. [Debitis cumque cupiditate eveniet](https://acme.io) provident nulla commodi reprehenderit animi facilis dolorum nostrum officiis, rerum sed facere et eligendi mollitia totam earum accusamus voluptatibus dolores.

$$
\begin{aligned}
(x+y)(x-y)=x^{2}-y^{2} \\
(x_{1}+x_{2})^2=x_{1}^{2}+2x_{1}x_{2}+x_{2}^{2}
\end{aligned}
$$

$x_{ab}+x_{12}=0$

![Sample image](/images/bear.jpg)

Incidunt nemo[^1] fugit deleniti rerum debitis cum sed harum cumque nihil aperiam nisi doloribus, veritatis magni repellendus ratione natus numquam ea architecto veniam expedita iure commodi eius iusto eaque. Non aliquam, inventore consequatur corrupti deserunt nemo eveniet maxime dolores suscipit voluptatibus. Eius soluta sint quibusdam ^[This is an inline note] illo saepe cumque non aliquid repudiandae amet. Maxime asperiores possimus quasi distinctio.

```
.
├── folder-1
│   ├── file-1
│   └── file2
└── folder-2
    └── file-1
```

## An Code example with PrismJS

```js
console.log('Hello World');
```

Illum officiis error repudiandae modi maiores, voluptas autem voluptate dolor temporibus dicta earum quidem ullam libero? Corrupti, voluptates sed, nemo aperiam natus iure hic saepe dolore enim quas <a href="https://acme.io" target="_blank" rel="noreferrer noopener">consectetur exercitationem!</a> Molestias libero facilis cum quis eos, esse nisi.

| Table | Headings        | Here |
| ----- | --------------- | ---- |
| Sub   | Headings        | Too  |
| cell  | column spanning |
| rows  | normal          | cell |

| id  | `classes_available` | `classes_enabled` |
| --- | ------------------- | ----------------- |
| 1   | { a, b, c}          |
| 2   | { a, c, d }         | { a, b, c}        |
| 3   | { a, b, c, d, e}    | { a }             |
| 4   | { a, b}             |

## Default NodeJS server

Eveniet neque dicta quia tenetur laborum harum porro corporis doloremque ab totam, perferendis labore adipisci iusto consequuntur illo asperiores.

### Some third title

Repudiandae rerum, facere maiores explicabo eligendi libero inventore ea? Adipisci recusandae est aut consequatur repellat vel unde explicabo laudantium asperiores amet corrupti nobis quia nesciunt odio, excepturi laboriosam labore facere voluptate natus commodi, aliquid magni aspernatur. Quasi quia natus architecto? Doloribus illum quae velit quasi aut, voluptates impedit praesentium similique amet dolorum porro nihil necessitatibus laudantium!

```js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
```

## Second title

Mollitia cupiditate reprehenderit officia provident consequatur quaerat porro est, nostrum ratione, totam eius adipisci maiores dolorem. Officia ipsam harum deleniti animi esse suscipit blanditiis placeat a neque excepturi, provident quasi culpa, itaque, rem quos ratione porro dolores magnam? Amet porro quia facilis, suscipit at recusandae eum eius optio voluptatibus ea excepturi quae molestias aliquam, eligendi unde vitae assumenda necessitatibus iusto atque consequuntur delectus accusantium?

> Ducimus nihil ad illum, quos dolorum quibusdam dicta. Rem repellat perferendis, dolores, dignissimos mollitia illum eligendi maxime optio ullam dolorem repudiandae sit numquam saepe voluptate expedita libero facere sunt pariatur cumque! Eos harum velit natus, ea est magnam iusto incidunt. Quis, dicta! Vel voluptatem ut eaque voluptas, aspernatur odio accusantium quidem natus doloremque error! Blanditiis nobis adipisci eaque expedita quod deleniti magni quas, facere, a animi magnam tempora, dolores maxime illum est? _— Lorem Ipsum_

```py
class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

p1 = Person("Joe", 36)
print(p1.name)
```

[^1]: Ducimus nihil ad illum, quos dolorum quibusdam dicta.
