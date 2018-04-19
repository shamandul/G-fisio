<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/pdf.css">
    <title>Factura</title>
</head>

<body>
    <div class="contenedor">
        <div class="encabezado">
            <div id="logo">
                <img class="img-logo" src="img/icono.svg" alt="">
            </div>
            <div id="titulo">
                <h1>G-Fisio</h1>
            </div>
            <div id="enc-datos">
                <p> <b>Fecha: </b>{{$datos[0]->fecha_emision}} </p>
                <p> <b>Cliente: </b> {{$datos[0]->nombre}} {{$datos[0]->apellidos}}</p>
                <p> <b>Empleado: </b> {{$datos[0]->nombre_empleado}} {{$datos[0]->apellidos_empleado}}</p>
            </div>
        </div>

        <div class="contenedor-datos">
            <div class="datos">
                <h4>Servicio</h4>
                <p>{{$datos[0]->nombre_servicio}}</p>
            </div>
            <div class="descripcion">
                <h4>Descripción</h4>
                <p>{{$datos[0]->descripcion}}</p>
            </div>
            <div class="datos">
                <h4>Fecha de la cita</h4>
                <p>{{$datos[0]->fecha}}</p>

            </div>
            <div class="datos">
                <h4>Hora de entrada</h4>
                <p><span>{{$datos[0]->hora_inicio}}</span> a <span>{{$datos[0]->hora_fin}}</span></p>
            </div>
            <div class="datos">
                <h4>Sala</h4>
                <p>{{$datos[0]->nombre_sala}}</p>
            </div>
            <div class="datos">
                <h4>Precio</h4>
                <p>{{$datos[0]->precio}}</p>
            </div>
        </div>
    </div>
    <div class="contenedor-estado">
        <h3 class="text-capitalize">{{$datos[0]->estado}}</h3>
    </div>

</body>

</html>
