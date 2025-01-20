console.log('Babbyyyy');

function user(email,password){
    this._email = email;
    this._password = password


    Object.defineProperty(this,'email',{
        get: function(){
            return `*****${this._email}`
        },
        set: function(value){
            this._email = value
        }
    })
}

const vikash = new user('v@google.com','0216')
console.log(vikash);
console.log(vikash.email);
