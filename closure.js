console.log('Babbbbyyyyy');

function outerFunction(){
    let name = 'Vikash'
    function innerFunction(){
        console.log(`Inner ${name}`);
    }
    return innerFunction
}

// When we return a function inside a scope it will not only return the funtion we returned it will returned the whole lexcial scope thats why the variable of outside the function can also be accessed

const Vikash = outerFunction()
Vikash()
