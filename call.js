console.log("Baaabbyyy");

function userName(name){
    this.name = name
}

function userDetails(name, email, password){
    userName(name)
    this.email = email
    this.password = password
}

const vikash = new userDetails('Vikash','vikash@gmail.com','0216')
console.log(vikash);
//userDetails { email: 'vikash@gmail.com', password: '0216' }

function studentName(name){
    this.name = name
}

function studentDettails(name,id,subject){
    studentName.call(this,name)
    // this is a parameter
    this.id = id
    this.subject = subject
}

const studentOne = new studentDettails('Rohit','3383','PCMCS')
console.log(studentOne);
