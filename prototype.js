console.log('Babbbbyyyy');

let myName = 'Vikash     '
// console.log(myName.trim().length);
// console.log(myName.length);

String.prototype.realLength = function(){
    let trimStr = this.trim()
    return trimStr.length
}

console.log(myName.realLength());

Object.prototype.noOfKeys = function(){
    // let keys = Object.keys(this)
    // return keys.length
    let count = 0
    for (const key in this) {
        if (this.hasOwnProperty(key) ) {
            
            count++
        }
    }
    return count
}

let myObj = {
    1:'a',
    2:'b',
    3:'c',
    4:'d',
}

// console.log(myObj.noOfKeys());

// console.log(myName.noOfKeys())


Array.prototype.sumOfIntegers = function(){
    let sum=0
    for(let i =0;i<this.length;i++){
        sum +=this[i]
    }
    return sum
}

let arr = [1,-8,12,15,19]

sum = arr.sumOfIntegers()

console.log(sum);

