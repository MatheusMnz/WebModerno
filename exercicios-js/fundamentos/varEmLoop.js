var i = 1
for (i=0; i< 10; i++){
    console.log(i)
}

console.log(i)

for( let j=0; j< 10; j++){
    console.log(j)
}



const funcs = []
for(let iter =0; iter<10; iter++){
    funcs.push(function print(){console.log('aq'+iter)})
}

const funcs2 = []
for(var iter2 =0; iter2<10; iter2++){
    funcs2.push(function print2(){console.log(iter2)})
}

funcs[2]();
funcs2[2]();