console.log('Babyyyyy');

function OuterFunction(){
    let name= 'Vikash'
    console.log(surname);
    
    function innerFunction(){
        let surname = 'Mahato'
        console.log(`Inner function ${name}`);
        
    }
    innerFunction()
}

OuterFunction()
