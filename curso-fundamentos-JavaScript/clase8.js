var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  edad: 28
}

var dario = {
  nombre: 'Darío',
  apellido: 'Susnisky',
  edad: 27
}

function imprimirNombreEnMayusculas(persona) {
  // var nombre = persona.nombre
  var { nombre } = persona
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)
// imprimirNombreEnMayusculas({ nombre: 'Pepito' })
// imprimirNombreEnMayusculas({ apellido: 'Gomez' })

function cumpleanos(persona) {
  return {
    // estamos defvolviendo un objeto nuevo
    ...persona,
    edad: persona.edad + 1
  }
}

sachaMasViejo = cumpleanos(sacha)

function imprimirNombreYEdad(persona) {
  // Hola, me llamo Sacha y tengo 28 años
  // Hola, me llamo Darío y tengo 27 años
  var { nombre, edad } = persona
  console.log(`Hola, me llamo ${ nombre } y tengo ${ edad } `)
}

imprimirNombreYEdad(sachaMasViejo)