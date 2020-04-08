const employees = [{
        name: 'Atticus',
        employeeNumber: '2405',
        annualSalary: '47000',
        reviewRating: 3
    },
    {
        name: 'Jem',
        employeeNumber: '62347',
        annualSalary: '63500',
        reviewRating: 4
    },
    {
        name: 'Scout',
        employeeNumber: '6243',
        annualSalary: '74750',
        reviewRating: 5
    },
    {
        name: 'Robert',
        employeeNumber: '26835',
        annualSalary: '66000',
        reviewRating: 1
    },
    {
        name: 'Mayella',
        employeeNumber: '89068',
        annualSalary: '35000',
        reviewRating: 1
    }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log('Hello')

function checkEmployees(allEmployees) {
    //let employeesWithBonus = [];

    let mayella = allEmployees[4];
    let atticus = allEmployees[0];

    let bonusPercent = [0, 4, 6, 10];
    // for (let bonusCheck of employee) {
    if (allEmployees.reviewRating < 3) {

        console.log('no bonus');
        bonusPercent[0]

    }
    if (atticus.reviewRating[0] = 3) {

        console.log('4% bonus');
        bonusPercent[1];
        return allEmployees.annualSalary * bonusPercent

    }

    // }
    // return employeesWithBonus;
}

checkEmployees(0);

//console.log(checkEmployees(4));

//let bonusCalcForEmployee = {
//name: 'Scout',
//bonusPercent: 0,
//newSalary: 0,
//  totalBonus: 0
//}

//
//
//
//function checkPenguins(allPenguins, maxHeight) {
//    let allMatchingPenguins = [];

//for (let penguin of allPenguins) {

// penguin is the same as saying allPenguins
//console.log(penguin);
//if (penguin.isCute && penguin.size < maxHeight) {
//    console.log('it is cute!')
//console.log('its smaller!')
//add current penguin into allMatchingPenguins
//allMatchingPenguins.push(penguin)
//}
//}
//return allMatchingPenguins;
//}
//console.log(checkPenguins(penguins, 0.6));