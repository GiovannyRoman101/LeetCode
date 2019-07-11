function intersection(arr1, arr2) {
    let intersect = []
    if (arr1.length === 0 || arr2.length === 0) {
        return intersect
    }
    let ptr1 = 0
    let ptr2 = 0

    while (ptr1 < arr1.length && ptr2 < arr2.length) {
        if (arr1[ptr1] === arr2[ptr2]) {
            intersect.push(arr1[ptr1])
            ptr1++
            ptr2++
        } else if (arr1[ptr1] > arr2[ptr2]) {
            ptr2++
        } else {
            ptr1++
        }
    }

    return intersect
}

let arr1 = [1, 3, 6, 17, 21]
let arr2 = [2, 4, 6, 21]

let arr3 = [1, 3, 6, 17, 21]
let arr4 = [2, 4, 6, 6, 21]

let arr5 = [1, 2]
let arr6 = []

console.log(intersection(arr5, arr6))
