// ADD CARDS
/*
$(document).ready(function() {
    $("button#addIceBox").on("click", function() {
        $("div.cardContainer1").after(`
        <div class="newCard" id="test1">
        <input>
        </div>
        <button class="btn-secondary" id="deleteIceBox">
        delete
        </button>
        `);
    });
});
*/
$(document).ready(function() {
    $("button#addToDo").on("click", function() {
        $("div.cardContainer2").after(`
        <div class="newCard">
        <input>
        </div>
        `);
    });
});

$(document).ready(function() {
    $("button#addDoing").on("click", function() {
        $("div.cardContainer3").after(`
        <div class="newCard">
        <input>
        </div>
        `);
    });
});

$(document).ready(function() {
    $("button#addDone").on("click", function() {
        $("div.cardContainer4").after(`
        <div class="newCard">
        <input>
        </div>
        `);
    });
});

/************************ ADD/REMOVE CARDS **************************/

$(document).ready(function() {
    var max_fields = 10; //Maximum allowed input fields 
    var wrapper = $(".cardContainer1"); //Input fields wrapper
    var add_button = $(".add_fields"); //Add button class or ID
    var x = 1; //Initial input field is set to 1

    //When user click on add input button
    $(add_button).click(function(e) {
        e.preventDefault();
        //Check maximum allowed input fields
        if (x < max_fields) {
            x++; //input field increment
            //add input field
            $(wrapper).append('<div><textarea class="newCard" type="text" name="input_array_name[]" placeholder="Input Text Here"></textarea> <button class="btn remove_field"><i class="fas fa-trash"></i></button></div>');
        }
    });

    //when user click on remove button
    $(wrapper).on("click", ".remove_field", function(e) {
        e.preventDefault();
        $(this).parent('div').remove(); //remove inout field
        x--; //inout field decrement
    })
});