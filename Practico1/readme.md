# Calculadora simple

El proyecto consiste en una calculadora simple cuyas funciones son suma, resta, multiplicación y división. Su operacion consiste en colocar los números en los campos que dice "ingrese un número" y seleccionar la operación a realizar desde el menu desplegable que se encuentra en el medio de los campos donde se ingresan los números y para obtener el resultado se debe clickear el boton "Calcular", apareciendo el resultado en el campo "resultado".
Si uno a ambos campos estan vacios arroja una advertencia al usuario, si se quiere dividir por cero arroja una alerta diciendo que no es posible y si se ingresan valores distintos a números arrojará una alerta diciendo que se ingresaron valores invalidos. Se mostrará un resultado en el campo "resultado" si el valor del mismo se encuentra entre 1x10^-9 y 1x10^9 y si está entre -1x10^-9 y -1x10^9, caso contrario mostrará una alerta dicendo que el resultado es muy pequeño o muy grande para ser mostrado.

## Detalle de lo implementado📋

Como esta calculadora iba a ser utilizada desde una pagina web se utilizó el lenguaje de marcado para la elaboración de paginas web. Para implementar el ingreso de números se utilizó dos input y para la selección de la operación a realizar un menú despegable mediante el select, el resultado se mostrará en otro input y para realizar el calculo se utilizó un boton del tipo onclick.
Para la realizar las operaciones y validación de los datos ingresados se utilizó un codigo de javascript. Para ello se utilizó una funcion que es llamada desde el index.html cuando se clickea el boton "Calcular".
Esta función lo que realiza en un primer momento es validar que se hayan ingresados datos, para luego convertirlos en números, si se ingresan caracteres que no son números arrojará en el campo "resultado" el texto "Valores Invalidos", en caso que se quiera dividir por cero aparecera un alerta que dira que no es posible realizar la división. Todo esto fue implementado mediante sentencias if-else.
Para la realización de las operaciones matemáticas se utiliza la sentencia switch-case en donde se verifica la operación seleccionada desde el menú desplegable y se realiza solamente la operación seleccionada. Lo siguiente es validar el valor del resultado para que se encuentre entre un cierto rango de valores con una sentencia if-else, si está entre estos valores se obtendrá un resultado, caso contrario un alerta que dirá que el resultado es muy grande o muy pequeño para ser mostrado

## Funcionalidades adicionales

Se ha agregado un boton que permite limpiar los campos donde se ingresan los números y el de resultado y queda por defecto la operación suma. 
La otra funcionalidad implementada fue la de cambiar el color del fondo dependiendo de los colores que se tiene desde el menu desplegable, para que el cambio surta efecto se debe clickear en un boton que dice "Cambiar fondo".

## Detalle de la implementación de las funcionalidades adicionales

Para la limpieza de los campos se utilizó un boton onclick en el codigo .html el cual llama a una función en en el codigo javascript que coloca valores vacios en los campos donde se ingresan los número y en el resultado y asigna la operación suma.
Para la funcionalidad de cambir el color del fondo se utilizó un menu desplegable desde el codigo .html y mediante el uso del boton se llama a una función en el código de javascript que tiene en su interior un switch case para verificar el color de fondo seleccionado y asignar el color de fondo seleccionado por el usuario

## Pruebas realizadas⚙️

Las pruebas realizadas se pueden ver en la siguiente tabla:

| Operación | Resultado esperado                    | Resultado obtenido                    |
|:---------:|:-------------------------------------:|:-------------------------------------:|
|   5+5     |        10                             |        10                             | 
|   5*5     |        25                             |        25                             |
|   5/5     |        1                              |        1                              |
|   10-5    |        5                              |        5                              |
|   r+5     |"Valores Invalidos"                    | "Valores Invalidos"                   |
|   10/0    |"La division por cero no es posible"   |"La division por cero no es posible"   |
|   ""+10   |"No se pueden ingresar valores nulos"  |"No se pueden ingresar valores nulos"  |
|12.5+5.2   |   17.7                                |       17.7                            |
|12.5-5.2   |   7.3                                 |       7.3                             |
|12.5*5.2   |   65                                  |       65                              |
|12.5/5.2   |   2.403......                         |       2.403......                     |
|2.25*2.35  |   5.2875                              |5.2875000000000005                     |
|2.25/2.35  |   0.95744......                       |   0.95744.......                      |
|1.0501-1.23|   -0.1799                             |   -0.17989999....                     |

Como se puede ver se tiene diferencias en el caso de operaciones con numeros decimales. No se implemento una solución para este caso ya que se tomará que el usuario no utilizará tantos decimales como los mostrados o redondeara de acuerdo a su criterio.
Con respecto a las funcionalidades adicionales no se han encontrado errores.

## Fuentes📖

<https://developer.mozilla.org/es/docs/Web/HTML/Element/input>

<https://developer.mozilla.org/es/docs/Web/HTML/Element/select>

<https://developer.mozilla.org/es/docs/Web/HTML/Element/button>

<https://developer.mozilla.org/es/docs/Web/CSS/CSS_Grid_Layout>

<https://css-tricks.com/animating-css-grid-how-to-examples/>

<https://www.w3schools.com/js/js_validation.asp>

<https://www.w3schools.com/js/js_errors.asp>

<https://www.w3schools.com/jsref/jsref_try_catch.asp>

<https://www.w3schools.com/jsref/met_win_alert.asp>

<https://www.w3schools.com/jsref/prop_style_visibility.asp>

<https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/isNaN>

<https://developer.mozilla.org/es/docs/Web/API/Window/prompt>

<https://developer.mozilla.org/es/docs/Web/API/Window/alert>

<https://www.markdownguide.org/basic-syntax>

## Autor ✒️
* **Federico Menendez**  [Github](https://github.com/FedeMenendez)