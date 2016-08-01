$(document).ready(function() {
  $(document).keypress(function(event) {
      // letter b for Beyonce
      if(event.which ==98) {
        // remove all generated "person" class elements
        $('.person').remove();
      }
    });
  var totalMSalary = 0;
    $('#employeeinfo').on('submit', function(event) {
      event.preventDefault();

      var values = {};
      var fields = $('#employeeinfo').serializeArray();
      //Converts input into array

      fields.forEach(function(element) {
        values[element.name] = element.value;
      });
      //Convers array into objects

      totalMSalary += parseFloat(values.salaryY/12);
      //Takes collective salary figure then convets it into a monhtly figure
      //values.salary is a object method

      $('#employeeinfo').find('input[type=text]').val('');
      //Resets input fields
      appendDom(values);
    });



    function appendDom(empInfo) {
      $('#container').append('<div class="person"></div>');
      //$('#container').append('<button id='delete'>Delete!</button>');

      //Appends new class onto holder div 'container'
      var $el = $('#container').children().last();
      // $jquery variable that is able to reference the last made class (manipulate it)
      $('#container').append('<button class="person">Delete Employee</button>');
      $el.append('<p> Employee Name: '+empInfo.firstName+' '+ empInfo.lastName+'</p>'+'<p>Employee Number: '+empInfo.workID+'</p>'+'<p>Employee Title: '+empInfo.jobTitle+'</p>'+'<p>Annual Salary: '+empInfo.salaryY+'</p>'+'<p>Monthly Salary Expenditure(USD): '+totalMSalary+'</p>');
      console.log($el);
    };

    // function deleteButton(){
    //   $('.person').remove();
    // };



});
