// Your code here
function createEmployeeRecord(array){
    const newEmployee = {}
    newEmployee.firstName = array[0]
    newEmployee.familyName = array[1]
    newEmployee.title = array[2]
    newEmployee.payPerHour = array[3]
    newEmployee.timeInEvents = []
    newEmployee.timeOutEvents = []
    return newEmployee
}

function createEmployeeRecords(arrayArray){
    const employeeRecords = []
    arrayArray.forEach(person => employeeRecords.push(createEmployeeRecord(person)))
    return employeeRecords
}

function createTimeInEvent(object, stampString){
    const timeIn = {}
    const splitString = stampString.split(" ")
    timeIn.type = "TimeIn"
    timeIn.date = splitString[0]
    timeIn.hour = parseInt(splitString[1])
    object.timeInEvents.push(timeIn)
    return object
}

function createTimeOutEvent(object, stampString){
    const timeOut = {}
    const splitString = stampString.split(" ")
    timeOut.type = "TimeOut"
    timeOut.date = splitString[0]
    timeOut.hour = parseInt(splitString[1])
    object.timeOutEvents.push(timeOut)
    return object
}

function hoursWorkedOnDate(employee, date){
    return (parseInt(employee.timeOutEvents.find(time => time.date === date).hour) - parseInt(employee.timeInEvents.find(time => time.date === date).hour)) / 100
}

function wagesEarnedOnDate(employee, date){
    return hoursWorkedOnDate(employee, date) * employee.payPerHour
}

function allWagesFor(employee){
    return employee.timeInEvents.reduce((pay, day) => pay + wagesEarnedOnDate(employee, day.date), 0)
}

function calculatePayroll(employee){
    return employee.reduce((pay, employee) => pay + allWagesFor(employee), 0)
}

