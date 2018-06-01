
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:App" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App.html">App</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:App_Console" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Console.html">Console</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Console_Kernel" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Console/Kernel.html">Kernel</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Exceptions" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Exceptions.html">Exceptions</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Exceptions_Handler" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Exceptions/Handler.html">Handler</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Http" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Http.html">Http</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:App_Http_Controllers" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Http/Controllers.html">Controllers</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:App_Http_Controllers_Auth" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Http/Controllers/Auth.html">Auth</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Http_Controllers_Auth_ForgotPasswordController" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="App/Http/Controllers/Auth/ForgotPasswordController.html">ForgotPasswordController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_Auth_LoginController" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="App/Http/Controllers/Auth/LoginController.html">LoginController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_Auth_RegisterController" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="App/Http/Controllers/Auth/RegisterController.html">RegisterController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_Auth_ResetPasswordController" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="App/Http/Controllers/Auth/ResetPasswordController.html">ResetPasswordController</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:App_Http_Controllers_AtiendeController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/AtiendeController.html">AtiendeController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_CitasController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/CitasController.html">CitasController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_Controller" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/Controller.html">Controller</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_FacturasController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/FacturasController.html">FacturasController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_HomeController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/HomeController.html">HomeController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_HorasController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/HorasController.html">HorasController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_SalasController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/SalasController.html">SalasController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_ServiciosController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/ServiciosController.html">ServiciosController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_UsersController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/UsersController.html">UsersController</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Http_Middleware" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Http/Middleware.html">Middleware</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Http_Middleware_Activo" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Middleware/Activo.html">Activo</a>                    </div>                </li>                            <li data-name="class:App_Http_Middleware_Admin" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Middleware/Admin.html">Admin</a>                    </div>                </li>                            <li data-name="class:App_Http_Middleware_EncryptCookies" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Middleware/EncryptCookies.html">EncryptCookies</a>                    </div>                </li>                            <li data-name="class:App_Http_Middleware_RedirectIfAuthenticated" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Middleware/RedirectIfAuthenticated.html">RedirectIfAuthenticated</a>                    </div>                </li>                            <li data-name="class:App_Http_Middleware_TrimStrings" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Middleware/TrimStrings.html">TrimStrings</a>                    </div>                </li>                            <li data-name="class:App_Http_Middleware_TrustProxies" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Middleware/TrustProxies.html">TrustProxies</a>                    </div>                </li>                            <li data-name="class:App_Http_Middleware_VerifyCsrfToken" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Middleware/VerifyCsrfToken.html">VerifyCsrfToken</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:App_Http_Kernel" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Http/Kernel.html">Kernel</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Providers" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Providers.html">Providers</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Providers_AppServiceProvider" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Providers/AppServiceProvider.html">AppServiceProvider</a>                    </div>                </li>                            <li data-name="class:App_Providers_AuthServiceProvider" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Providers/AuthServiceProvider.html">AuthServiceProvider</a>                    </div>                </li>                            <li data-name="class:App_Providers_BroadcastServiceProvider" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Providers/BroadcastServiceProvider.html">BroadcastServiceProvider</a>                    </div>                </li>                            <li data-name="class:App_Providers_EventServiceProvider" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Providers/EventServiceProvider.html">EventServiceProvider</a>                    </div>                </li>                            <li data-name="class:App_Providers_RouteServiceProvider" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Providers/RouteServiceProvider.html">RouteServiceProvider</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_mail" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/mail.html">mail</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_mail_EmailConfirmacion" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/mail/EmailConfirmacion.html">EmailConfirmacion</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:App_Atiende" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="App/Atiende.html">Atiende</a>                    </div>                </li>                            <li data-name="class:App_Cita" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="App/Cita.html">Cita</a>                    </div>                </li>                            <li data-name="class:App_Factura" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="App/Factura.html">Factura</a>                    </div>                </li>                            <li data-name="class:App_Hora" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="App/Hora.html">Hora</a>                    </div>                </li>                            <li data-name="class:App_Sala" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="App/Sala.html">Sala</a>                    </div>                </li>                            <li data-name="class:App_Servicio" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="App/Servicio.html">Servicio</a>                    </div>                </li>                            <li data-name="class:App_User" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="App/User.html">User</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Tests" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Tests.html">Tests</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Tests_Browser" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Tests/Browser.html">Browser</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Tests_Browser_Pages" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Tests/Browser/Pages.html">Pages</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Tests_Browser_Pages_HomePage" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Tests/Browser/Pages/HomePage.html">HomePage</a>                    </div>                </li>                            <li data-name="class:Tests_Browser_Pages_Page" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Tests/Browser/Pages/Page.html">Page</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Tests_Browser_LoginTest" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Tests/Browser/LoginTest.html">LoginTest</a>                    </div>                </li>                            <li data-name="class:Tests_Browser_RegisterTest" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Tests/Browser/RegisterTest.html">RegisterTest</a>                    </div>                </li>                            <li data-name="class:Tests_Browser_WelcomeTest" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Tests/Browser/WelcomeTest.html">WelcomeTest</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Tests_Feature" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Tests/Feature.html">Feature</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Tests_Feature_LoginTest" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Tests/Feature/LoginTest.html">LoginTest</a>                    </div>                </li>                            <li data-name="class:Tests_Feature_routerTest" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Tests/Feature/routerTest.html">routerTest</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Tests_Unit" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Tests/Unit.html">Unit</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Tests_Unit_CitasTest" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Tests/Unit/CitasTest.html">CitasTest</a>                    </div>                </li>                            <li data-name="class:Tests_Unit_FacturasTest" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Tests/Unit/FacturasTest.html">FacturasTest</a>                    </div>                </li>                            <li data-name="class:Tests_Unit_HorasTest" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Tests/Unit/HorasTest.html">HorasTest</a>                    </div>                </li>                            <li data-name="class:Tests_Unit_SalasTest" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Tests/Unit/SalasTest.html">SalasTest</a>                    </div>                </li>                            <li data-name="class:Tests_Unit_ServiciosTest" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Tests/Unit/ServiciosTest.html">ServiciosTest</a>                    </div>                </li>                            <li data-name="class:Tests_Unit_UsersTest" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Tests/Unit/UsersTest.html">UsersTest</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Tests_CreatesApplication" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Tests/CreatesApplication.html">CreatesApplication</a>                    </div>                </li>                            <li data-name="class:Tests_DuskTestCase" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Tests/DuskTestCase.html">DuskTestCase</a>                    </div>                </li>                            <li data-name="class:Tests_TestCase" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Tests/TestCase.html">TestCase</a>                    </div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "App.html", "name": "App", "doc": "Namespace App"},{"type": "Namespace", "link": "App/Console.html", "name": "App\\Console", "doc": "Namespace App\\Console"},{"type": "Namespace", "link": "App/Exceptions.html", "name": "App\\Exceptions", "doc": "Namespace App\\Exceptions"},{"type": "Namespace", "link": "App/Http.html", "name": "App\\Http", "doc": "Namespace App\\Http"},{"type": "Namespace", "link": "App/Http/Controllers.html", "name": "App\\Http\\Controllers", "doc": "Namespace App\\Http\\Controllers"},{"type": "Namespace", "link": "App/Http/Controllers/Auth.html", "name": "App\\Http\\Controllers\\Auth", "doc": "Namespace App\\Http\\Controllers\\Auth"},{"type": "Namespace", "link": "App/Http/Middleware.html", "name": "App\\Http\\Middleware", "doc": "Namespace App\\Http\\Middleware"},{"type": "Namespace", "link": "App/Providers.html", "name": "App\\Providers", "doc": "Namespace App\\Providers"},{"type": "Namespace", "link": "App/mail.html", "name": "App\\mail", "doc": "Namespace App\\mail"},{"type": "Namespace", "link": "Tests.html", "name": "Tests", "doc": "Namespace Tests"},{"type": "Namespace", "link": "Tests/Browser.html", "name": "Tests\\Browser", "doc": "Namespace Tests\\Browser"},{"type": "Namespace", "link": "Tests/Browser/Pages.html", "name": "Tests\\Browser\\Pages", "doc": "Namespace Tests\\Browser\\Pages"},{"type": "Namespace", "link": "Tests/Feature.html", "name": "Tests\\Feature", "doc": "Namespace Tests\\Feature"},{"type": "Namespace", "link": "Tests/Unit.html", "name": "Tests\\Unit", "doc": "Namespace Tests\\Unit"},
            
            {"type": "Class", "fromName": "App", "fromLink": "App.html", "link": "App/Atiende.html", "name": "App\\Atiende", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App", "fromLink": "App.html", "link": "App/Cita.html", "name": "App\\Cita", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Console", "fromLink": "App/Console.html", "link": "App/Console/Kernel.html", "name": "App\\Console\\Kernel", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Console\\Kernel", "fromLink": "App/Console/Kernel.html", "link": "App/Console/Kernel.html#method_schedule", "name": "App\\Console\\Kernel::schedule", "doc": "&quot;Define the application&#039;s command schedule.&quot;"},
                    {"type": "Method", "fromName": "App\\Console\\Kernel", "fromLink": "App/Console/Kernel.html", "link": "App/Console/Kernel.html#method_commands", "name": "App\\Console\\Kernel::commands", "doc": "&quot;Register the commands for the application.&quot;"},
            
            {"type": "Class", "fromName": "App\\Exceptions", "fromLink": "App/Exceptions.html", "link": "App/Exceptions/Handler.html", "name": "App\\Exceptions\\Handler", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Exceptions\\Handler", "fromLink": "App/Exceptions/Handler.html", "link": "App/Exceptions/Handler.html#method_report", "name": "App\\Exceptions\\Handler::report", "doc": "&quot;Report or log an exception.&quot;"},
                    {"type": "Method", "fromName": "App\\Exceptions\\Handler", "fromLink": "App/Exceptions/Handler.html", "link": "App/Exceptions/Handler.html#method_render", "name": "App\\Exceptions\\Handler::render", "doc": "&quot;Render an exception into an HTTP response.&quot;"},
            
            {"type": "Class", "fromName": "App", "fromLink": "App.html", "link": "App/Factura.html", "name": "App\\Factura", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App", "fromLink": "App.html", "link": "App/Hora.html", "name": "App\\Hora", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/AtiendeController.html", "name": "App\\Http\\Controllers\\AtiendeController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\AtiendeController", "fromLink": "App/Http/Controllers/AtiendeController.html", "link": "App/Http/Controllers/AtiendeController.html#method_index", "name": "App\\Http\\Controllers\\AtiendeController::index", "doc": "&quot;Display a listing of the resource.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\AtiendeController", "fromLink": "App/Http/Controllers/AtiendeController.html", "link": "App/Http/Controllers/AtiendeController.html#method_store", "name": "App\\Http\\Controllers\\AtiendeController::store", "doc": "&quot;Store a newly created resource in storage.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\AtiendeController", "fromLink": "App/Http/Controllers/AtiendeController.html", "link": "App/Http/Controllers/AtiendeController.html#method_buscar", "name": "App\\Http\\Controllers\\AtiendeController::buscar", "doc": "&quot;Display the specified resource.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\AtiendeController", "fromLink": "App/Http/Controllers/AtiendeController.html", "link": "App/Http/Controllers/AtiendeController.html#method_edit", "name": "App\\Http\\Controllers\\AtiendeController::edit", "doc": "&quot;Show the form for editing the specified resource.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\AtiendeController", "fromLink": "App/Http/Controllers/AtiendeController.html", "link": "App/Http/Controllers/AtiendeController.html#method_update", "name": "App\\Http\\Controllers\\AtiendeController::update", "doc": "&quot;Update the specified resource in storage.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\AtiendeController", "fromLink": "App/Http/Controllers/AtiendeController.html", "link": "App/Http/Controllers/AtiendeController.html#method_destroy", "name": "App\\Http\\Controllers\\AtiendeController::destroy", "doc": "&quot;Remove the specified resource from storage.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers\\Auth", "fromLink": "App/Http/Controllers/Auth.html", "link": "App/Http/Controllers/Auth/ForgotPasswordController.html", "name": "App\\Http\\Controllers\\Auth\\ForgotPasswordController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\ForgotPasswordController", "fromLink": "App/Http/Controllers/Auth/ForgotPasswordController.html", "link": "App/Http/Controllers/Auth/ForgotPasswordController.html#method___construct", "name": "App\\Http\\Controllers\\Auth\\ForgotPasswordController::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers\\Auth", "fromLink": "App/Http/Controllers/Auth.html", "link": "App/Http/Controllers/Auth/LoginController.html", "name": "App\\Http\\Controllers\\Auth\\LoginController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\LoginController", "fromLink": "App/Http/Controllers/Auth/LoginController.html", "link": "App/Http/Controllers/Auth/LoginController.html#method___construct", "name": "App\\Http\\Controllers\\Auth\\LoginController::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers\\Auth", "fromLink": "App/Http/Controllers/Auth.html", "link": "App/Http/Controllers/Auth/RegisterController.html", "name": "App\\Http\\Controllers\\Auth\\RegisterController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\RegisterController", "fromLink": "App/Http/Controllers/Auth/RegisterController.html", "link": "App/Http/Controllers/Auth/RegisterController.html#method___construct", "name": "App\\Http\\Controllers\\Auth\\RegisterController::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\RegisterController", "fromLink": "App/Http/Controllers/Auth/RegisterController.html", "link": "App/Http/Controllers/Auth/RegisterController.html#method_validator", "name": "App\\Http\\Controllers\\Auth\\RegisterController::validator", "doc": "&quot;Get a validator for an incoming registration request.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\RegisterController", "fromLink": "App/Http/Controllers/Auth/RegisterController.html", "link": "App/Http/Controllers/Auth/RegisterController.html#method_create", "name": "App\\Http\\Controllers\\Auth\\RegisterController::create", "doc": "&quot;Create a new user instance after a valid registration.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\RegisterController", "fromLink": "App/Http/Controllers/Auth/RegisterController.html", "link": "App/Http/Controllers/Auth/RegisterController.html#method_register", "name": "App\\Http\\Controllers\\Auth\\RegisterController::register", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\RegisterController", "fromLink": "App/Http/Controllers/Auth/RegisterController.html", "link": "App/Http/Controllers/Auth/RegisterController.html#method_confirmEmail", "name": "App\\Http\\Controllers\\Auth\\RegisterController::confirmEmail", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers\\Auth", "fromLink": "App/Http/Controllers/Auth.html", "link": "App/Http/Controllers/Auth/ResetPasswordController.html", "name": "App\\Http\\Controllers\\Auth\\ResetPasswordController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\ResetPasswordController", "fromLink": "App/Http/Controllers/Auth/ResetPasswordController.html", "link": "App/Http/Controllers/Auth/ResetPasswordController.html#method___construct", "name": "App\\Http\\Controllers\\Auth\\ResetPasswordController::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/CitasController.html", "name": "App\\Http\\Controllers\\CitasController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\CitasController", "fromLink": "App/Http/Controllers/CitasController.html", "link": "App/Http/Controllers/CitasController.html#method_index", "name": "App\\Http\\Controllers\\CitasController::index", "doc": "&quot;Nos devuelve todas las Citas y los datos para la paginaci\u00f3n&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\CitasController", "fromLink": "App/Http/Controllers/CitasController.html", "link": "App/Http/Controllers/CitasController.html#method_getCitasPorClientes", "name": "App\\Http\\Controllers\\CitasController::getCitasPorClientes", "doc": "&quot;Nos devuelve todas las Citas por Clientes y los datos para la paginaci\u00f3n&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\CitasController", "fromLink": "App/Http/Controllers/CitasController.html", "link": "App/Http/Controllers/CitasController.html#method_getCitasPorEmpleados", "name": "App\\Http\\Controllers\\CitasController::getCitasPorEmpleados", "doc": "&quot;Nos devuelve todas las Citas por Empleados y los datos para la paginaci\u00f3n&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\CitasController", "fromLink": "App/Http/Controllers/CitasController.html", "link": "App/Http/Controllers/CitasController.html#method_getCitasPorPendientes", "name": "App\\Http\\Controllers\\CitasController::getCitasPorPendientes", "doc": "&quot;Nos devuelve todas las Citas por pendientes y los datos para la paginaci\u00f3n&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\CitasController", "fromLink": "App/Http/Controllers/CitasController.html", "link": "App/Http/Controllers/CitasController.html#method_store", "name": "App\\Http\\Controllers\\CitasController::store", "doc": "&quot;M\u00e9todo que nos permite guardar las citas.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\CitasController", "fromLink": "App/Http/Controllers/CitasController.html", "link": "App/Http/Controllers/CitasController.html#method_update", "name": "App\\Http\\Controllers\\CitasController::update", "doc": "&quot;Nos permite actualizar los datos&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\CitasController", "fromLink": "App/Http/Controllers/CitasController.html", "link": "App/Http/Controllers/CitasController.html#method_destroy", "name": "App\\Http\\Controllers\\CitasController::destroy", "doc": "&quot;Nos permite eliminar una cita&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\CitasController", "fromLink": "App/Http/Controllers/CitasController.html", "link": "App/Http/Controllers/CitasController.html#method_citasInNotFacturas", "name": "App\\Http\\Controllers\\CitasController::citasInNotFacturas", "doc": "&quot;Nos devuelve todas las Citas que no tienen asignada una factura&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\CitasController", "fromLink": "App/Http/Controllers/CitasController.html", "link": "App/Http/Controllers/CitasController.html#method_showAllUser", "name": "App\\Http\\Controllers\\CitasController::showAllUser", "doc": "&quot;Nos devuelve todas las Citas de un cliente y los datos para la paginaci\u00f3n&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/Controller.html", "name": "App\\Http\\Controllers\\Controller", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/FacturasController.html", "name": "App\\Http\\Controllers\\FacturasController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\FacturasController", "fromLink": "App/Http/Controllers/FacturasController.html", "link": "App/Http/Controllers/FacturasController.html#method_index", "name": "App\\Http\\Controllers\\FacturasController::index", "doc": "&quot;Nos devuelve todas las Facturas y los datos para la paginaci\u00f3n&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\FacturasController", "fromLink": "App/Http/Controllers/FacturasController.html", "link": "App/Http/Controllers/FacturasController.html#method_store", "name": "App\\Http\\Controllers\\FacturasController::store", "doc": "&quot;M\u00e9todo que nos permite guardar la factura.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\FacturasController", "fromLink": "App/Http/Controllers/FacturasController.html", "link": "App/Http/Controllers/FacturasController.html#method_update", "name": "App\\Http\\Controllers\\FacturasController::update", "doc": "&quot;Nos permite actualizar los datos&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\FacturasController", "fromLink": "App/Http/Controllers/FacturasController.html", "link": "App/Http/Controllers/FacturasController.html#method_destroy", "name": "App\\Http\\Controllers\\FacturasController::destroy", "doc": "&quot;Nos permite eliminar una Factura&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\FacturasController", "fromLink": "App/Http/Controllers/FacturasController.html", "link": "App/Http/Controllers/FacturasController.html#method_crearPdf", "name": "App\\Http\\Controllers\\FacturasController::crearPdf", "doc": "&quot;Funci\u00f3n que nos permite crear un pdf con una factura&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/HomeController.html", "name": "App\\Http\\Controllers\\HomeController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\HomeController", "fromLink": "App/Http/Controllers/HomeController.html", "link": "App/Http/Controllers/HomeController.html#method___construct", "name": "App\\Http\\Controllers\\HomeController::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\HomeController", "fromLink": "App/Http/Controllers/HomeController.html", "link": "App/Http/Controllers/HomeController.html#method_index", "name": "App\\Http\\Controllers\\HomeController::index", "doc": "&quot;Show the application dashboard.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/HorasController.html", "name": "App\\Http\\Controllers\\HorasController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\HorasController", "fromLink": "App/Http/Controllers/HorasController.html", "link": "App/Http/Controllers/HorasController.html#method_index", "name": "App\\Http\\Controllers\\HorasController::index", "doc": "&quot;Nos devuelve todas las horass y los datos para la paginaci\u00f3n&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\HorasController", "fromLink": "App/Http/Controllers/HorasController.html", "link": "App/Http/Controllers/HorasController.html#method_showAll", "name": "App\\Http\\Controllers\\HorasController::showAll", "doc": "&quot;Nos devuelve todas las Horas&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\HorasController", "fromLink": "App/Http/Controllers/HorasController.html", "link": "App/Http/Controllers/HorasController.html#method_showAllLibre", "name": "App\\Http\\Controllers\\HorasController::showAllLibre", "doc": "&quot;Nos devuelve todas las Horas para una fecha dada&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\HorasController", "fromLink": "App/Http/Controllers/HorasController.html", "link": "App/Http/Controllers/HorasController.html#method_showAllEditLibre", "name": "App\\Http\\Controllers\\HorasController::showAllEditLibre", "doc": "&quot;Nos devuelve  la hora actual&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\HorasController", "fromLink": "App/Http/Controllers/HorasController.html", "link": "App/Http/Controllers/HorasController.html#method_store", "name": "App\\Http\\Controllers\\HorasController::store", "doc": "&quot;M\u00e9todo que nos permite guardar las horas.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\HorasController", "fromLink": "App/Http/Controllers/HorasController.html", "link": "App/Http/Controllers/HorasController.html#method_update", "name": "App\\Http\\Controllers\\HorasController::update", "doc": "&quot;Nos permite actualizar los datos&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\HorasController", "fromLink": "App/Http/Controllers/HorasController.html", "link": "App/Http/Controllers/HorasController.html#method_destroy", "name": "App\\Http\\Controllers\\HorasController::destroy", "doc": "&quot;Nos permite eliminar un hora&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/SalasController.html", "name": "App\\Http\\Controllers\\SalasController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\SalasController", "fromLink": "App/Http/Controllers/SalasController.html", "link": "App/Http/Controllers/SalasController.html#method_index", "name": "App\\Http\\Controllers\\SalasController::index", "doc": "&quot;Nos devuelve todas las y los datos para la paginaci\u00f3n&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\SalasController", "fromLink": "App/Http/Controllers/SalasController.html", "link": "App/Http/Controllers/SalasController.html#method_showAll", "name": "App\\Http\\Controllers\\SalasController::showAll", "doc": "&quot;Nos devuelve todos las salas&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\SalasController", "fromLink": "App/Http/Controllers/SalasController.html", "link": "App/Http/Controllers/SalasController.html#method_showAllLibre", "name": "App\\Http\\Controllers\\SalasController::showAllLibre", "doc": "&quot;Nos devuelve todos las salas libres para una fecha dada&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\SalasController", "fromLink": "App/Http/Controllers/SalasController.html", "link": "App/Http/Controllers/SalasController.html#method_showAllEditLibre", "name": "App\\Http\\Controllers\\SalasController::showAllEditLibre", "doc": "&quot;Nos devuelve la salas actual&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\SalasController", "fromLink": "App/Http/Controllers/SalasController.html", "link": "App/Http/Controllers/SalasController.html#method_store", "name": "App\\Http\\Controllers\\SalasController::store", "doc": "&quot;M\u00e9todo que nos permite guardar los servicios.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\SalasController", "fromLink": "App/Http/Controllers/SalasController.html", "link": "App/Http/Controllers/SalasController.html#method_update", "name": "App\\Http\\Controllers\\SalasController::update", "doc": "&quot;Nos permite actualizar los datos.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\SalasController", "fromLink": "App/Http/Controllers/SalasController.html", "link": "App/Http/Controllers/SalasController.html#method_destroy", "name": "App\\Http\\Controllers\\SalasController::destroy", "doc": "&quot;Nos permite eliminar una sala.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/ServiciosController.html", "name": "App\\Http\\Controllers\\ServiciosController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\ServiciosController", "fromLink": "App/Http/Controllers/ServiciosController.html", "link": "App/Http/Controllers/ServiciosController.html#method_index", "name": "App\\Http\\Controllers\\ServiciosController::index", "doc": "&quot;Nos devuelve todos los Servicios y los datos para la paginaci\u00f3n&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\ServiciosController", "fromLink": "App/Http/Controllers/ServiciosController.html", "link": "App/Http/Controllers/ServiciosController.html#method_showAll", "name": "App\\Http\\Controllers\\ServiciosController::showAll", "doc": "&quot;Nos devuelve todos los Servicios&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\ServiciosController", "fromLink": "App/Http/Controllers/ServiciosController.html", "link": "App/Http/Controllers/ServiciosController.html#method_store", "name": "App\\Http\\Controllers\\ServiciosController::store", "doc": "&quot;M\u00e9todo que nos permite guardar los servicios.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\ServiciosController", "fromLink": "App/Http/Controllers/ServiciosController.html", "link": "App/Http/Controllers/ServiciosController.html#method_update", "name": "App\\Http\\Controllers\\ServiciosController::update", "doc": "&quot;Nos permite actualizar los datos&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\ServiciosController", "fromLink": "App/Http/Controllers/ServiciosController.html", "link": "App/Http/Controllers/ServiciosController.html#method_destroy", "name": "App\\Http\\Controllers\\ServiciosController::destroy", "doc": "&quot;Nos permite eliminar un servicio&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/UsersController.html", "name": "App\\Http\\Controllers\\UsersController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\UsersController", "fromLink": "App/Http/Controllers/UsersController.html", "link": "App/Http/Controllers/UsersController.html#method_index", "name": "App\\Http\\Controllers\\UsersController::index", "doc": "&quot;Nos devuelve todos los usuarios y los datos para la paginaci\u00f3n&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\UsersController", "fromLink": "App/Http/Controllers/UsersController.html", "link": "App/Http/Controllers/UsersController.html#method_showUserSession", "name": "App\\Http\\Controllers\\UsersController::showUserSession", "doc": "&quot;Display the specified resource.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\UsersController", "fromLink": "App/Http/Controllers/UsersController.html", "link": "App/Http/Controllers/UsersController.html#method_showEmpleados", "name": "App\\Http\\Controllers\\UsersController::showEmpleados", "doc": "&quot;M\u00e9todo que nos devuelve todos los empleados.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\UsersController", "fromLink": "App/Http/Controllers/UsersController.html", "link": "App/Http/Controllers/UsersController.html#method_showClientes", "name": "App\\Http\\Controllers\\UsersController::showClientes", "doc": "&quot;M\u00e9todo que nos devuelve todos los Clientes.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\UsersController", "fromLink": "App/Http/Controllers/UsersController.html", "link": "App/Http/Controllers/UsersController.html#method_update", "name": "App\\Http\\Controllers\\UsersController::update", "doc": "&quot;Nos permite actualizar los datos&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\UsersController", "fromLink": "App/Http/Controllers/UsersController.html", "link": "App/Http/Controllers/UsersController.html#method_showAllEmpleadosLibre", "name": "App\\Http\\Controllers\\UsersController::showAllEmpleadosLibre", "doc": "&quot;Nos devuelve todos los empleados libres para una fecha dada y\nuna hora dada&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\UsersController", "fromLink": "App/Http/Controllers/UsersController.html", "link": "App/Http/Controllers/UsersController.html#method_showEmpleadoActual", "name": "App\\Http\\Controllers\\UsersController::showEmpleadoActual", "doc": "&quot;Nos devuelve el empleado actual&quot;"},
            
            {"type": "Class", "fromName": "App\\Http", "fromLink": "App/Http.html", "link": "App/Http/Kernel.html", "name": "App\\Http\\Kernel", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Http\\Middleware", "fromLink": "App/Http/Middleware.html", "link": "App/Http/Middleware/Activo.html", "name": "App\\Http\\Middleware\\Activo", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Middleware\\Activo", "fromLink": "App/Http/Middleware/Activo.html", "link": "App/Http/Middleware/Activo.html#method_handle", "name": "App\\Http\\Middleware\\Activo::handle", "doc": "&quot;Handle an incoming request.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Middleware", "fromLink": "App/Http/Middleware.html", "link": "App/Http/Middleware/Admin.html", "name": "App\\Http\\Middleware\\Admin", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Middleware\\Admin", "fromLink": "App/Http/Middleware/Admin.html", "link": "App/Http/Middleware/Admin.html#method___construct", "name": "App\\Http\\Middleware\\Admin::__construct", "doc": "&quot;Crear una nueva instancia middlewar.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Middleware\\Admin", "fromLink": "App/Http/Middleware/Admin.html", "link": "App/Http/Middleware/Admin.html#method_handle", "name": "App\\Http\\Middleware\\Admin::handle", "doc": "&quot;Manejar una solicitud entrante.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Middleware", "fromLink": "App/Http/Middleware.html", "link": "App/Http/Middleware/EncryptCookies.html", "name": "App\\Http\\Middleware\\EncryptCookies", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Http\\Middleware", "fromLink": "App/Http/Middleware.html", "link": "App/Http/Middleware/RedirectIfAuthenticated.html", "name": "App\\Http\\Middleware\\RedirectIfAuthenticated", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Middleware\\RedirectIfAuthenticated", "fromLink": "App/Http/Middleware/RedirectIfAuthenticated.html", "link": "App/Http/Middleware/RedirectIfAuthenticated.html#method_handle", "name": "App\\Http\\Middleware\\RedirectIfAuthenticated::handle", "doc": "&quot;Handle an incoming request.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Middleware", "fromLink": "App/Http/Middleware.html", "link": "App/Http/Middleware/TrimStrings.html", "name": "App\\Http\\Middleware\\TrimStrings", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Http\\Middleware", "fromLink": "App/Http/Middleware.html", "link": "App/Http/Middleware/TrustProxies.html", "name": "App\\Http\\Middleware\\TrustProxies", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Http\\Middleware", "fromLink": "App/Http/Middleware.html", "link": "App/Http/Middleware/VerifyCsrfToken.html", "name": "App\\Http\\Middleware\\VerifyCsrfToken", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Providers", "fromLink": "App/Providers.html", "link": "App/Providers/AppServiceProvider.html", "name": "App\\Providers\\AppServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Providers\\AppServiceProvider", "fromLink": "App/Providers/AppServiceProvider.html", "link": "App/Providers/AppServiceProvider.html#method_boot", "name": "App\\Providers\\AppServiceProvider::boot", "doc": "&quot;Bootstrap any application services.&quot;"},
                    {"type": "Method", "fromName": "App\\Providers\\AppServiceProvider", "fromLink": "App/Providers/AppServiceProvider.html", "link": "App/Providers/AppServiceProvider.html#method_register", "name": "App\\Providers\\AppServiceProvider::register", "doc": "&quot;Register any application services.&quot;"},
            
            {"type": "Class", "fromName": "App\\Providers", "fromLink": "App/Providers.html", "link": "App/Providers/AuthServiceProvider.html", "name": "App\\Providers\\AuthServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Providers\\AuthServiceProvider", "fromLink": "App/Providers/AuthServiceProvider.html", "link": "App/Providers/AuthServiceProvider.html#method_boot", "name": "App\\Providers\\AuthServiceProvider::boot", "doc": "&quot;Register any authentication \/ authorization services.&quot;"},
            
            {"type": "Class", "fromName": "App\\Providers", "fromLink": "App/Providers.html", "link": "App/Providers/BroadcastServiceProvider.html", "name": "App\\Providers\\BroadcastServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Providers\\BroadcastServiceProvider", "fromLink": "App/Providers/BroadcastServiceProvider.html", "link": "App/Providers/BroadcastServiceProvider.html#method_boot", "name": "App\\Providers\\BroadcastServiceProvider::boot", "doc": "&quot;Bootstrap any application services.&quot;"},
            
            {"type": "Class", "fromName": "App\\Providers", "fromLink": "App/Providers.html", "link": "App/Providers/EventServiceProvider.html", "name": "App\\Providers\\EventServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Providers\\EventServiceProvider", "fromLink": "App/Providers/EventServiceProvider.html", "link": "App/Providers/EventServiceProvider.html#method_boot", "name": "App\\Providers\\EventServiceProvider::boot", "doc": "&quot;Register any events for your application.&quot;"},
            
            {"type": "Class", "fromName": "App\\Providers", "fromLink": "App/Providers.html", "link": "App/Providers/RouteServiceProvider.html", "name": "App\\Providers\\RouteServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Providers\\RouteServiceProvider", "fromLink": "App/Providers/RouteServiceProvider.html", "link": "App/Providers/RouteServiceProvider.html#method_boot", "name": "App\\Providers\\RouteServiceProvider::boot", "doc": "&quot;Define your route model bindings, pattern filters, etc.&quot;"},
                    {"type": "Method", "fromName": "App\\Providers\\RouteServiceProvider", "fromLink": "App/Providers/RouteServiceProvider.html", "link": "App/Providers/RouteServiceProvider.html#method_map", "name": "App\\Providers\\RouteServiceProvider::map", "doc": "&quot;Define the routes for the application.&quot;"},
                    {"type": "Method", "fromName": "App\\Providers\\RouteServiceProvider", "fromLink": "App/Providers/RouteServiceProvider.html", "link": "App/Providers/RouteServiceProvider.html#method_mapWebRoutes", "name": "App\\Providers\\RouteServiceProvider::mapWebRoutes", "doc": "&quot;Define the \&quot;web\&quot; routes for the application.&quot;"},
                    {"type": "Method", "fromName": "App\\Providers\\RouteServiceProvider", "fromLink": "App/Providers/RouteServiceProvider.html", "link": "App/Providers/RouteServiceProvider.html#method_mapApiRoutes", "name": "App\\Providers\\RouteServiceProvider::mapApiRoutes", "doc": "&quot;Define the \&quot;api\&quot; routes for the application.&quot;"},
            
            {"type": "Class", "fromName": "App", "fromLink": "App.html", "link": "App/Sala.html", "name": "App\\Sala", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App", "fromLink": "App.html", "link": "App/Servicio.html", "name": "App\\Servicio", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App", "fromLink": "App.html", "link": "App/User.html", "name": "App\\User", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\User", "fromLink": "App/User.html", "link": "App/User.html#method_boot", "name": "App\\User::boot", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\User", "fromLink": "App/User.html", "link": "App/User.html#method_confirmEmail", "name": "App\\User::confirmEmail", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "App\\mail", "fromLink": "App/mail.html", "link": "App/mail/EmailConfirmacion.html", "name": "App\\mail\\EmailConfirmacion", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\mail\\EmailConfirmacion", "fromLink": "App/mail/EmailConfirmacion.html", "link": "App/mail/EmailConfirmacion.html#method___construct", "name": "App\\mail\\EmailConfirmacion::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "App\\mail\\EmailConfirmacion", "fromLink": "App/mail/EmailConfirmacion.html", "link": "App/mail/EmailConfirmacion.html#method_build", "name": "App\\mail\\EmailConfirmacion::build", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Tests\\Browser", "fromLink": "Tests/Browser.html", "link": "Tests/Browser/LoginTest.html", "name": "Tests\\Browser\\LoginTest", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Tests\\Browser\\LoginTest", "fromLink": "Tests/Browser/LoginTest.html", "link": "Tests/Browser/LoginTest.html#method_test_login_page", "name": "Tests\\Browser\\LoginTest::test_login_page", "doc": "&quot;A Dusk test para comprobar que\nse muestra la p\u00e1gina login&quot;"},
                    {"type": "Method", "fromName": "Tests\\Browser\\LoginTest", "fromLink": "Tests/Browser/LoginTest.html", "link": "Tests/Browser/LoginTest.html#method_test_login", "name": "Tests\\Browser\\LoginTest::test_login", "doc": "&quot;A Dusk test que nos permite hacer\nlogin a la aplicaci\u00f3n.&quot;"},
            
            {"type": "Class", "fromName": "Tests\\Browser\\Pages", "fromLink": "Tests/Browser/Pages.html", "link": "Tests/Browser/Pages/HomePage.html", "name": "Tests\\Browser\\Pages\\HomePage", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Tests\\Browser\\Pages\\HomePage", "fromLink": "Tests/Browser/Pages/HomePage.html", "link": "Tests/Browser/Pages/HomePage.html#method_url", "name": "Tests\\Browser\\Pages\\HomePage::url", "doc": "&quot;Get the URL for the page.&quot;"},
                    {"type": "Method", "fromName": "Tests\\Browser\\Pages\\HomePage", "fromLink": "Tests/Browser/Pages/HomePage.html", "link": "Tests/Browser/Pages/HomePage.html#method_assert", "name": "Tests\\Browser\\Pages\\HomePage::assert", "doc": "&quot;Assert that the browser is on the page.&quot;"},
                    {"type": "Method", "fromName": "Tests\\Browser\\Pages\\HomePage", "fromLink": "Tests/Browser/Pages/HomePage.html", "link": "Tests/Browser/Pages/HomePage.html#method_elements", "name": "Tests\\Browser\\Pages\\HomePage::elements", "doc": "&quot;Get the element shortcuts for the page.&quot;"},
            
            {"type": "Class", "fromName": "Tests\\Browser\\Pages", "fromLink": "Tests/Browser/Pages.html", "link": "Tests/Browser/Pages/Page.html", "name": "Tests\\Browser\\Pages\\Page", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Tests\\Browser\\Pages\\Page", "fromLink": "Tests/Browser/Pages/Page.html", "link": "Tests/Browser/Pages/Page.html#method_siteElements", "name": "Tests\\Browser\\Pages\\Page::siteElements", "doc": "&quot;Get the global element shortcuts for the site.&quot;"},
            
            {"type": "Class", "fromName": "Tests\\Browser", "fromLink": "Tests/Browser.html", "link": "Tests/Browser/RegisterTest.html", "name": "Tests\\Browser\\RegisterTest", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Tests\\Browser\\RegisterTest", "fromLink": "Tests/Browser/RegisterTest.html", "link": "Tests/Browser/RegisterTest.html#method_test_register_page", "name": "Tests\\Browser\\RegisterTest::test_register_page", "doc": "&quot;A Dusk test para comprobar que\nse muestra la p\u00e1gina register&quot;"},
                    {"type": "Method", "fromName": "Tests\\Browser\\RegisterTest", "fromLink": "Tests/Browser/RegisterTest.html", "link": "Tests/Browser/RegisterTest.html#method_test_register", "name": "Tests\\Browser\\RegisterTest::test_register", "doc": "&quot;A Dusk test que nos permite registar\na un usuario en la aplicaci\u00f3n.&quot;"},
            
            {"type": "Class", "fromName": "Tests\\Browser", "fromLink": "Tests/Browser.html", "link": "Tests/Browser/WelcomeTest.html", "name": "Tests\\Browser\\WelcomeTest", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Tests\\Browser\\WelcomeTest", "fromLink": "Tests/Browser/WelcomeTest.html", "link": "Tests/Browser/WelcomeTest.html#method_test_welcome_page", "name": "Tests\\Browser\\WelcomeTest::test_welcome_page", "doc": "&quot;A Dusk test para comprobar que\nse muestra la p\u00e1gina welcome&quot;"},
            
            {"type": "Trait", "fromName": "Tests", "fromLink": "Tests.html", "link": "Tests/CreatesApplication.html", "name": "Tests\\CreatesApplication", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Tests\\CreatesApplication", "fromLink": "Tests/CreatesApplication.html", "link": "Tests/CreatesApplication.html#method_createApplication", "name": "Tests\\CreatesApplication::createApplication", "doc": "&quot;Creates the application.&quot;"},
            
            {"type": "Class", "fromName": "Tests", "fromLink": "Tests.html", "link": "Tests/DuskTestCase.html", "name": "Tests\\DuskTestCase", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Tests\\DuskTestCase", "fromLink": "Tests/DuskTestCase.html", "link": "Tests/DuskTestCase.html#method_prepare", "name": "Tests\\DuskTestCase::prepare", "doc": "&quot;Prepare for Dusk test execution.&quot;"},
                    {"type": "Method", "fromName": "Tests\\DuskTestCase", "fromLink": "Tests/DuskTestCase.html", "link": "Tests/DuskTestCase.html#method_driver", "name": "Tests\\DuskTestCase::driver", "doc": "&quot;Create the RemoteWebDriver instance.&quot;"},
            
            {"type": "Class", "fromName": "Tests\\Feature", "fromLink": "Tests/Feature.html", "link": "Tests/Feature/LoginTest.html", "name": "Tests\\Feature\\LoginTest", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Tests\\Feature\\LoginTest", "fromLink": "Tests/Feature/LoginTest.html", "link": "Tests/Feature/LoginTest.html#method_test_login", "name": "Tests\\Feature\\LoginTest::test_login", "doc": "&quot;Test a la p\u00e1gina de inicio&quot;"},
            
            {"type": "Class", "fromName": "Tests\\Feature", "fromLink": "Tests/Feature.html", "link": "Tests/Feature/routerTest.html", "name": "Tests\\Feature\\routerTest", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Tests\\Feature\\routerTest", "fromLink": "Tests/Feature/routerTest.html", "link": "Tests/Feature/routerTest.html#method_test_welcome", "name": "Tests\\Feature\\routerTest::test_welcome", "doc": "&quot;Test a la p\u00e1gina de bienvenida&quot;"},
                    {"type": "Method", "fromName": "Tests\\Feature\\routerTest", "fromLink": "Tests/Feature/routerTest.html", "link": "Tests/Feature/routerTest.html#method_test_login", "name": "Tests\\Feature\\routerTest::test_login", "doc": "&quot;Test a la p\u00e1gina de login&quot;"},
                    {"type": "Method", "fromName": "Tests\\Feature\\routerTest", "fromLink": "Tests/Feature/routerTest.html", "link": "Tests/Feature/routerTest.html#method_test_register", "name": "Tests\\Feature\\routerTest::test_register", "doc": "&quot;Test a la p\u00e1gina de Registro&quot;"},
            
            {"type": "Class", "fromName": "Tests", "fromLink": "Tests.html", "link": "Tests/TestCase.html", "name": "Tests\\TestCase", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "Tests\\Unit", "fromLink": "Tests/Unit.html", "link": "Tests/Unit/CitasTest.html", "name": "Tests\\Unit\\CitasTest", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Tests\\Unit\\CitasTest", "fromLink": "Tests/Unit/CitasTest.html", "link": "Tests/Unit/CitasTest.html#method_test_vista_panel_cita", "name": "Tests\\Unit\\CitasTest::test_vista_panel_cita", "doc": "&quot;Test a la p\u00e1gina de panel de citas&quot;"},
                    {"type": "Method", "fromName": "Tests\\Unit\\CitasTest", "fromLink": "Tests/Unit/CitasTest.html", "link": "Tests/Unit/CitasTest.html#method_test_get_citas_por_clientes", "name": "Tests\\Unit\\CitasTest::test_get_citas_por_clientes", "doc": "&quot;Test a la getCitasPorClientes&quot;"},
            
            {"type": "Class", "fromName": "Tests\\Unit", "fromLink": "Tests/Unit.html", "link": "Tests/Unit/FacturasTest.html", "name": "Tests\\Unit\\FacturasTest", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Tests\\Unit\\FacturasTest", "fromLink": "Tests/Unit/FacturasTest.html", "link": "Tests/Unit/FacturasTest.html#method_test_vista_facturas", "name": "Tests\\Unit\\FacturasTest::test_vista_facturas", "doc": "&quot;Test a la p\u00e1gina de Facturas&quot;"},
            
            {"type": "Class", "fromName": "Tests\\Unit", "fromLink": "Tests/Unit.html", "link": "Tests/Unit/HorasTest.html", "name": "Tests\\Unit\\HorasTest", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Tests\\Unit\\HorasTest", "fromLink": "Tests/Unit/HorasTest.html", "link": "Tests/Unit/HorasTest.html#method_test_vista_horas", "name": "Tests\\Unit\\HorasTest::test_vista_horas", "doc": "&quot;Test a la p\u00e1gina de Horas&quot;"},
                    {"type": "Method", "fromName": "Tests\\Unit\\HorasTest", "fromLink": "Tests/Unit/HorasTest.html", "link": "Tests/Unit/HorasTest.html#method_test_guardar_hora_usuario_no_registrado", "name": "Tests\\Unit\\HorasTest::test_guardar_hora_usuario_no_registrado", "doc": "&quot;Test a la guardar hora usuario no registrado&quot;"},
                    {"type": "Method", "fromName": "Tests\\Unit\\HorasTest", "fromLink": "Tests/Unit/HorasTest.html", "link": "Tests/Unit/HorasTest.html#method_test_guardar_hora_usuario_no_activo", "name": "Tests\\Unit\\HorasTest::test_guardar_hora_usuario_no_activo", "doc": "&quot;Test a la guardar hora usuario no activo&quot;"},
                    {"type": "Method", "fromName": "Tests\\Unit\\HorasTest", "fromLink": "Tests/Unit/HorasTest.html", "link": "Tests/Unit/HorasTest.html#method_test_guardar_hora_usuario_administrador", "name": "Tests\\Unit\\HorasTest::test_guardar_hora_usuario_administrador", "doc": "&quot;Test a la guardar hora usuario administrador&quot;"},
                    {"type": "Method", "fromName": "Tests\\Unit\\HorasTest", "fromLink": "Tests/Unit/HorasTest.html", "link": "Tests/Unit/HorasTest.html#method_test_guardar_hora_usuario_empleado", "name": "Tests\\Unit\\HorasTest::test_guardar_hora_usuario_empleado", "doc": "&quot;Test a la guardar hora usuario empleado&quot;"},
                    {"type": "Method", "fromName": "Tests\\Unit\\HorasTest", "fromLink": "Tests/Unit/HorasTest.html", "link": "Tests/Unit/HorasTest.html#method_test_guardar_hora_usuario_cliente", "name": "Tests\\Unit\\HorasTest::test_guardar_hora_usuario_cliente", "doc": "&quot;Test a la guardar hora usuario&quot;"},
                    {"type": "Method", "fromName": "Tests\\Unit\\HorasTest", "fromLink": "Tests/Unit/HorasTest.html", "link": "Tests/Unit/HorasTest.html#method_test_update_hora_usuario_no_registrado", "name": "Tests\\Unit\\HorasTest::test_update_hora_usuario_no_registrado", "doc": "&quot;Test a la update hora usuario no registrado&quot;"},
                    {"type": "Method", "fromName": "Tests\\Unit\\HorasTest", "fromLink": "Tests/Unit/HorasTest.html", "link": "Tests/Unit/HorasTest.html#method_test_update_hora_usuario_registrado_no_activo", "name": "Tests\\Unit\\HorasTest::test_update_hora_usuario_registrado_no_activo", "doc": "&quot;Test a la update hora usuario no activo&quot;"},
                    {"type": "Method", "fromName": "Tests\\Unit\\HorasTest", "fromLink": "Tests/Unit/HorasTest.html", "link": "Tests/Unit/HorasTest.html#method_test_update_hora_usuario_administrador", "name": "Tests\\Unit\\HorasTest::test_update_hora_usuario_administrador", "doc": "&quot;Test a la update hora usuario administrador&quot;"},
                    {"type": "Method", "fromName": "Tests\\Unit\\HorasTest", "fromLink": "Tests/Unit/HorasTest.html", "link": "Tests/Unit/HorasTest.html#method_test_update_hora_usuario_empleado", "name": "Tests\\Unit\\HorasTest::test_update_hora_usuario_empleado", "doc": "&quot;Test a la update hora usuario empleado&quot;"},
                    {"type": "Method", "fromName": "Tests\\Unit\\HorasTest", "fromLink": "Tests/Unit/HorasTest.html", "link": "Tests/Unit/HorasTest.html#method_test_update_hora_usuario_cliente", "name": "Tests\\Unit\\HorasTest::test_update_hora_usuario_cliente", "doc": "&quot;Test a la update hora usuario cliente&quot;"},
                    {"type": "Method", "fromName": "Tests\\Unit\\HorasTest", "fromLink": "Tests/Unit/HorasTest.html", "link": "Tests/Unit/HorasTest.html#method_test_delete_hora_usuario_no_registrado", "name": "Tests\\Unit\\HorasTest::test_delete_hora_usuario_no_registrado", "doc": "&quot;Test a la delete hora usuario no registrado&quot;"},
                    {"type": "Method", "fromName": "Tests\\Unit\\HorasTest", "fromLink": "Tests/Unit/HorasTest.html", "link": "Tests/Unit/HorasTest.html#method_test_delete_hora_usuario_registrado_no_activo", "name": "Tests\\Unit\\HorasTest::test_delete_hora_usuario_registrado_no_activo", "doc": "&quot;Test a la delete hora usuario no activo&quot;"},
                    {"type": "Method", "fromName": "Tests\\Unit\\HorasTest", "fromLink": "Tests/Unit/HorasTest.html", "link": "Tests/Unit/HorasTest.html#method_test_delete_hora_usuario_administrador", "name": "Tests\\Unit\\HorasTest::test_delete_hora_usuario_administrador", "doc": "&quot;Test a la delete hora usuario administrador&quot;"},
                    {"type": "Method", "fromName": "Tests\\Unit\\HorasTest", "fromLink": "Tests/Unit/HorasTest.html", "link": "Tests/Unit/HorasTest.html#method_test_delete_hora_usuario_empleado", "name": "Tests\\Unit\\HorasTest::test_delete_hora_usuario_empleado", "doc": "&quot;Test a la delete hora usuario empleado&quot;"},
                    {"type": "Method", "fromName": "Tests\\Unit\\HorasTest", "fromLink": "Tests/Unit/HorasTest.html", "link": "Tests/Unit/HorasTest.html#method_test_delete_hora_usuario_cliente", "name": "Tests\\Unit\\HorasTest::test_delete_hora_usuario_cliente", "doc": "&quot;Test a la delete hora usuario cliente&quot;"},
            
            {"type": "Class", "fromName": "Tests\\Unit", "fromLink": "Tests/Unit.html", "link": "Tests/Unit/SalasTest.html", "name": "Tests\\Unit\\SalasTest", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Tests\\Unit\\SalasTest", "fromLink": "Tests/Unit/SalasTest.html", "link": "Tests/Unit/SalasTest.html#method_test_vista_sala_admi", "name": "Tests\\Unit\\SalasTest::test_vista_sala_admi", "doc": "&quot;Test a la p\u00e1gina de sala para el rol administrador&quot;"},
                    {"type": "Method", "fromName": "Tests\\Unit\\SalasTest", "fromLink": "Tests/Unit/SalasTest.html", "link": "Tests/Unit/SalasTest.html#method_test_vista_sala_empleado", "name": "Tests\\Unit\\SalasTest::test_vista_sala_empleado", "doc": "&quot;Test a la p\u00e1gina de sala para el rol empleado&quot;"},
                    {"type": "Method", "fromName": "Tests\\Unit\\SalasTest", "fromLink": "Tests/Unit/SalasTest.html", "link": "Tests/Unit/SalasTest.html#method_test_vista_sala_cliente", "name": "Tests\\Unit\\SalasTest::test_vista_sala_cliente", "doc": "&quot;Test a la p\u00e1gina de sala para el rol cliente&quot;"},
            
            {"type": "Class", "fromName": "Tests\\Unit", "fromLink": "Tests/Unit.html", "link": "Tests/Unit/ServiciosTest.html", "name": "Tests\\Unit\\ServiciosTest", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Tests\\Unit\\ServiciosTest", "fromLink": "Tests/Unit/ServiciosTest.html", "link": "Tests/Unit/ServiciosTest.html#method_test_vista_servicios", "name": "Tests\\Unit\\ServiciosTest::test_vista_servicios", "doc": "&quot;Test a la p\u00e1gina de Servicios&quot;"},
                    {"type": "Method", "fromName": "Tests\\Unit\\ServiciosTest", "fromLink": "Tests/Unit/ServiciosTest.html", "link": "Tests/Unit/ServiciosTest.html#method_test_guardar_servicio_usuario_no_registrado", "name": "Tests\\Unit\\ServiciosTest::test_guardar_servicio_usuario_no_registrado", "doc": "&quot;Test a la guardar Servicio a usuario no registrado&quot;"},
                    {"type": "Method", "fromName": "Tests\\Unit\\ServiciosTest", "fromLink": "Tests/Unit/ServiciosTest.html", "link": "Tests/Unit/ServiciosTest.html#method_test_guardar_servicio_usuario_registrado_no_activo", "name": "Tests\\Unit\\ServiciosTest::test_guardar_servicio_usuario_registrado_no_activo", "doc": "&quot;Test a la guardar Servicio a usuario registrado no activo&quot;"},
                    {"type": "Method", "fromName": "Tests\\Unit\\ServiciosTest", "fromLink": "Tests/Unit/ServiciosTest.html", "link": "Tests/Unit/ServiciosTest.html#method_test_guardar_servicio_usuario_administrador", "name": "Tests\\Unit\\ServiciosTest::test_guardar_servicio_usuario_administrador", "doc": "&quot;Test a la guardar Servicio a usuario administrador&quot;"},
                    {"type": "Method", "fromName": "Tests\\Unit\\ServiciosTest", "fromLink": "Tests/Unit/ServiciosTest.html", "link": "Tests/Unit/ServiciosTest.html#method_test_guardar_servicio_usuario_empleado", "name": "Tests\\Unit\\ServiciosTest::test_guardar_servicio_usuario_empleado", "doc": "&quot;Test a la guardar Servicio a usuario empleado&quot;"},
                    {"type": "Method", "fromName": "Tests\\Unit\\ServiciosTest", "fromLink": "Tests/Unit/ServiciosTest.html", "link": "Tests/Unit/ServiciosTest.html#method_test_guardar_servicio_usuario_cliente", "name": "Tests\\Unit\\ServiciosTest::test_guardar_servicio_usuario_cliente", "doc": "&quot;Test a la guardar Servicio a usuario Cliente&quot;"},
                    {"type": "Method", "fromName": "Tests\\Unit\\ServiciosTest", "fromLink": "Tests/Unit/ServiciosTest.html", "link": "Tests/Unit/ServiciosTest.html#method_test_update_servicio_usuario_no_registrado", "name": "Tests\\Unit\\ServiciosTest::test_update_servicio_usuario_no_registrado", "doc": "&quot;Test a la update servicio usuario no registrado&quot;"},
                    {"type": "Method", "fromName": "Tests\\Unit\\ServiciosTest", "fromLink": "Tests/Unit/ServiciosTest.html", "link": "Tests/Unit/ServiciosTest.html#method_test_update_servicio_usuario_no_activo", "name": "Tests\\Unit\\ServiciosTest::test_update_servicio_usuario_no_activo", "doc": "&quot;Test a la update servicio usuario registrado no activo&quot;"},
                    {"type": "Method", "fromName": "Tests\\Unit\\ServiciosTest", "fromLink": "Tests/Unit/ServiciosTest.html", "link": "Tests/Unit/ServiciosTest.html#method_test_update_servicio_usuario_administrador", "name": "Tests\\Unit\\ServiciosTest::test_update_servicio_usuario_administrador", "doc": "&quot;Test a la update servicio usuario administrador&quot;"},
                    {"type": "Method", "fromName": "Tests\\Unit\\ServiciosTest", "fromLink": "Tests/Unit/ServiciosTest.html", "link": "Tests/Unit/ServiciosTest.html#method_test_update_servicio_usuario_empleado", "name": "Tests\\Unit\\ServiciosTest::test_update_servicio_usuario_empleado", "doc": "&quot;Test a la update servicio usuario empleado&quot;"},
                    {"type": "Method", "fromName": "Tests\\Unit\\ServiciosTest", "fromLink": "Tests/Unit/ServiciosTest.html", "link": "Tests/Unit/ServiciosTest.html#method_test_update_servicio_usuario_cliente", "name": "Tests\\Unit\\ServiciosTest::test_update_servicio_usuario_cliente", "doc": "&quot;Test a la update servicio usuario cliente&quot;"},
            
            {"type": "Class", "fromName": "Tests\\Unit", "fromLink": "Tests/Unit.html", "link": "Tests/Unit/UsersTest.html", "name": "Tests\\Unit\\UsersTest", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Tests\\Unit\\UsersTest", "fromLink": "Tests/Unit/UsersTest.html", "link": "Tests/Unit/UsersTest.html#method_test_vista_users", "name": "Tests\\Unit\\UsersTest::test_vista_users", "doc": "&quot;Test a la p\u00e1gina de usuarios&quot;"},
                    {"type": "Method", "fromName": "Tests\\Unit\\UsersTest", "fromLink": "Tests/Unit/UsersTest.html", "link": "Tests/Unit/UsersTest.html#method_test_show_all_empleados_libre", "name": "Tests\\Unit\\UsersTest::test_show_all_empleados_libre", "doc": "&quot;Test a showAllEmpleadosLibre\nfecha 2018-04-27 y id_horo 6&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


