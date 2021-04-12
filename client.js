console.log('b');

$(document).ready(readyNow)

[yes, no, maybeso]

let employees = [];
let monthlyCost = 0;
let annualCost = 0;

function readyNow() {
    // Set up event listeners
    $('#add-employee').on( 'click', writeEmployee );
    $('#out-employees').on( 'click', '.delete', deleteEmployee );
}

function deleteEmployee() {
    // The employee ID should be unique, so if we
    // target the employee ID of the row we want to delete
    // we should be able to remove the employee from the global
    // employees array, then call calculateMonthlyCost() to recalculate monthly costs
    let employeeID = $(this).closest('tr').children('.employeeID').text();

    for (let person of employees) {
        
        // Rather than converting all of the input text to numbers, 
        // instead we write a truthy (==) statement that will suit our needs
        // and save us a few lines of code.
        if (employeeID == person.id) {
            // console.log that helps determine the element being removed
            // so that we can check if that's the one we wanted.
            // console.log('removing', employeeID, person.id);
            
            employees.splice(employees.indexOf(person), 1);

            // remove the closest <tr> line of code
            $(this).closest('tr').remove();
        }
    }
    // We then want to update the monthly costs section
    calculateMonthlyCost();
}

function writeEmployee() {
    // Get inputs and store them in an object
    let newEmployee = {
        first: $('#first-name').val(),
        last: $('#last-name').val(),
        id: $('#person-id').val(),
        title: $('#title').val(),
        salary: $('#annual-salary').val(),
    }
    // ... push that object into an array
    employees.push(newEmployee);

    // ... and append them to the list in a new row
    $('#out-employees').append(`
    <tr>
        <td>${newEmployee.first}</td>
        <td>${newEmployee.last}</td>
        <td class="employeeID">${newEmployee.id}</td>
        <td>${newEmployee.title}</td>
        <td class="employeeSalary">${newEmployee.salary}</td>
        <td>
            <button class="delete">Delete</button>
        </td>
    </tr>`);

    $('#out-employees').css('border-collapse', 'collapse');

    // ... and then empty out the input fields
    $('#first-name').val('');
    $('#last-name').val('');
    $('#person-id').val('');
    $('#title').val('');
    $('#annual-salary').val('');

    // We then want to update the monthly costs section
    calculateMonthlyCost();
    
}

function calculateMonthlyCost() {
    // reinitialize global variables
    monthlyCost = 0;
    annualCost = 0;

    // Loop through employees and recalculate monthly costs
    // ideally when we remove an employee we can easily 
    for (let person of employees) {
        annualCost += Number(person.salary);
        monthlyCost = Math.round(annualCost/12);
    }
    if (monthlyCost > 20000) {
        $('#monthly-costs').css('background-color', 'red');
    }
    if (monthlyCost <= 20000) {
        $('#monthly-costs').css('background-color', 'white');
    }
    $('#monthly-costs').text(`Total Monthly Cost: $ ${monthlyCost}`);
}