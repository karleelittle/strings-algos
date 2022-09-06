// function removeBlanks(str) {
//     let newStr = ' '

//     for(let i = 0; i < str.length; i++) {
//         if(str[i] != ' ') {

//             newStr += str[i]
//         }
//     }
//     return newStr
// }

// // console.log(removeBlanks("Pl ayTha tF u nkyM usi c"))
// console.log(removeBlanks("I can not BELIEVE its not BUTTER"))

// function getDigits(str) {
//     let newNumStr = ' '

//     for(let char in str) {
//         if(!isNaN(str[char])) {
//             console.log(str[char])
//         }
//     }
//     return Number(newNumStr)
// }

// console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"))

// function acronym(str) {
//     let wordsArr = str.split(' ') 
//     let acronymStr = ''

//     for(let word in wordsArr) {
//         if(wordsArr[word].length > 0) {
//             acronymStr += wordsArr[word][0].toUpperCase()
//         }
//     }
//     return acronymStr
// }

// console.log(acronym(" theres no free lunch - gotta pay yer way. "))

// function countNonSpaces(str) {
//     let counter = 0
//     for(let char in str) {
//         if (str[char] != '') {
//             counter ++
//         }
//     }
//     return counter
// }

// console.log("Honey pie, you are driving me crazy")

function removeShorterStrings( arr, len) {
    let newStrings = []
    let nextIndex = 0

    for(let value in arr) {
        if(arr[value].length >= len) {
            newStrings[nextIndex++] = arr[value]
        }
    }
    return newStrings
}

console.log (removeShorterStrings(['Good morning', 'starshine', 'the', 'earth', 'says', 'hello'], 4))