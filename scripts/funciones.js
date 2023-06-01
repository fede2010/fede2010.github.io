$(document).ready(() => {$("#menu-de-compra").slideToggle()});
$(document).ready(() => {$("#comprar-tickets").click(() => crearDialogo("#menu-de-compra"))});
$(document).ready(() => {$("#boton2").click(() => crearDialogo("#menu-de-compra"))});


function crearDialogo(contenido){
    $(contenido).dialog({
        width: 800,
        height: 600,
        modal: true,
        dialogClass: "bg-white",
        show: {
            effect: "scale",
            duration: 1500
        },
        hide: {
            effect: "fade",
            duration: 1500
        },
        position: {
            my: "center",
            at: "center",
            of: window
        },
        draggable: false
    });
}

$(document).ready(() => {$("#btn-resumen").click(() =>{
    var cantidad = document.getElementById("cantidad");
    var cantidadValor = parseInt(cantidad.value);
    var categoria = document.getElementById("categoria");
    var categoriaValor = parseInt(categoria.value);
    var ticket = document.getElementById("ticket");
    var ticketValor = parseFloat(ticket.textContent.replace(/[^\d.-]/g, ''));
    var valorTotal = document.getElementById("valor-total");

    valorTotal.textContent = "Total a pagar $" + calcular(cantidadValor, categoriaValor, ticketValor);

    });
});



function calcular(cantidad, categoria, valor){
    switch(categoria){
        case 1: return (cantidad*valor)*0.20;
        case 2: return (cantidad*valor)*0.50;
        case 3: return (cantidad*valor)*0.85;
        default: return cantidad*valor;
    }
}