---
title: All components
slug: all-components
date: '2022-11-01'
updated: '2022-11-05'
published: false
excerpt: 'Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus suscipit, egestas vehicula pharetra class convallis felis commodo sed.'
description: Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus suscipit, egestas vehicula pharetra class convallis felis commodo sed, mi penatibus praesent bibendum sodales nisi himenaeos morbi. Sociosqu litora mollis nullam enim, velit aenean cubilia ad, rutrum ridiculus sollicitudin.
terms:
    - sample
    - demo
---

Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus suscipit, egestas vehicula pharetra class convallis felis commodo sed, mi penatibus praesent bibendum sodales nisi himenaeos morbi. Sociosqu `let x = Math.round()` litora mollis nullam enim, velit aenean cubilia ad, **rutrum ridiculus sollicitudin**. Est gravida curabitur ridiculus platea morbi sapien sociosqu phasellus ullamcorper tortor, semper dapibus massa euismod senectus himenaeos aenean facilisis varius inceptos conubia, nulla lacus elementum nam *tristique nunc libero at enim*.

## Subtitle 2

Lorem ipsum dolor sit amet consectetur adipiscing[^1] elit faucibus suscipit, egestas vehicula pharetra class convallis felis commodo sed, mi penatibus praesent bibendum sodales nisi himenaeos morbi. Sociosqu litora mollis nullam enim, [velit aenean cubilia ad](https://acme.io), rutrum ridiculus sollicitudin. Est gravida curabitur ridiculus platea morbi sapien sociosqu phasellus ullamcorper tortor, ~~semper dapibus massa euismod~~ senectus himenaeos aenean facilisis varius inceptos conubia, nulla lacus elementum nam tristique nunc libero at enim.

### Subtitle 3

* Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus suscipit
* egestas vehicula pharetra class convallis felis commodo sed, mi penatibus praesent bibendum sodales nisi himenaeos morbi.
* Sociosqu litora mollis nullam enim, velit aenean cubilia ad, rutrum ridiculus sollicitudin.
* Est gravida curabitur ridiculus platea morbi sapien sociosqu phasellus ullamcorper tortor,
* semper dapibus massa euismod senectus himenaeos aenean facilisis varius inceptos conubia, nulla lacus elementum nam tristique nunc libero at enim.

1. Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus suscipit
2. egestas vehicula pharetra class convallis felis commodo sed, mi penatibus praesent bibendum sodales nisi himenaeos morbi.
3. Sociosqu litora mollis nullam enim, velit aenean cubilia ad, rutrum ridiculus sollicitudin.
4. Est gravida curabitur ridiculus platea morbi sapien sociosqu phasellus ullamcorper tortor,
5. semper dapibus massa euismod senectus himenaeos aenean facilisis varius inceptos conubia, nulla lacus elementum nam tristique nunc libero at enim.

### Subtitle 3

#### Subtitle 4

> Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus suscipit, egestas vehicula pharetra class convallis felis commodo sed, mi penatibus praesent bibendum sodales nisi himenaeos morbi. Sociosqu litora mollis nullam enim, velit aenean cubilia ad, rutrum ridiculus sollicitudin. Est gravida curabitur ridiculus platea morbi sapien sociosqu phasellus ullamcorper tortor, semper dapibus massa euismod senectus himenaeos aenean facilisis varius inceptos conubia, nulla lacus elementum nam tristique nunc libero at enim.


## Math stuff

Lorem ipsum dolor sit $x + y = 2$ amet consectetur adipisicing elit. Doloribus temporibus vel voluptates corrupti cupiditate molestiae laboriosam molestias nulla architecto provident illum, quae veritatis. [Debitis cumque cupiditate eveniet](https://acme.io) provident nulla commodi reprehenderit animi facilis dolorum nostrum officiis, rerum sed facere et eligendi mollitia totam earum accusamus voluptatibus dolores.

$$
\begin{aligned}
(x+y)(x-y)=x^{2}-y^{2} \\
(x_{1}+x_{2})^2=x_{1}^{2}+2x_{1}x_{2}+x_{2}^{2}
\end{aligned}
$$

$x_{ab}+x_{12}=0$


```
.
├── folder-1
│   ├── file-1
│   └── file2
└── folder-2
    └── file-1
```

> **Multiple line blockquote**
>
> Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus suscipit, egestas vehicula pharetra class convallis felis commodo sed, mi penatibus praesent bibendum sodales nisi himenaeos morbi.
> Sociosqu litora mollis nullam enim, velit aenean cubilia ad, rutrum ridiculus sollicitudin.
> Est gravida curabitur ridiculus platea morbi sapien sociosqu phasellus ullamcorper tortor, semper dapibus massa euismod senectus himenaeos aenean facilisis varius inceptos conubia, nulla lacus elementum nam tristique nunc libero at enim.

```bash
pnpm store prune
```

```js
const foo = bar.reduce((a, b) => b.name !== '' ? a.push(b) : a, []);
```

```ts
const foo = bar.reduce((a: string[], b: any): string[] => b.name !== '' ? a.push(b) : a, []);
```

```python
import youtube_dl
import sys


if __name__ == "__main__":
    with youtube_dl.YoutubeDL(ydl_opts) as ydl:
        filenames = sys.argv[1:]
        ydl.download(filenames)
```

##### Subtitle 5

Lorem ipsum dolor sit amet consectetur adipiscing [elit faucibus suscipit][identifier], egestas vehicula pharetra class convallis felis commodo sed, mi penatibus praesent bibendum sodales nisi himenaeos morbi.

[![Semantic description of image](https://picsum.photos/600/320 "Hello World")*My caption*][italodr.com]

| a | b  |  c |  d  |
| - | :- | -: | :-: |
| laksjd | asdasd asd | asd asd asd | asdkjas djahskdj asd |

[identifier]: https://italodr.com "With title"
[italodr.com]: https://italodr.com

[^1]: Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus suscipit, egestas vehicula pharetra class convallis felis commodo sed, mi penatibus praesent bibendum sodales nisi himenaeos morbi.
