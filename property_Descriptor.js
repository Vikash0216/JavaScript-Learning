console.log('BaaabbyyyySS');

const MathProperty = Object.getOwnPropertyDescriptor(Math,'PI')
// MathProperty.writable = true
// console.log(MathProperty);

Math.PI = 4
// console.log(Math.PI);

stuDetails = {
    name:'Vikash',
    class:12,
    subjects:'PCM',
    add:{
        vill:'Mundatand',
        dist:'Seraikella Kharswan',
        state:'Jharkhand',
        pin:'833220'
    },
    phone:'8235697011'
}
Object.defineProperty(stuDetails,'add',{
    writable: false,
    enumerable: false,
})
// console.log(stuDetails);
console.log(Object.getOwnPropertyDescriptor(stuDetails,'add'));
for (const [key,value]of Object.entries(stuDetails)) {
    
    // console.log(`${key}:${value}`);
}


let languages={
    js:'JavaScript',
    py:'Python',
    'c++':'C Plus Plus',


    fees: function(){
        console.log('900');
        
    }
}
const descriptor = Object.getOwnPropertyDescriptors(languages)
for (const key in descriptor) {

    if (descriptor.hasOwnProperty(key)) {
        descriptor[key].enumerable = false 
    }
}

Object.defineProperties(languages,descriptor)

for (const key in languages) {
    const element = languages[key];
    if(typeof element !=='function'){
        console.log(`${key}:${element}`);
        
    }
}