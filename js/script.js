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
    $("button.btn").on("click", function() {
        $("div.cardContainer1").after(`
        <div class="newCard">
        <input>
        </div>
        `);
    });
});