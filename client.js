console.log('in js');



$(document).ready(readyNow)

function readyNow() {
    $('.submitButton').on('click', addToTable);
    //make a delete function event listener
    $('.tableBody').on('click', '#employeeDelete', deleteThisRow);
}


function addToTable() {
    //add input fields to table plus delete button
    $('.tableBody').append(
        `<tr><td>`+ 
        $('#firstNameInputField').val() +`</td><td>`+
        $('#lastNameInputField').val() +`</td><td>` +
        $('#idInputField').val() +`</td><td>` +
        $('#titleInputField').val() +`</td><td>$` +
        $('#annualSalaryInputField').val() +`</td><td>` +
        `<button id="employeeDelete">Delete</button></td></tr>`);
    
    //clear inputs
    $('#firstNameInputField').val('');
    $('#lastNameInputField').val('');
    $('#idInputField').val('');
    $('#titleInputField').val('');
    $('#annualSalaryInputField').val('');

    //calculate monthly costs total


}

function deleteThisRow() {
    console.log('delete clicked!');
    $(this).parent().parent().remove();
}
