$(function () {
    // Handler for .ready() called.

    alert("jquery is ready");
    $('#carouselExampleControls').carousel();

    $("#resultado").hide();
    $('.animated-icon1,.animated-icon3,.animated-icon4').click(function () {
        $(this).toggleClass('open');
    });

    $("#verResultado").click(function (e) {
        alert($("#userName").val());
        $.ajax({
            url: 'http://localhost:3000/resultados',

            data: {
                Nombre: $("#userName").val(),
                Id: $("#idResultado").val(),
                Cedula: $("#cedula").val()
            },
            type: 'POST',
            success: function (json) {
                alert(json.nombre_resultado);
            },
            error: function (xhr, status) {
                alert('Disculpe, existió un problema');
            },
            complete: function (xhr, status) {
                alert('Petición realizada');
            }
        });
    });

    // <------------------------------------------------inicio secion---------------------------------------------->

    $("#btnInicio").click(() => {
        login();      
    })
    
    $("#logOut").click(() => {
        logOut();
    });     

    let decodeToken = (token) => {
        var playload = JSON.parse(atob(token.split('.')[1]));
        console.log(playload);

        return playload;
    };

    let login = () => {

        
        $.ajax({
    
            "url": "http://localhost:3000/inicio_cliente",
            "type": "POST",
            "data": {
        
                Email_cliente: $("#Email_cliente1").val(),
                Contraseña_cliente: $("#Contrasena_cliente1").val()
            },
            "dataType": "JSON"
    
        }).done((response) => {

            alert(`${$("#Email_cliente1").val()}, ${$("#Contrasena_cliente1").val()}`)
    
            if (response && response.token) {
                localStorage.setItem('token', response.token);
    
                const token = localStorage.getItem('token');
                console.log(token);

                window.location.href = 'http://localhost:3000/citas';
    
            } else {
             
                $("#error").html(`<div class="alert alert-danger">Usuario y/o contraseña incorrectas</div>`);
            }
            console.log(decodeToken(response.token));

        }).always(() => {
    
        });
    
    };
    
    let logOut = () => {
    
        const token = localStorage.getItem('token');
        window.location.href = 'http://localhost:3000/';
    
        console.log(token);
    
    }
    // <------------------------------------------------registro cliente---------------------------------------------->

    alert("jquery is ready");
    $("#registro_cliente").hide();

    $("#btnRegistro").click(function (e) {
        alert($("#Nombre_cliente").val());
        $.ajax({
            type: "POST",
            url: 'http://localhost:3000/registro_cliente',

            data: {
                Nombre_cliente: $("#Nombre_cliente").val(),
                Tipo_cedula_cliente: $("#Tipo_cedula_cliente").val(),
                Cedula_cliente: $("#Cedula_cliente").val(),
                Telefono_cliente: $("#Telefono_cliente").val(),
                Categoria_cliente: $("#Categoria_cliente").val(),
                Email_cliente: $("#Email_cliente").val(),
                Contraseña_cliente: $("#clave").val()
            },
            type: 'POST',
            success: function (json) {
                alert(json.Email_cliente);
            },
            error: function (xhr, status) {
                alert('Disculpe, existió un problema');
            },
            complete: function (xhr, status) {
                alert('Petición realizada');
            }
        });
    });

    // <------------------------------------------------registro cita---------------------------------------------->

    alert("jquery is ready");
    $("#registro_cita").hide();

    $("#btnRegistro").click(function (e) {
        alert($("#Tipo_cita").val());
        $.ajax({
            type: "POST",
            url: 'http://localhost:3000/registro_cita',

            data: {
                Fk_cliente: $("#Fk_cliente").val(),
                Tipo_cita: $("#Tipo_cita").val(),
                Observacion: $("#Observacion").val()
                
            },
            type: 'POST',
            success: function (json) {
                alert(json.Email_cliente);
            },
            error: function (xhr, status) {
                alert('Disculpe, existió un problema');
            },
            complete: function (xhr, status) {
                alert('Petición realizada');
            }
        });
    });
});