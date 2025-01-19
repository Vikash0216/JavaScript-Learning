console.log('Babbyyyy');
const bcrypt = require('bcrypt')

class student{
    constructor(stuName,email,password){
        this.stuName = stuName;
        this.email = email;
        this.password = password
    }

    async encryptPassword(){
        try {    
        const saltRounds = 1;
        const hashedPassword = await bcrypt.hash(this.password , saltRounds)
        this.password = hashedPassword

        } catch (error) {
            console.error('Password cannot be encrypted');
            
        }
    }
}
async function setUser() {
    const Vikash = new student('Raj','raj@gmail.com','Vikash0216')
    await Vikash.encryptPassword()
    console.log(Vikash.password);
    
}

// setUser()

// Function without class

function student1(stuName,email,password){
    this.stuName = stuName
    this.email = email
    this.password = password
}

student1.prototype.encryptPassword1 = async function(){
    const saltRounds = 2
    const hashedPassword = await bcrypt.hash(this.password,saltRounds)
    this.password = hashedPassword
}

async function setUser1 (){
    const Rohit = new student1('Rohit','rohit@gmail.com','0216')
   await Rohit.encryptPassword1()
    console.log(Rohit.password);
    
}
setUser1()

//Third Example

class empDetails{
    constructor(empId,password){
        this.empId = empId
        this.password= password
    }
    async passwordEncryption() {
        const encRound =1
        const passwordGen = await bcrypt.hash(this.password,encRound)
        this.password = passwordGen
    }
}

async function empGen() {
    const Rahul = new empDetails('3383','0216')
    await Rahul.passwordEncryption()

    console.log(Rahul.password);
    
}
empGen()
