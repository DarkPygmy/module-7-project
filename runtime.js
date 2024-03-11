const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsELAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsELInsert = perf.stop();

perf.start();                     
doublerAppend(largeArray);
let resultsLAppend = perf.stop();  

perf.start();
doublerInsert(largeArray);
let resultsLInsert = perf.stop();

perf.start();                     
doublerAppend(mediumArray);
let resultsMAppend = perf.stop();  

perf.start();
doublerInsert(mediumArray);
let resultsMInsert = perf.stop();

perf.start();                     
doublerAppend(smallArray);
let resultsSAppend = perf.stop();  

perf.start();
doublerInsert(smallArray);
let resultsSInsert = perf.stop();

perf.start();                     
doublerAppend(tinyArray);
let resultsTAppend = perf.stop();  

perf.start();
doublerInsert(tinyArray);
let resultsTInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsELInsert.preciseWords);
console.log("append", resultsELAppend.preciseWords);

console.log('Results for the largeArray');
console.log("insert", resultsLInsert.preciseWords);
console.log("append", resultsLAppend.preciseWords);

console.log('Results for the mediumArray');
console.log("insert", resultsMInsert.preciseWords);
console.log("append", resultsMAppend.preciseWords);

console.log('Results for the smallArray');
console.log("insert", resultsSInsert.preciseWords);
console.log("append", resultsSAppend.preciseWords);

console.log('Results for the tinyArray');
console.log("insert", resultsTInsert.preciseWords);
console.log("append", resultsTAppend.preciseWords);

/*
The unshift functions seems to scale at a much better rate then the push function, being a difference of nearly 100 times versus 23 times with the push when it came to a array of 100,000 versus 10,000 units long. Though of course the push function has such a incredbile efficency to begin with being nearly 690 times faster with a 100,000 unit array then the unshift one. The unshift function is slower since it's having to readjust the position of every single object in the array versus the push which merely adds a single new value to the end of it.
*/