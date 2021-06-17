var getUserSync = function(id, callback) {

    var arrNames = [ 
    { id: '1', name: 'Emanuel'  },
    { id: '2', name: 'Giselle'  },
    { id: '3', name: 'Beatriz'  },
    { id: '4', name: 'Lucas'    }
 ];

    var resultnome = arrNames.filter(function(elen){
     return elen.id == id
    })[0].name;

    return Promise.resolve( { nome: resultnome }).then(function(value){
        callback(value)
    })
}
var start = new Date().getTime();

console.log("Starting call user 1")
getUserSync('1', function(user1){
    console.log('user1', user1)
}); 


console.log("Starting call user 2")
getUserSync('2', function(user2){
    console.log('user2', user2)
});

console.log("Starting call user 3")
getUserSync('3', function(user3){
    console.log('user3', user3)
});

console.log("Starting call user 4")
getUserSync('4', function(user4){
    console.log('user4', user4)
});

var sun = 5 + 5;
console.log(sun)

var end = new Date().getTime();

var final = end - start

console.log('total execution time', + final)