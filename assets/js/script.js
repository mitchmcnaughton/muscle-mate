var experienceLevelModal = document.getElementById("experienceLevel");
var equipmentTypeModal = document.getElementById("equipmentType");
var userSelectionModal = document.getElementById("userSelection");
var experienceLevel = "";
var equipmentType = "";
var selectionsMade = false;

// Function to open a modal
function openModal(modal) {
    modal.style.display = "block";
}

// Function to close a modal
function closeModal(modal) {
    modal.style.display = "none";
}

// Attach event listeners to the options buttons
document.querySelectorAll(".option").forEach(function (button) {
    button.addEventListener("click", function () {
        if (button.parentElement === experienceLevelModal.querySelector(".modal-content")) {
            experienceLevel = button.textContent;
            closeModal(experienceLevelModal);
            openModal(equipmentTypeModal);
        } else if (button.parentElement === equipmentTypeModal.querySelector(".modal-content")) {
            equipmentType = button.textContent;
            closeModal(equipmentTypeModal);
            if (experienceLevel && equipmentType) {
                selectionsMade = true;
                openModal(userSelectionModal);
                document.getElementById("experience").textContent = experienceLevel;
                document.getElementById("equipment").textContent = equipmentType;
        }
    }
    });
});

// Attach event listeners to change and submit buttons
document.getElementById("changeSelection").addEventListener("click", function () {
    selectionsMade = false;
    openModal(experienceLevelModal);
});

document.getElementById("submitSelection").addEventListener("click", function () {
    if (selectionsMade) {
        alert("Your selection is submitted!");
    } else {
        alert("Please make both selections before submitting.");
    }
});