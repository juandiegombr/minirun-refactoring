## Funcionalidad del código

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


## Código

La interfaz pública de nuestra clase Checkout tiene dos métodos:
- scan: para scanear el artículo
- total: para devolver el precio total

Además, para construir un objeto Checkout, necesitamos pasarle un objeto PricingRules:

- `new Checkout(new PricingRule())`

## Infraesctructura

En este repositorio encontraréis el código de la kata en tres lenguajes:

- Ruby
- JavaScript
- PHP

Además existe un *docker* para poder tener la infrastructura básica para poder ejecutar el código. Podéis acceder desde el directorio del lenguaje que elijáis ejecutando: `docker/console`

