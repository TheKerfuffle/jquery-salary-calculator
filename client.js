console.log('b');

$(document).ready(readyNow)

let employees = [];
let monthlyCost = 0;
let annualCost = 0;
{/* <tr>
                <td>${person.first}</td>
                <td>${person.last}</td>
                <td>${person.id}</td>
                <td>${person.title}</td>
                <td>${person.salary}</td>
                <td>
                    <button class="delete">Delete</button>
                </td>
            </tr> 
        
        let newEmployee = {
        first: $('#first-name').val(),
        last: $('#last-name').val(),
        id: $('#person-id').val(),
        title: $('#title').val(),
        salary: $('#annual-salary').val(),
    };

    employees.push(newEmployee);

*/}

function readyNow() {
    // Set up event listeners
    $('#add-employee').on( 'click', writeEmployee);
    $('#out-employees').on( 'click', '.delete', deleteEmployee );
}

function deleteEmployee() {
    // remove the closest <tr> line of code
    // $(this).closest('tr').remove();

    // The employee ID should be unique, so if we
    // target the employee ID of the row we want to delete
    // we should be able to access the associated salary 
    // and remove that amount from the global annualSalary amount
    let target = $(this).closest('tr').data('td');
    console.log(target);

    // but we ALSO want to update the monthly costs
    // for ( let person of employees ) {
    //     $()
    // }

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

    // ... and then empty out the input fields
    $('#first-name').val('');
    $('#last-name').val('');
    $('#person-id').val('');
    $('#title').val('');
    $('#annual-salary').val('');

    // We then want to update the monthly costs section
    // First we update the monthly costs value
    monthlyCost = 0;
    annualCost = 0;
    for (let person of employees) {
        annualCost += Number(person.salary);
        monthlyCost = Math.round(annualCost/12);
        if (monthlyCost > 20000) {
            $('#monthly-costs').css('background-color', 'red')
        }
    }
    
    $('#monthly-costs').text(`Total Monthly Cost: $ ${monthlyCost}`);
    
}