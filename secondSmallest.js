const getSeconSmallest = (numbers) => {
    let smallest = Number.POSITIVE_INFINITY
    let secondSmallest = Number.POSITIVE_INFINITY

    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] < smallest) {
            secondSmallest = smallest
            smallest = numbers[i]
        } else if(numbers[i] <= secondSmallest) {
            secondSmallest = numbers[i]
        }
    }

    return(secondSmallest)
}

console.log(getSeconSmallest([4,2,8,1,0])) // 1