<!DOCTYPE html>
<!DOCTYPE html>: Esta declaración le dice al navegador que este documento es un archivo HTML5. Es importante porque ayuda a que el navegador interprete el contenido correctamente.

<html lang="es">
<html lang="es">: Este elemento es la raíz de tu documento HTML. El atributo lang="es" indica que el idioma principal de la página es español. Esto es útil para la accesibilidad y el SEO.

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gatitos Geniales</title>
    <link rel="stylesheet" href="styles.css">
</head>
<head>: Esta sección contiene metadatos sobre el documento, que no son visibles directamente en la página.
<meta charset="UTF-8">: Define la codificación de caracteres del documento como UTF-8, lo que permite usar caracteres especiales (como tildes).
<meta name="viewport" content="width=device-width, initial-scale=1.0">: Esto asegura que la página se vea bien en dispositivos móviles ajustando el ancho a la pantalla del dispositivo.
<title>Gatitos Geniales</title>: Establece el título de la página, que aparece en la pestaña del navegador.
<link rel="stylesheet" href="styles.css">: Enlaza el archivo CSS (styles.css) que contiene los estilos de la página.

<body>
    <div class="container">
        <h1>¡Bienvenidos a la Página de Gatitos!</h1>
        <p>Hacé clic en el gatito para que se mueva 🐱</p>
        <img id="gatito" src="https://placekitten.com/200/200" alt="Gatito adorable">
    </div>
    
    <script src="script.js"></script>
</body>
<body>: Esta sección contiene el contenido visible de la página.
<div class="container">: Un contenedor que agrupa los elementos de la página. La clase container se puede usar en CSS para aplicar estilos.
<h1>¡Bienvenidos a la Página de Gatitos!</h1>: Un encabezado de nivel 1 que muestra un mensaje destacado. h1 es el título más importante de la página.
<p>Hacé clic en el gatito para que se mueva 🐱</p>: Un párrafo que da instrucciones a los usuarios.
<img id="gatito" src="https://placekitten.com/200/200" alt="Gatito adorable">: Una imagen de un gato.
id="gatito": Asigna un identificador único a esta imagen, que será usado en JavaScript para agregar funcionalidad.
src: Especifica la URL de la imagen.
alt: Proporciona un texto alternativo que describe la imagen, útil para accesibilidad.
<script src="script.js"></script>: Enlaza el archivo JavaScript (script.js) que contiene el código para la funcionalidad de la página. Este se carga al final para asegurar que el contenido de la página esté listo antes de que se ejecute el script.

Archivo styles.css
Este archivo CSS define cómo se verá la página.

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
* { ... }: Este selector universal aplica estilos a todos los elementos.
margin: 0;: Elimina el margen predeterminado de todos los elementos.
padding: 0;: Elimina el padding predeterminado de todos los elementos.
box-sizing: border-box;: Cambia el modelo de caja para que el padding y el borde se incluyan en el ancho y alto total del elemento.

body {
    font-family: Arial, sans-serif;
    background-color: #f3f3f3;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
