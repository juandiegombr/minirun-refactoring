# MiniRun Refactoring

Este es el repositorio con el que vamos a trabajar. Dentro está el código de un sistema de pago implementado en diferentes lenguajes. El código es el mismo en todos.
Lo que se pretende con este ejercicio es, en base a un código legacy, hacer los cambios necesarios para implementar un nuevo descuento (Ver los dos siguientes puntos).

## Funcionalidad existente

Este código implementa un sistema de pago que calcula el precio total de una serie de artículos.

En un supermercado normal, las cosas se identifican mediante unidades de mantenimiento de stock. En nuestra tienda, usaremos letras individuales del alfabeto (A, B, C, etc.). Nuestros productos tienen un precio individual. Además, algunos artículos tienen varias tarifas: compre uno de ellos y le costarán X centimos. Por ejemplo, el artículo "A" puede costar 50 centimos individualmente, pero esta semana tenemos una oferta especial: compre tres "A" y le costarán 1.30 €. Los precios de esta semana son:

| Unidad | Precio unitario | Precio especial |
|--------|-----------------|-----------------|
|   A    |        50       |    3 por 130    |
|   B    |        30       |    2 por 45     |
|   C    |        20       |                 |
|   D    |        15       |                 |

Nuestro proceso de pago acepta artículos en cualquier orden, por lo que si escaneamos un B, un A y otro B, reconoceremos las dos B y les daremos un precio de 45 (para un precio total de 95). Debido a que los precios cambian con frecuencia, debemos poder pasar un conjunto de reglas de precios cada vez que comencemos a manejar una transacción de pago.

Ejemplos:

- AB = 80
- AA = 100
- AAA = 130
- CDBA = 115
- AAAA = 180
- AAAB = 160
- AAABB = 175
- AAAAA = 230
- DABABA = 190
- AAAAAA = 260
- AAAABBD = 190

## Funcionalidad nueva

Si se compran juntos un A, un B y un C, y no se ha aplicado ningun otro descuento, se descontarán 5 euros del precio final.

Ejemplos:

- ABCD = 110
- ABC = 95
- AAABC = 180

## Código

La interfaz pública de nuestra clase Checkout tiene dos métodos:

- `scan`: para scanear el artículo
- `total`: para devolver el precio total

Además, le inyectaremos las PricingRules por el constructor.

```RUBY
class PricingRules

class Checkout
    constructor(pricing_rules)
    scan(item)
    total()
```

**Importante**: La clase Checkout se usa en muchos sitios de nuestro sistema, y modificar su interfaz pública no es una buena idea, así que no lo haremos.

## Infraesctructura

En este repositorio encontraréis el código de la kata en tres lenguajes:

- Ruby
- JavaScript
- PHP

Todo está preparado con **docker** para que no tengais que instalar nada y podais poneros directamente con el ejercicio. Dentro de cada carpeta está el código de cada lenguaje con un **README.md** explicando como usarlo.
