const titulo = document.getElementById("titulo")
titulo.innerHTML+= `Fake Store Api`
let contenedor = document.getElementById("tienda")

async function getFakeStoreAPI(){
    let url = "https://fakestoreapi.com/products"
    let respuesta = await fetch(url)
    //console.log(respuesta.status)
    //console.log(respuesta.statusText)
        .then(res=>res.json())
        .then(json=>{
            console.log(json)
            contenedor.innerHTML=`
            `
            for(const i of json){
                contenedor.innerHTML+=`
                <div class='data'>
                        <div class='imagen'>
                        <img src="${i.image}" alt="">
                        </div>
                        <div class='category'>
                            <div class='titulaso'>
                            ${i.title.substring(0,20)}
                            </div>
                            <div class='precio'>
                            $${i.price}
                            </div>
                        </div>
                        
                    
                        
                </div>
                `
            }
        })
}

getFakeStoreAPI()
contenedor.innerHTML="cargando datos..."