let arrayOfName = ['jaxx', 'tiny', 'clay']
let mixedArray = ['anarchy', 99, true]

const makeUpperCase = (words) => 
  new Promise ((resolve, reject) => {
    if (words.every(word => typeof word === 'string')){
      resolve(words.map(word => word.toUpperCase()))
    } else {
      reject(Error('Not all items in array are string!'))
    }
  })

const sortWords = (words) => {
  return words.sort((a, b) => {
    if (a > b){
      return 1
    } else {
      return -1
    }
  })
}

makeUpperCase(arrayOfName)
    .then(sortWords)
    .then(result => console.log(result))
    .catch(error => console.log(error))

makeUpperCase(mixedArray)
    .then(sortWords)
    .then(result => console.log(result))
    .catch(error => console.log(error))