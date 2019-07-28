console.log('in js');



$(document).ready(readyNow)

let totalCost = 0;

function readyNow() {
    $('.submitButton').on('click', addToTable);
    //make a delete event listener
    $('.tableBody').on('click', '#employeeDelete', deleteThisRow);
}

function deleteThisRow() {
    console.log('delete clicked!');
    $(this).parent().parent().remove();
}

function addToTable() {
    //add input fields to table plus delete button
    $('.tableBody').append(
        `<tr><td>` +
        $('#firstNameInputField').val() + `</td><td>` +
        $('#lastNameInputField').val() + `</td><td>` +
        $('#idInputField').val() + `</td><td>` +
        $('#titleInputField').val() + `</td><td class="salaryAmount">$` +
        $('#annualSalaryInputField').val() + `</td><td>` +
        `<button id="employeeDelete">Delete</button></td></tr>`);



    totalCost += $('#annualSalaryInputField').val() / 12;
    console.log(totalCost);
    $('#monthlyTotalCostSpan').text(totalCost.toFixed(2));

    if(totalCost > 20000) {
        $('.redAlert').css('background-color', 'red');
    };

    //clear inputs
    $('#firstNameInputField').val('');
    $('#lastNameInputField').val('');
    $('#idInputField').val('');
    $('#titleInputField').val('');
    $('#annualSalaryInputField').val('');

}


