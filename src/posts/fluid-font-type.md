---
title: Fluid Font Type
slug: fluid-font-type
date: '2019-06-06'
updated: null
published: true
description: '...'
terms:
    - css
    - typography
---

La **tipografía fluida** (_Fluid font type_) no es tan difícil de alcanzar, incluida la compatibilidad entre los distintos navegadores. ¿IE9 también?... Sí amigos, también en nuestro "querido" y olvidado compañero. Pero antes de hablar de la **tipografía fluida** vale la pena diferenciarla del significado de *Responsive Typography*. _Responsive Typography_, como su propio nombre indica, es una tipografía que responde al tamaño de la pantalla, o como lo conocemos en CSS, a los _breakpoints_ (media queries).

```css
html {
    font-size: 16px;
}

.title {
    font-size: 1.5rem;
}

@media screen and (min-width: 640px) {
    .title {
        font-size: 2.5rem;
    }
}

@media screen and (min-width: 960px) {
    .title {
        font-size: 4rem;
    }
}

@media screen and (min-width: 1200px) {
    .title {
        font-size: 6rem;
    }
}
```

Como podéis imaginar, la fuente de nuestro increíble componente _**.Foo**_ tendrá los siguientes tamaños (_mobile first_):

-   `1.5rem` que se traduce a `24px` (según nuestro tamaño de fuente raíz: `16px`)
-   `2.5rem` (`40px`) a partir de `640px`
-   `4rem` (`64px`) a partir de `960px`
-   `6rem` (`96px`) a partir de `1200px`

Lo que estamos haciendo es que el tamaño de fuente responda al tamaño de la ventana que nosotros marcamos, pero lo hace con un salto de tamaño de un punto a otro, sin pasar por los tamaños intermedios, es decir, no hay un paso de `1.5rem` a `2.5rem`. Y esto es en lo que se diferencia una **tipografía fluida**. ¿Cómo podríamos conseguir una tipografía fluida? ¿Utilizando **viewport units** quizás?... no vais mal encaminados.

**Viewport units** es un tipo de medida que está relacionada al tamaño de la ventana (alto o ancho) de manera fluida, y no solamente para el uso en tipografía, si no también, para otros elementos. Utilizando esta técnica, nuestro anterior ejemplo se reduciría a:

```css
html {
    font-size: 2vw;
}

.title {
    font-size: 2rem;
}
```

OK, WHAT??? ¿Qué ha pasado? ¿Por qué hemos eliminado los _breakpoints_ de nuestro código?

Con **Viewport units** no es necesario el uso de *breakpoints* ya que, como hemos comentado, es un tipo de unidad fluida relacionada con el tamaño de la ventana. En este caso con el ancho, ya que como habréis imaginado (o ya sabéis), existe **vh** (viewport height) que es la unidad de medida dependiente del alto de la ventana. Podríamos pensar que hemos encontrado el Santo Grial! Pero... vamos a darle una vuelta de tuerca.

¿Tenemos un control real sobre nuestra tipografía?

Si lo pensáis bien, las posibilidades son pocas. Solamente podemos declarar el tamaño del **Viewport unit** y el tamaño de la ventana hace el resto, por supuesto, podríamos añadir breakpoints que nos ayuden, pero estaríamos en la misma situación anterior. En el siguiente ejemplo podéis ver qué pasa con un tamaño de fuente más pequeño y uno más grande.

<iframe allowfullscreen="allowfullscreen" frameborder="no" height="500" scrolling="no" src="//codepen.io/italodr/embed/jVRboK/?height=500&amp;theme-id=0&amp;default-tab=css,result&amp;embed-version=2" style="width: 100%;" title="Test - fluid typography" width="300"> See the Pen Test - fluid typography by Italo Devoto Ramella (@italodr) on CodePen.</iframe>

_So close_ 😔, pero vamos a darle una vuelta más, necesitamos decirle a la tipografía que debería tener un tamaño mínimo y uno máximo... podemos hacerlo pero hace falta más que solamente el uso de **vw** y aquí entra en escena **calc**... (y [Mike Riethmuller](https://twitter.com/mikeriethmuller)) Lo que Mike hizo fue crear una función utilizando **calc**, unos tamaños de tipografías y unos breakpoints mínimos y máximos. Tomemos como ejemplo un tamaño de tipografía mínimo de `16px` y uno máximo de `32px`, que se hará fluida desde los `480px` hasta 1200px`.

```scss
.title {
    font-size: calc(16px + (32 - 16) * ((100vw - 480px) / 1200));
}
```

lo traducimos en variables y la función se convertirá a:

```scss
.title {
    font-size: calc(
        $min-font + ($max-font - $min-font) * ((100vw - $min-breakpoint) / $max-breakpoint)
    );
}
```

Con algunos matices, ya que como podéis ver en el ejemplo, algunos valores no llevan las unidades para poder realizar las operaciones matemáticas necesarias. Y aunque parezca una fórmula muy compleja, en realidad es una fórmula que se utiliza en otros sitios y lenguajes de programación, como por ejemplo para mapear valores, y que podemos encontrar en [Arduino](https://www.arduino.cc/en/Reference/Map). Pero hay que concederle el mérito a Mike por integrarlo con la función de CSS: **calc**. Ahora viene lo más interesante de todo, poder utilizarla en nuestro código.

Por supuesto, no tenemos que añadir esta línea cada vez que lo necesitamos. En este _Pen_ tenemos un ejemplo de la **fluid typography** utilizando un simple `@mixin` de Sass. Otro detalle es que no solamente se puede realizar de menor a mayor si no también a la inversa. 😊 **WIN WIN**

<iframe allowfullscreen="allowfullscreen" frameborder="no" height="500" scrolling="no" src="//codepen.io/italodr/embed/KNYVrj/?height=500&amp;theme-id=0&amp;default-tab=css,result&amp;embed-version=2" style="width: 100%;" title="Fluid Typography" width="300">See the Pen Fluid Typography by Italo Devoto Ramella (@italodr) on CodePen.</iframe>

El @mixin de Sass que utilizamos en [Runroom](https://www.runroom.com) ❤️

```scss
@mixin fluid-type($min-font-size, $max-font-size, $min-vw: 480px, $max-vw: 1200px) {
    $u1: unit($min-vw);
    $u2: unit($max-vw);
    $u3: unit($min-font-size);
    $u4: unit($max-font-size);

    @if $u1 == $u2 and $u1 == $u3 and $u1 == $u4 {
        font-size: $min-font-size;

        @if $min-vw != $max-vw {
            @media only screen and (min-width: $min-vw) {
                font-size: calc(
                    #{$min-font-size} + #{strip-unit($max-font-size - $min-font-size)} *
                        ((100vw - #{$min-vw}) / #{strip-unit($max-vw - $min-vw)})
                );
            }
        }

        @media only screen and (min-width: $max-vw) {
            font-size: $max-font-size;
        }
    } @else {
        @error "Detected mixed units. Please use the same units for all parameters.";
    }
}

@function strip-unit($number) {
    @return $number / ($number * 0 + 1);
}
```
