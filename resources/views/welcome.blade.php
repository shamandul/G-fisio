<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>G-fisio</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link href="{{ asset('css/estilos-welcome.css') }}" rel="stylesheet">
    </head>
    <body>
        <div class="flex-center position-ref full-height">
            @if (Route::has('login'))
                <div class="top-right links">
                    @auth
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="{{ route('login') }}">Login</a>
                        <a href="{{ route('register') }}">Register</a>
                    @endauth
                </div>
            @endif
          {{-- <div class="container"> --}}

            <div class="contenedor">
              <div id="cabecera">
                <div class="flex-center title">
                  <h1>G-Fisio</h1>
                  <p>Por su salud</p>
                </div>
              </div>
            </div>
            <div class="texto">
              <h1>Ejemplo paralax</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum iure, reprehenderit quos quaerat dicta nesciunt tenetur aliquam! Aliquid unde, vero, laboriosam accusamus voluptas totam nesciunt assumenda quae voluptatibus, dolor sunt.</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum iure, reprehenderit quos quaerat dicta nesciunt tenetur aliquam! Aliquid unde, vero, laboriosam accusamus voluptas totam nesciunt assumenda quae voluptatibus, dolor sunt.</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum iure, reprehenderit quos quaerat dicta nesciunt tenetur aliquam! Aliquid unde, vero, laboriosam accusamus voluptas totam nesciunt assumenda quae voluptatibus, dolor sunt.</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum iure, reprehenderit quos quaerat dicta nesciunt tenetur aliquam! Aliquid unde, vero, laboriosam accusamus voluptas totam nesciunt assumenda quae voluptatibus, dolor sunt.</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum iure, reprehenderit quos quaerat dicta nesciunt tenetur aliquam! Aliquid unde, vero, laboriosam accusamus voluptas totam nesciunt assumenda quae voluptatibus, dolor sunt.</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum iure, reprehenderit quos quaerat dicta nesciunt tenetur aliquam! Aliquid unde, vero, laboriosam accusamus voluptas totam nesciunt assumenda quae voluptatibus, dolor sunt.</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum iure, reprehenderit quos quaerat dicta nesciunt tenetur aliquam! Aliquid unde, vero, laboriosam accusamus voluptas totam nesciunt assumenda quae voluptatibus, dolor sunt.</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum iure, reprehenderit quos quaerat dicta nesciunt tenetur aliquam! Aliquid unde, vero, laboriosam accusamus voluptas totam nesciunt assumenda quae voluptatibus, dolor sunt.</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum iure, reprehenderit quos quaerat dicta nesciunt tenetur aliquam! Aliquid unde, vero, laboriosam accusamus voluptas totam nesciunt assumenda quae voluptatibus, dolor sunt.</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum iure, reprehenderit quos quaerat dicta nesciunt tenetur aliquam! Aliquid unde, vero, laboriosam accusamus voluptas totam nesciunt assumenda quae voluptatibus, dolor sunt.</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum iure, reprehenderit quos quaerat dicta nesciunt tenetur aliquam! Aliquid unde, vero, laboriosam accusamus voluptas totam nesciunt assumenda quae voluptatibus, dolor sunt.</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum iure, reprehenderit quos quaerat dicta nesciunt tenetur aliquam! Aliquid unde, vero, laboriosam accusamus voluptas totam nesciunt assumenda quae voluptatibus, dolor sunt.</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum iure, reprehenderit quos quaerat dicta nesciunt tenetur aliquam! Aliquid unde, vero, laboriosam accusamus voluptas totam nesciunt assumenda quae voluptatibus, dolor sunt.</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum iure, reprehenderit quos quaerat dicta nesciunt tenetur aliquam! Aliquid unde, vero, laboriosam accusamus voluptas totam nesciunt assumenda quae voluptatibus, dolor sunt.</p>
          </div>
          <div class="contenedor">
            <div id="seccion1">
            </div>
          </div>

          <div class="texto">
            <h1>Ejemplo relax</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum iure, reprehenderit quos quaerat dicta nesciunt tenetur aliquam! Aliquid unde, vero, laboriosam accusamus voluptas totam nesciunt assumenda quae voluptatibus, dolor sunt.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum iure, reprehenderit quos quaerat dicta nesciunt tenetur aliquam! Aliquid unde, vero, laboriosam accusamus voluptas totam nesciunt assumenda quae voluptatibus, dolor sunt.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum iure, reprehenderit quos quaerat dicta nesciunt tenetur aliquam! Aliquid unde, vero, laboriosam accusamus voluptas totam nesciunt assumenda quae voluptatibus, dolor sunt.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum iure, reprehenderit quos quaerat dicta nesciunt tenetur aliquam! Aliquid unde, vero, laboriosam accusamus voluptas totam nesciunt assumenda quae voluptatibus, dolor sunt.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum iure, reprehenderit quos quaerat dicta nesciunt tenetur aliquam! Aliquid unde, vero, laboriosam accusamus voluptas totam nesciunt assumenda quae voluptatibus, dolor sunt.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum iure, reprehenderit quos quaerat dicta nesciunt tenetur aliquam! Aliquid unde, vero, laboriosam accusamus voluptas totam nesciunt assumenda quae voluptatibus, dolor sunt.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum iure, reprehenderit quos quaerat dicta nesciunt tenetur aliquam! Aliquid unde, vero, laboriosam accusamus voluptas totam nesciunt assumenda quae voluptatibus, dolor sunt.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum iure, reprehenderit quos quaerat dicta nesciunt tenetur aliquam! Aliquid unde, vero, laboriosam accusamus voluptas totam nesciunt assumenda quae voluptatibus, dolor sunt.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum iure, reprehenderit quos quaerat dicta nesciunt tenetur aliquam! Aliquid unde, vero, laboriosam accusamus voluptas totam nesciunt assumenda quae voluptatibus, dolor sunt.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum iure, reprehenderit quos quaerat dicta nesciunt tenetur aliquam! Aliquid unde, vero, laboriosam accusamus voluptas totam nesciunt assumenda quae voluptatibus, dolor sunt.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum iure, reprehenderit quos quaerat dicta nesciunt tenetur aliquam! Aliquid unde, vero, laboriosam accusamus voluptas totam nesciunt assumenda quae voluptatibus, dolor sunt.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum iure, reprehenderit quos quaerat dicta nesciunt tenetur aliquam! Aliquid unde, vero, laboriosam accusamus voluptas totam nesciunt assumenda quae voluptatibus, dolor sunt.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum iure, reprehenderit quos quaerat dicta nesciunt tenetur aliquam! Aliquid unde, vero, laboriosam accusamus voluptas totam nesciunt assumenda quae voluptatibus, dolor sunt.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum iure, reprehenderit quos quaerat dicta nesciunt tenetur aliquam! Aliquid unde, vero, laboriosam accusamus voluptas totam nesciunt assumenda quae voluptatibus, dolor sunt.</p>
        </div>
      </div>
    </body>
    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{ asset('js/welcome.js') }}"></script>
</html>
