let selectedBox = null;

function selectBox(boxNumber) {
    // Remove the 'selected' class from all boxes
    document.getElementById("box1").classList.remove("selected");
    document.getElementById("box2").classList.remove("selected");
    document.getElementById("box3").classList.remove("selected");

    // Add the 'selected' class to the clicked box
    document.getElementById("box" + boxNumber).classList.add("selected");

    // Store the selected box
    selectedBox = boxNumber;
}

document.getElementById("voteButton").addEventListener("click", function() {
    if (selectedBox === null) {
        alert("Please select a box before voting.");
        return;
    }

    const name = document.getElementById("name" + selectedBox).value;

    if (name) {
        alert("Thank you for voting for Option " + selectedBox + " with the name " + name + "!");
    } else {
        alert("Please enter a name for the selected option before voting.");
    }
});