document.querySelector('#boton').addEventListener('click', traerDatos);

function traerDatos() {



    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'catalogo.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
            // console.log(this.responseText);
            let datos = JSON.parse(this.responseText);

            let res = document.querySelector('#res');
            res.innerHTML = '';

            for (let item of datos) {
                res.innerHTML += `
                <tr>
                <td>${item.nombre}</td>
                 <td>${item.descripcion}</td>
                  <td>${item.precio}</td>
                  <td> <a href="./AgregarProductos.html"><button class="btn btn-primary">editar</button></a> </td>


                </tr>
                
                `
            }
        }

    }
}