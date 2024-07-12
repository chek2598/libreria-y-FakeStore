
class Libros{
    constructor(id,tit,aut,lan,sto){
        this.id=id
        this.titulo=tit
        this.autor=aut
        this.lanzamiento=lan
        this.stock=sto
    }
}

//Datos de acceso global

const libros =[]
const formCarga = document.getElementById("form-cargar")
let contenedor = document.querySelector("#libros-ofertados")

//DOM - Document Objet Model
// document.getElementById o ClassName, Name o TagName





function crearLibro(e){
    //anulamos la accion del submit del form
    e.preventDefault()

    //leer datos del form10
    let campoTit = document.getElementById("titulo").value
    let campoAut = document.getElementById("autor").value
    let campoLan = document.getElementById("lanzamiento").value
    let campoSto = document.getElementById("stock").value
    let id = libros.length + 1


    //Crear objeto
    const nuevoLibro = new Libros(id,campoTit,campoAut,campoLan,campoSto)

    libros.push(nuevoLibro)

    //almacenarlo en local storage

    let librosJSON = JSON.stringify(libros)
    localStorage.setItem("data",librosJSON)

   
    contenedor.innerHTML=" "

    for (const i of libros){
        contenedor.innerHTML+=`
        <div class="libro">
            <div class="datos">
                <h5>${i.titulo}</h5>
                <p>${i.autor}
                    <br>${i.lanzamiento}
                    <br><span class="cant">stock: ${i.stock}

                    </span>
                </p>
            </div>
            <div class="icon">
                <span>📚</span>
            </div>
        </div>
        `
    }
    formCarga.reset()
}

function borrarLibros(){
    contenedor.innerHTML=" "
}
//escuchador de evento

function recuperarData(e){
    e.preventDefault()
    let infoJSON = localStorage.getItem("data")
    let leerJSON = JSON.parse(infoJSON)

    contenedor.innerHTML=""

    for(const i of leerJSON){
        contenedor.innerHTML+=`
        <div class="libro">
            <div class="datos">
                <h5>${i.titulo}</h5>
                <p>${i.autor}
                    <br>${i.lanzamiento}
                    <br><span class="cant">stock: ${i.stock}

                    </span>
                </p>
            </div>
            <div class="icon">
                <span>📚</span>
            </div>
        </div>
        `
    }
}
function borrarUltimo(){
    libros.pop();
    contenedor.innerHTML=" "

    for (const i of libros){
        contenedor.innerHTML+=`
        <div class="libro">
            <div class="datos">
                <h5>${i.titulo}</h5>
                <p>${i.autor}
                    <br>${i.lanzamiento}
                    <br><span class="cant">stock: ${i.stock}

                    </span>
                </p>
            </div>
            <div class="icon">
                <span>📚</span>
            </div>
        </div>
        `
    }
}

formCarga.addEventListener("submit",crearLibro)

let btnBorrar = document.getElementById("borrarlibros")
btnBorrar.addEventListener("click",borrarLibros)

let linkJSON = document.getElementById("json")
linkJSON.addEventListener("click",recuperarData)

let ultimoPop = document.getElementById("ultimo")
ultimoPop.addEventListener("click",borrarUltimo)





