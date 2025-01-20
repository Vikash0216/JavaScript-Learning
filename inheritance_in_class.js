console.log('Baaaaabayyyyy');
const bcrypt = require('bcrypt')

class studentDetails{
    constructor(name,id,password){
        this.name = name
        this.id = id
        this.password = password
    }

   async encryptPassword(){
        const protectionRound = 2
        const protectedPassword = await bcrypt.hash(this.password,protectionRound)
        this.password = protectedPassword
    }
    static updateName(){
        this.name = this.name.toLowerCase()
    } 

}

async function createStudent(){
    const Subham = new studentDetails('SuBham','3383','0216')
   await Subham.encryptPassword()
//    Subham.updateName()
   console.log(Subham);
   
}
createStudent()
