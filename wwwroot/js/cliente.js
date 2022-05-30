var datatable;

$(document).ready(function () {
    loadDataTable();
    var id = document.getElementById("clienteId");
    if (id.value > 0) {
        $('#myModal').modal('show');
    }
});

function limpiar() {
    var clienteId = document.getElementById("clienteId");
    var clienteNombres = document.getElementById("clienteNombres");
    var clienteApellidos = document.getElementById("clienteApellidos");
    var clientedireccion = document.getElementById("clienteDireccion");
    var clienteTelefono = document.getElementById("clienteTelefono");
    var clienteEstado = document.getElementById("clienteEstado");

    clienteId.value = 0;
    clienteNombres.value = "";
    clienteApellidos.value = "";
    clientedireccion.value = "";
    clienteTelefono.value = "";
    clienteEstado.value = true;
}

function loadDataTable() {
    datatable = $('#tblData').DataTable({
        "ajax": {
            "url": "/Cliente/ObtenerTodos"
        },
        "columns": [
            { "data": "nombres", "width": "15%" },
            { "data": "apellidos", "width": "15%" },
            { "data": "direccion", "width": "20%" },
            { "data": "telefono", "width": "15%" },
            {
                "data": "estado",
                "render": function (data) {
                    if (data == true) {
                        return "Activo";
                    }
                    else {
                        return "Inactivo";
                    }
                }, "width": "10%",
            },
            {
                "data": "id",
                "render": function (data) {
                    return `
                        <div>
                            <a href="/Cliente/Crear/${data}" class="btn btn-success text-white" style="cursor:pointer;">
                                Editar
                            </a>
                            <a onclick=Delete("/Cliente/Delete/${data}") class="btn btn-danger text-white" style="cursor:pointer">
                                Eliminar
                            </a>
                        </div>
                        `;
                }, "width": "20%"
            }
        ]
    });
}


function Delete(url) {

    swal({
        title: "Esta seguro de Eliminar este Cliente?",
        text: "Este registro no se podra recuperar",
        icon: "warning",
        buttons: true
    }).then((borrar) => {
        if (borrar) {
            $.ajax({
                type: "DELETE",
                url: url,
                success: function (data) {
                    if (data.success) {
                        alert(data.message);
                        datatable.ajax.reload();
                    }
                    else {
                        alert(data.message);
                    }
                }
            });
        }
    });    
}