const cities = ['Ciudad de Mexico', 'Bogotà', 'Lima', 'Buenos Aires',
'Guadalajara'];

const randomString = () => {
  const string = cities[Math.floor(Math.random() * cities.length)];
  return string
}

const reverseString2 =  str => {
  return new Promise ((resolve, reject) =>{
    if (!str) {
      reject(Error('Error'))
    }
    // split convierte en un arreglo, separando cada caracter
    resolve(str.split("").reverse().join(""))
  } );
};

module.exports = randomString;