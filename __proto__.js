console.log('Babbbyyyy');
const student = {
    name:'Raj',
    class:'XII',
    roll:35
}
const teacher = {
    empName:'Vikash',
    id:'45245',
    subject:'C++'
}
Object.setPrototypeOf(teacher,student)

console.log(teacher.name);
console.log(teacher.roll);
