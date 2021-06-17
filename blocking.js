var getUserSync = function(id) {

    var arrNames = [ 
    { id: '1', name: 'Emanuel'  },
    { id: '2', name: 'Giselle'  },
    { id: '3', name: 'Beatriz'  },
    { id: '4', name: 'Lucas'    }
 ];

    var resultnome = arrNames.filter(function(elen){
     return elen.id == id
    })[0].name;

    return Promise.resolve( { nome: resultnome })
}

var start = new Date().getTime();

console.log("Starting call user 1")
var user1 = getUserSync('1'); 
console.log('user1', user1)

console.log("Starting call user 2")
var user2 = getUserSync('2');
console.log('user2', user2)


console.log("Starting call user 3")
var user3 = getUserSync('3');
console.log('user3', user3)

console.log("Starting call user 4")
var user4 = getUserSync('4');
console.log('user4', user4)

var end = new Date().getTime();

var final = end - start 

console.log('total execution time', + final)