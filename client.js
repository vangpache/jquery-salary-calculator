console.log('in js');



$(document).ready(readyNow)

function readyNow() {
    $('.submitButton').on('click', addToTable)
}


function addToTable() {
    //add input fields to table
    $('.tableBody').append(
        `<tr><td>`+ 
        $('#firstNameInputField').val() +`</td><td>`+
        $('#lastNameInputField').val() +`</td><td>` +
        $('#idInputField').val() +`</td><td>` +
        $('#titleInputField').val() +`</td><td>$` +
        $('#annualSalaryInputField').val() +`</td><td>` +
        `<button>Delete</button></td></tr>`);
    
    //clear inputs
    $('#firstNameInputField').val('');
    $('#lastNameInputField').val('');
    $('#idInputField').val('');
    $('#titleInputField').val('');
    $('#annualSalaryInputField').val('');

    //

}
