console.log('Babbyyyy');

function aboutThis(){
    // console.log(this);
    // console.log(aboutThis.hello);
    
    
}
aboutThis.hello = "Good Evening"
aboutThis()


const newGame = function(userName , password){
    this.userName = userName;
    this.password = password
}

// console.log( typeof newGame);

// const Vikash = newGame('Vikash','125')
// console.log(Vikash);

const Vikash = new newGame('Vikash','125')
// console.log(Vikash);

let myDetails = {
    name: 'Vikash',
    job:'Developer',
    greetings: function(){
        // console.log(`Hey my name is ${this.name} & I am a ${this.job}`);   
    }
}

myDetails.greetings();


function user(userName,isLooggedin){
    this.userName = userName
    this.isLooggedin = isLooggedin
    return this
}

// const vikash = user('Vikash',true)
// const shivi = user('shivi',false)
// console.log(vikash);
// If we don't use the new keyword the value will always be replaced because when we don't use new keyword no new instance will be create and it will replace the old value


const vikash =new user('Vikash',true)
const shivi = new user('shivi',false)
// console.log(vikash);
console.log(vikash.constructor);