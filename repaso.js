//fetch("https://api.mercadolibre.com/sites/MLA/search?q=Motorola")
//rsponsepuede ir cualquier palabra, esta info la estamos transformandola en json y nos devuelve otra promesa
  //.then(response => response.json())
//info tranasformada para utilizarla, result es de la api
  //.then(data => data.results)
//mapeo de titles
  //.then(products => products.map(product=>console.log(product.title)))
//El then se ejecuta cuando la promesa termina, pero mientras el código por fuera sigue, el await hace que espere si o si a que la promesa termine y no siga ejecutando otras cosas
//Lo que hace await es esperar a que se resuelva la promesa, mientras permite continuar ejecutando otras tareas que puedan realizarse:

//async function traerDatos (){
  //let response =await fetch ("https://api.mercadolibre.com/sites/MLA/search?q=Motorola")
  //let data = await response.json()
  //console.log(data)
//}
//traerDatos()

//evitar callback hell

//promesas
//esta promesa siempre sale bien
//new Promise ((resolve, reject)=>{
  //si sale anda
  //setTimeout(() => resolve("Anda"), 1000)
  //si sale mal
  //setTimeout(() => reject("No anda"), 1000)
//})
//.then(data => console.log(data))
//para capturar los errores
//.catch(err => console.log(`Estoy en el catch ${err}`))

//operador rest, rest operator genera un array 
//function cualquiera(a, b, ...datos){
  //console.log(datos)
//}
//cualquiera (1,2,3,4,5)

//function cualquiera (a, ...datos){
  //let sumatoria = datos.reduce((valorAnterior, valorSiguiente)=>{
    //return valorAnterior + valorSiguiente
  //}, 0)
  //console.log(sumatoria)
//}

//spread operator, para copiar arrays por ejemplo
let array = [1,2,3]
let copiaArray1 = [ ...array]

let objeto1 = {name:"mel"}
let objeto2 = {...objeto1, apellido:"calde"}
console.log(objeto1)


objeto1.edad = 24

console.log(objeto1)
console.log(objeto2)