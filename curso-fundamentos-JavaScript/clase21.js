CONST_ES_ALTO = 1.80 //Mashic number

function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.esAlto = function (){
  (this.altura >= CONST_ES_ALTO) ? console.log('Soy alto') : console.log('No soy Alto')
}

var sacha = new Persona('Sacha', 'Lifszyc', 1.82)
var erika = new Persona('Erika', 'Luna', 1.78)
var arturo = new Persona('Arturo', 'Martinez', 1.90)
