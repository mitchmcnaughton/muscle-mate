var experienceLevelModal = document.getElementById("experienceLevel");
var equipmentTypeModal = document.getElementById("equipmentType");
var userSelectionModal = document.getElementById("userSelection");
var changeButtonModal = document.getElementById("changeSelection");
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

// Function to store values in local storage
function storeSelections(experience, equipment) {
    localStorage.setItem("experienceLevel", experience);
    localStorage.setItem("equipmentType", equipment);
}

// Function to retrieve values from local storage
function retrieveSelections() {
    experienceLevel = localStorage.getItem("experienceLevel");
    equipmentType = localStorage.getItem("equipmentType");
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

                    // Store selections in local storage
                    storeSelections(experienceLevel, equipmentType);
            }
        }
    });
});
console.log(document.getElementById("changeSelection"))

// Attach event listener to change button
changeButtonModal.addEventListener("click", function () {
    selectionsMade = false;
    openModal(experienceLevelModal);
});

// Attach event listener to submit button
document.getElementById("submitSelection").addEventListener("click", function () {
    if (selectionsMade) {
        // Redirect to exercises.html
        window.location.href = 'https://mitchmcnaughton.github.io/muscle-mate/pages/exercises.html';
    } else {
        alert("Please make both selections before submitting.");
    }
});

// Check if selections exist in local storage on page load
document.addEventListener("DOMContentLoaded", function () {
    retrieveSelections();
    if (experienceLevel && equipmentType) {
        // Pre-fill the selections
        document.getElementById("experience").textContent = experienceLevel;
        document.getElementById("equipment").textContent = equipmentType;
    }
});
