@extends('layouts.app')
@section('estilos')
  <link href="{{ asset('css/toastr.css') }}" rel="stylesheet">
@endsection
@section('content')
<div class="container">
  <div  id="cita-crud" class="row">
    <div class="col-sm-12 col-md-6">
      
  </div>
</div>
@endsection
@section('script')
  <!-- Cargamos Vue, Axios, toastr y nuestro Script -->
  <script src="{{ asset('js/jquery.js') }}"></script>
  <script src="{{ asset('js/vue.js') }}"></script>
  <script src="{{ asset('js/axios.js') }}"></script>
  <script src="{{ asset('js/toastr.js') }}"></script>
  {{-- <script src="{{ asset('js/script-citas.js') }}"></script> --}}
@endsection
