//Promesas
//sabemos que se va a ejecutar pero no sabemos cuando
//El codigo asincrono se corre dsp del codigo sincrono, dependiendo del codigo
//Un código síncrono es aquel código donde cada instrucción espera a la anterior para ejecutarse
//mientras que un código asíncrono no espera a las instrucciones diferidas y continúa con su ejecución.
//Yo hice este ejemplo hace tiempo entre asíncrono y síncrono con comida jeje: supongamos que llamamos a un restaurante y le pedimos al cocinero o a la cocinera (que sería el programa 👩‍🍳), una orden de pizza con una guarnición de papas fritas. 🍕🍟 Cuando le pedimos al programa (cocinero/a 👩‍🍳) que haga esa acción, que tarde mucho, llega ese momento, ejecuta la orden de pizza, pero hasta que no termine esa acción, no pasará a hacer las papas fritas. 🍕⏳🍟
//A diferencia de la programación asíncrona, no espera terminar la pizza para luego continuar con las papas fritas, sino, que mientras el/la cocinero/a prepara la pizza, ejecuta otras cosas (las papas fritas). ¿Esto con qué fin? De que le rinda y vaya mucho más rápido para que como clientes, podamos tener nuestra orden lista lo más pronto. ⚡
//hacemos una consulta


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