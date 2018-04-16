<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Confirmación de Email</title>
  </head>
  <body>
    <h1>Gracias por registrarte</h1>
    <p>
      Puedes confirmar tu <a href='{{ url("registro/email/{$user->codigo_activacion}")}}'>email aquí</a>
    </p>
  </body>
</html>
