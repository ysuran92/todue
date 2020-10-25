let cardContainerIceBox = document.querySelector("#cardContainerIceBox");

/* Too much work, probably poor code.
document.querySelector("#addIceBox").addEventListener("click", function(e) {
    let node = document.createElement("div");
    let node2 = document.createElement("input");
    let textNode = document.createTextNode("Input text here");
    node2.appendChild(textNode);
    node.appendChild(node2)
    cardContainerIceBox.appendChild(node)
});
*/

$(document).ready(function() {
    $("button#addIceBox").on("click", function() {
        $("div.cardContainer1").after(`
        <div class="newCard">
        <input>
        </div>
        `);
    });
});

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