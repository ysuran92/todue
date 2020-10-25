/************************ ADD/REMOVE CARDS **************************/

// Ice Box

$(document).ready(function() {
    let max_fields = 1000; //Maximum allowed input fields 
    let wrapper = $(".cardContainer1"); //Input fields wrapper
    let add_button = $("#addIceBox"); //Add button class or ID
    let x = 1; //Initial input field is set to 1

    //When user click on add input button
    $(add_button).click(function(e) {
        e.preventDefault();
        //Check maximum allowed input fields
        if (x < max_fields) {
            x++; //input field increment
            //add input field
            $(wrapper).append('<div><textarea class="newCard" type="text" name="input_array_name[]" placeholder=""></textarea> <button class="btn remove_field"><i class="fas fa-trash"></i></button></div>');
        }
    });

    //when user click on remove button
    $(wrapper).on("click", ".remove_field", function(e) {
        e.preventDefault();
        $(this).parent('div').remove(); //remove inout field
        x--; //inout field decrement
    })
});

// To Do

$(document).ready(function() {
    let max_fields = 1000; //Maximum allowed input fields 
    let wrapper = $(".cardContainer2"); //Input fields wrapper
    let add_button = $("#addToDo"); //Add button class or ID
    let x = 1; //Initial input field is set to 1

    //When user click on add input button
    $(add_button).click(function(e) {
        e.preventDefault();
        //Check maximum allowed input fields
        if (x < max_fields) {
            x++; //input field increment
            //add input field
            $(wrapper).append('<div><textarea class="newCard" type="text" name="input_array_name[]" placeholder=""></textarea> <button class="btn remove_field"><i class="fas fa-trash"></i></button></div>');
        }
    });

    //when user click on remove button
    $(wrapper).on("click", ".remove_field", function(e) {
        e.preventDefault();
        $(this).parent('div').remove(); //remove inout field
        x--; //inout field decrement
    })
});

// Doing

$(document).ready(function() {
    let max_fields = 1000; //Maximum allowed input fields 
    let wrapper = $(".cardContainer3"); //Input fields wrapper
    let add_button = $("#addDoing"); //Add button class or ID
    let x = 1; //Initial input field is set to 1

    //When user click on add input button
    $(add_button).click(function(e) {
        e.preventDefault();
        //Check maximum allowed input fields
        if (x < max_fields) {
            x++; //input field increment
            //add input field
            $(wrapper).append('<div><textarea class="newCard" type="text" name="input_array_name[]" placeholder=""></textarea> <button class="btn remove_field"><i class="fas fa-trash"></i></button></div>');
        }
    });

    //when user click on remove button
    $(wrapper).on("click", ".remove_field", function(e) {
        e.preventDefault();
        $(this).parent('div').remove(); //remove inout field
        x--; //inout field decrement
    })
});

// Done

$(document).ready(function() {
    let max_fields = 1000; //Maximum allowed input fields 
    let wrapper = $(".cardContainer4"); //Input fields wrapper
    let add_button = $("#addDone"); //Add button class or ID
    let x = 1; //Initial input field is set to 1

    //When user click on add input button
    $(add_button).click(function(e) {
        e.preventDefault();
        //Check maximum allowed input fields
        if (x < max_fields) {
            x++; //input field increment
            //add input field
            $(wrapper).append('<div><textarea class="newCard" type="text" name="input_array_name[]" placeholder=""></textarea> <button class="btn remove_field"><i class="fas fa-trash"></i></button></div>');
        }
    });

    //when user click on remove button
    $(wrapper).on("click", ".remove_field", function(e) {
        e.preventDefault();
        $(this).parent('div').remove(); //remove inout field
        x--; //inout field decrement
    })
});