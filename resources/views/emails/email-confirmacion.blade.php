<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Confirmación de Email</title>
  </head>
  <body style="background-color:darkslategray; color: darkgray;">
    <table style="width: 100vw; height: 10vh;">
        <thead>
            <th>
                <h1 style="color: darkgrey">Gracias por registrarte</h1>
            </th>
        </thead>
        <tbody>
            <tr>
                <td style="height: 60vh; background-image: url({{ asset('img/carta.svg') }}); background-repeat: no-repeat; background-size: 20%; background-position: center;"> </td>
            </tr>
            <tr>
                <td style="color: darkgray;">
                    <h4 style="text-align: center">Bienvenido a G-Fisio</h4>
                    <p style="text-align: center; padding-left: 10%;padding-right: 10%">Una vez que hagas cick en el enlace ya estaras totalmente registrado en nuestra web, donde tendrás acceso a tu perfil de usuario.
                    </p>
                    <p style="text-align: center">
                        También podrás pedir y ver tus citas y descargarte las facturas.
                    </p>
                </td>
            </tr>
            <tr>
                <td>
                    <p style="text-align: center"> Puedes confirmar tu <a href='{{ url("registro/email/{$user->codigo_activacion}")}}'>correo aquí</a></p>
                </td>
            </tr>
        </tbody>
    </table>
  </body>
</html>
