//

let mapper = new Map([['name', 'Tom'],['otherguy','john']])

console.log(mapper.get('otherguy'))
console.log(mapper.size)
mapper.set('third guy', 'Bill')

console.log(mapper.has('third guy'))