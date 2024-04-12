/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
function createEmployeeRecord(employeeData) {
    const [firstName, familyName, title, payPerHour] = employeeData;
    return {
      firstName,
      familyName,
      title,
      payPerHour,
      timeInEvents: [],
      timeOutEvents: [],
    };
  }
  function createEmployeeRecords(employeesData) {
    return employeesData.map(createEmployeeRecord);
  }
  function createTimeInEvent(dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    return {
      type: "TimeIn",
      hour,
      date,
    };
  }
  function createTimeOutEvent(dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    return {
      type: "TimeOut",
      hour,
      date,
    };
  }
  function hoursWorkedOnDate(employeeRecord, date) {
    const timeInEvent = employeeRecord.timeInEvents.find(
      (event) => event.date === date
    );
    const timeOutEvent = employeeRecord.timeOutEvents.find(
      (event) => event.date === date
    );
    const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
    return hoursWorked;
  }
  function wagesEarnedOnDate(employeeRecord, date) {
    const hoursWorked = hoursWorkedOnDate(employeeRecord, date);
    const wages = hoursWorked * employeeRecord.payPerHour;
    return wages;
  }
  function findEmployeeByFirstName(employees, firstName) {
    return employees.find((employee) => employee.firstName === firstName);
  }
  function calculatePayroll(employees) {
    return employees.reduce((totalWages, employee) => {
      return totalWages + allWagesFor.call(employee);
    }, 0);
  }
  