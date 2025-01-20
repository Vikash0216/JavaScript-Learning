console.log('Babbyyyy');

class user{
    constructor(userName,password){
        this.userName = userName
        this.password = password
    }
    get userName(){
        return this.userName
    }
    set userName(value){
        this._userName = value.toUpperCase()
    }
}



const vikash16 = new userOne('Vikash','0216')
console.log(vikash);
console.log(vikash.userName);
console.log(vikash.password);



// Another Example//

class userOne{
    constructor(userName,password){
        this.userName = userName
        this.password = password
    }
    get userName(){
        return this._userName.toUpperCase()
    }
    set userName(value){
        this._userName = value
    }

    //Use Case Alignment: Choose the approach that aligns with your application's needs. For instance, if you need to store data in a specific format, use a setter. If you need to display data differently without altering the stored value, use a getter.

    get password(){
        return this._password
    }
    set password(value){
        this._password = `${value}****`
    }
}

const vikash = new userOne('Vikash','0216')
console.log(vikash);
console.log(vikash.userName);
console.log(vikash.password);
