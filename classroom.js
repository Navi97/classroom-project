/** @param {number[]} grades */
export function getNumberOfGrades(grades) {
    // TODO: return the number of grades
    return grades.length;

}

/** @param {number[]} grades */
export function getSumGrades(grades) {
    // TODO: return the sum of all the grades
    return grades.reduce((acc,curr) => acc+curr,0)

}

/** @param {number[]} grades */
export function getAverageValue(grades) {
    // TODO: return the average value of all grades (sum of all grades divided by the total number of grades)
    const average=getSumGrades(grades)/getNumberOfGrades(grades);
    const rounded=average.toFixed(2);
    return rounded;
}

/** @param {number[]} grades */
export function getPassingGrades(grades) {
    // TODO: return all passing grades (10 and above)
        return grades.filter(grade => grade >=10)
}

/** @param {number[]} grades */
export function getFailingGrades(grades) {
    // TODO: return all failing grades (9 and below)
    return grades.filter(grade => grade < 10)
}

/** @param {number[]} grades */
export function getRaisedGrades(grades) {
    // TODO: return all the grades raised by 1 (no grade should exceed 20)
        return grades.map((grade) => {
            if(grade===20){
                return grade;
                }
            return grade+1
            })
}