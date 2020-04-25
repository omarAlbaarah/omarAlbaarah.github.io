function max(firstNumber, secondNumber){
    if(firstNumber>secondNumber){
        return firstNumber;
    }
    else{
        return secondNumber;
    }
}
function maxOfThree(firstNumber, secondNumber, thirdNumber){
    let maximum = max(firstNumber,secondNumber);
    if(maximum > thirdNumber){
        return maximum;
    }
    else {
        return thirdNumber;
    }
}
function isVowel(c){
    if (c.length > 1) return false;
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1;
}
function sum(numbers){
    sum = 0;
    for(let i = 0; i<numbers.length; i++){
        sum+=numbers[i];
    }
    return sum;
}
function multiply(numbers){
    mul = 1;
    for(let i = 0; i<numbers.length; i++){
        mul*=numbers[i];
    }
    return mul;
}
function reverse(word){
    return word.split("").reverse().join("");;
}
function findLongestWord(a) {
    longestWord = "";
	for (let i = 0; i<a.length;i++) {
		if (a[i].length > longestWord.length)
			longestWord = a[i];
	}
	return longestWord;
}
function filterLongWords(words , size){
	var newArray = [];

	for (var i =0; i<words.length; i++) {
		if (words[i].length > size){
			newArray.push(words[i]);
		}
	}
	return newArray.toString();
}
function computeSumOfSquares(numbers){
   newArray =  numbers.map(function(elem, i, array) {
        return (Math.pow(elem,2)) ;})
    return  newArray.reduce(function(prevVal, elem, i, array){
        return prevVal + elem;});
         
}
function printOddNumbersOnly(numbers){
    var oddNumbers=[];
        for(let i = 0; i<numbers.length; i++){
            if(numbers[i] % 2 !== 0){
                oddNumbers.push(numbers[i]);
            }
        }
        return oddNumbers.toString();
}
function computeSumOfSquaresOfEvensOnly(numbers){
    let evenNumbers = numbers.filter(function(elem, i, array){
        return (elem % 2 === 0) });
    return computeSumOfSquares(evenNumbers);
}
function sumUsingFunctionalPogramming(numbers){
   return  numbers.reduce(function(prevVal, elem, i, array){
    return prevVal + elem;}); 
}
function multiplyUsingFunctionalPogramming(numbers){
    return numbers.reduce(function(prevVal, elem, i, array){
        return prevVal * elem;}); 
}
function findSecondBiggest(numbers){
    var max = Math.max.apply(null, numbers);
    var maxIndex = numbers.indexOf(max);
    numbers[maxIndex] = -Infinity; 
    var secondMax = Math.max.apply(null, numbers); 
    numbers[maxIndex] = max;
    return secondMax;
}
function printFibo(n, a, b, arr){
    newArray = []; 
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === a && arr[i+1] === b){
            for(let j = 0; j<n; j++){
                if(j>=arr.length){
                    break;
                }
                newArray.push(arr[j]);
            }
            break;
        }
    }
    return newArray.toString();

}
console.log("1- max for two numbers 2,5 is: " +max(2,5));
console.log("2- max for three numbers 2,5,4 is: " +maxOfThree(2,5,4));
console.log("3- is Vowel eis: " +isVowel('e'));
var ArrayOfnumbers = [1,2,3,4,5];
var ArrayforFibo = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
var ArrayOfwords = ["omar", "ahmad", "ali", "mohammad"];
console.log("4- summation for {1,2,3,4,5} is: " +sum(ArrayOfnumbers));
console.log("5- multiply for {1,2,3,4,5} is: " +multiply(ArrayOfnumbers));
console.log("6- reverse for word omar is: " +reverse("omar"));
console.log("7- find longest word for {omar, ahmad, ali, mohammad} is: " +findLongestWord(ArrayOfwords));
console.log("8- filter Long Words with lengh longer than 4 for {omar, ahmad, ali, mohammad} is: " +filterLongWords(ArrayOfwords,4));
console.log("9- compute Sum Of Squares for {1,2,3,4,5} is: " +computeSumOfSquares(ArrayOfnumbers));
console.log("10- print Odd Numbers Only {1,2,3,4,5} is: "+printOddNumbersOnly(ArrayOfnumbers)); 
console.log("11- compute Sum Of Squares Of Evens Only for {1,2,3,4,5} is: " +computeSumOfSquaresOfEvensOnly(ArrayOfnumbers));
console.log("12- summation using functional programming for {1,2,3,4,5} is: " +sumUsingFunctionalPogramming(ArrayOfnumbers));
console.log("13- multiply using functional programming for {1,2,3,4,5} is: " +multiplyUsingFunctionalPogramming(ArrayOfnumbers));
console.log("14- find Second Biggest for {1,2,3,4,5} is: " +findSecondBiggest(ArrayOfnumbers));
console.log("15- print Fibo for {0, 1, 1, 2, 3, 5, 8, 13, 21, 34} using 3,0,1 is: " +printFibo(3,0,1,ArrayforFibo));



