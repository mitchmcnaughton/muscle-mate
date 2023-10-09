// Dropdown elements for BICEPS
const bicepsDropdownTrigger = document.querySelector('.biceps-trigger');
let bicepsHideTimeout;

bicepsDropdownTrigger.addEventListener('mouseenter', () => {
    const dropdown = bicepsDropdownTrigger.querySelector('.dropdown');
    clearTimeout(bicepsHideTimeout);
    dropdown.classList.remove('hidden');
});

bicepsDropdownTrigger.addEventListener('mouseleave', () => {
    const dropdown = bicepsDropdownTrigger.querySelector('.dropdown');
    // short delay 100 milliseconds)
    bicepsHideTimeout = setTimeout(() => {
        dropdown.classList.add('hidden');
    }, 100);
});



//dropdown elements for CHEST
const chestDropdownTrigger = document.querySelector('.chest-trigger');
let chestHideTimeout;

chestDropdownTrigger.addEventListener('mouseenter', () => {
    const dropdown = chestDropdownTrigger.querySelector('.dropdown');
    clearTimeout(chestHideTimeout);
    dropdown.classList.remove('hidden');
});

chestDropdownTrigger.addEventListener('mouseleave', () => {
    const dropdown = chestDropdownTrigger.querySelector('.dropdown');
    //  hide the dropdown after a short delay 100 milliseconds)
    chestHideTimeout = setTimeout(() => {
        dropdown.classList.add('hidden');
    }, 100);
});




//  dropdown elements for TRICEPS
const tricepsDropdownTrigger = document.querySelector('.triceps-trigger');
let tricepsHideTimeout; // store the timeout

tricepsDropdownTrigger.addEventListener('mouseenter', () => {
    const dropdown = tricepsDropdownTrigger.querySelector('.dropdown');
    clearTimeout(tricepsHideTimeout);
    dropdown.classList.remove('hidden');
});

tricepsDropdownTrigger.addEventListener('mouseleave', () => {
    const dropdown = tricepsDropdownTrigger.querySelector('.dropdown');
    //  hide the dropdown after a short delay 100 milliseconds)
    tricepsHideTimeout = setTimeout(() => {
        dropdown.classList.add('hidden');
    }, 100);
});



// dropdown elements for Lats
const latsDropdownTrigger = document.querySelector('.lats-trigger');
let latsHideTimeout;

latsDropdownTrigger.addEventListener('mouseenter', () => {
    const dropdown = latsDropdownTrigger.querySelector('.dropdown');
    clearTimeout(latsHideTimeout);
    dropdown.classList.remove('hidden');
});

latsDropdownTrigger.addEventListener('mouseleave', () => {
    const dropdown = latsDropdownTrigger.querySelector('.dropdown');
    //  hide the dropdown after a short delay 100 milliseconds)
    latsHideTimeout = setTimeout(() => {
        dropdown.classList.add('hidden');
    }, 100);
});


// dropdown elements for Glutes
const glutesDropdownTrigger = document.querySelector('.glutes-trigger');
let glutesHideTimeout;

glutesDropdownTrigger.addEventListener('mouseenter', () => {
    const dropdown = glutesDropdownTrigger.querySelector('.dropdown');
    clearTimeout(glutesHideTimeout);
    dropdown.classList.remove('hidden');
});

glutesDropdownTrigger.addEventListener('mouseleave', () => {
    const dropdown = glutesDropdownTrigger.querySelector('.dropdown');
    //  hide the dropdown after a short delay 100 milliseconds)
    glutesHideTimeout = setTimeout(() => {
        dropdown.classList.add('hidden');
    }, 100);
});

// dropdown elements for Hamstrings
const hamstringsDropdownTrigger = document.querySelector('.hamstrings-trigger');
let hamstringsHideTimeout;

hamstringsDropdownTrigger.addEventListener('mouseenter', () => {
    const dropdown = hamstringsDropdownTrigger.querySelector('.dropdown');
    clearTimeout(hamstringsHideTimeout); // Clear any existing timeout
    dropdown.classList.remove('hidden');
});

hamstringsDropdownTrigger.addEventListener('mouseleave', () => {
    const dropdown = hamstringsDropdownTrigger.querySelector('.dropdown');
    //  hide the dropdown after a short delay 100 milliseconds)
    hamstringsHideTimeout = setTimeout(() => {
        dropdown.classList.add('hidden');
    }, 100);
});


// dropdown elements for Calves //
const calvesDropdownTrigger = document.querySelector('.calves-trigger');
let calvesHideTimeout;

calvesDropdownTrigger.addEventListener('mouseenter', () => {
    const dropdown = calvesDropdownTrigger.querySelector('.dropdown');
    clearTimeout(calvesHideTimeout);
    dropdown.classList.remove('hidden');
});

calvesDropdownTrigger.addEventListener('mouseleave', () => {
    const dropdown = calvesDropdownTrigger.querySelector('.dropdown');
    //  hide the dropdown after a short delay 100 milliseconds)
    calvesHideTimeout = setTimeout(() => {
        dropdown.classList.add('hidden');
    }, 100);
});

function retrieveSelections() {
    experienceLevel = localStorage.getItem("experienceLevel");
    equipmentType = localStorage.getItem("equipmentType");
}

retrieveSelections();


//if experience is beginner
if (experienceLevel === "Beginner") {
    console.log("beginner");
    // Function to update the dropdown options with exercise names
    function updateDropdownOptions(muscle) {
        const apiKey = 'EUrIT2ag8Fb6sotX40Xxjw==4NmGKZ9bLHjTp38b';
        const dropdown = document.querySelector(`.${muscle}-trigger .dropdown`);

        fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}&difficulty=beginner`, {
                method: 'GET',
                headers: {
                    'X-Api-Key': apiKey,
                    'Content-Type': 'application/json',
                },
            })
            .then(function(response) {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {

                dropdown.innerHTML = '';

                // Display the first two exercise names in the dropdown
                for (let i = 0; i < Math.min(2, data.length); i++) {
                    const exerciseName = data[i].name;
                    const exerciseId = data[i].id;
                    const option = document.createElement('a');
                    option.href = '#';
                    option.setAttribute('data-exercise-id', exerciseId);
                    option.classList.add('possibleExercise', 'block', 'px-4', 'py-2', 'text-white', 'hover:bg-gray-700');
                    option.textContent = exerciseName;
                    dropdown.appendChild(option);

                    // Click event listener to fetch exercise details
                    option.addEventListener('click', (e) => {
                        e.preventDefault();
                        fetchExerciseDetails(exerciseName);
                    });
                }
            })
            .catch((error) => {
                console.error('Error fetching exercise data:', error);
            });
    }

    // Trigger fetching data for each muscle group
    ['biceps', 'triceps', 'chest', 'lats', 'glutes', 'hamstrings', 'calves'].forEach((muscle) => {
        updateDropdownOptions(muscle);
    });

    // Event listener for exercise click
    document.addEventListener("click", (e) => {
        const exerciseDiv = e.target;
        if (exerciseDiv.classList.contains('exercise-name')) {
            // Clear previous selections
            document.querySelectorAll(".exercise-name.selected").forEach((el) => {
                el.classList.remove("selected");
            });

            // Add selected class to the clicked exercise name
            exerciseDiv.classList.add("selected");

            // Fetch and display exercise details in Card 2
            const exerciseId = exerciseDiv.getAttribute('data-exercise-id');
            console.log('Clicked exerciseId:', exerciseId); //this line for debugging

            if (exerciseId) { // Ensure exerciseId is defined
                fetchExerciseDetails(exerciseId);
            }
        }
    });

    // Function to fetch exercise details and then display them
    function fetchExerciseDetails(exerciseName) {
        const apiKey = 'EUrIT2ag8Fb6sotX40Xxjw==4NmGKZ9bLHjTp38b';
        const detailsElement = document.getElementById('details');

        fetch(`https://api.api-ninjas.com/v1/exercises?name=${exerciseName}`, {
                method: 'GET',
                headers: {
                    'X-Api-Key': apiKey,
                    'Content-Type': 'application/json',
                },
            })
            .then(function(response) {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                if (data.length > 0) {
                    const exerciseData = data[0];
                    // Display exercise details in Card 2
                    detailsElement.innerHTML = `
                <h2>${exerciseData.name}</h2>
                <p>Type: ${exerciseData.type}</p>
                <p>Muscle: ${exerciseData.muscle}</p>
                <p>Equipment: ${exerciseData.equipment}</p>
                <p>Difficulty: ${exerciseData.difficulty}</p>
                <p>Instructions: ${exerciseData.instructions}</p> 
            `;
                } else {
                    console.error('Exercise data not found');
                }
            })
            .catch((error) => {
                console.error('Error fetching exercise data:', error);
            });
    }




    //if experience level is Intermediate
} else if (experienceLevel === "Intermediate") {
    console.log("intermediate")
    // Function to update the dropdown options with exercise names
    function updateDropdownOptions(muscle) {
        const apiKey = 'EUrIT2ag8Fb6sotX40Xxjw==4NmGKZ9bLHjTp38b';
        const dropdown = document.querySelector(`.${muscle}-trigger .dropdown`);

        fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}&difficulty=intermediate`, {
                method: 'GET',
                headers: {
                    'X-Api-Key': apiKey,
                    'Content-Type': 'application/json',
                },
            })
            .then(function(response) {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {

                dropdown.innerHTML = '';

                // Display the first two exercise names in the dropdown
                for (let i = 0; i < Math.min(2, data.length); i++) {
                    const exerciseName = data[i].name;
                    const exerciseId = data[i].id;
                    const option = document.createElement('a');
                    option.href = '#';
                    option.setAttribute('data-exercise-id', exerciseId);
                    option.classList.add('possibleExercise', 'block', 'px-4', 'py-2', 'text-white', 'hover:bg-gray-700');
                    option.textContent = exerciseName;
                    dropdown.appendChild(option);

                    // Click event listener to fetch exercise details
                    option.addEventListener('click', (e) => {
                        e.preventDefault();
                        fetchExerciseDetails(exerciseName);
                    });
                }
            })
            .catch((error) => {
                console.error('Error fetching exercise data:', error);
            });
    }

    // Trigger fetching data for each muscle group
    ['biceps', 'triceps', 'chest', 'lats', 'glutes', 'hamstrings', 'calves'].forEach((muscle) => {
        updateDropdownOptions(muscle);
    });

    // Event listener for exercise click
    document.addEventListener("click", (e) => {
        const exerciseDiv = e.target;
        if (exerciseDiv.classList.contains('exercise-name')) {
            // Clear previous selections
            document.querySelectorAll(".exercise-name.selected").forEach((el) => {
                el.classList.remove("selected");
            });

            // Add selected class to the clicked exercise name
            exerciseDiv.classList.add("selected");

            // Fetch and display exercise details in Card 2
            const exerciseId = exerciseDiv.getAttribute('data-exercise-id');
            console.log('Clicked exerciseId:', exerciseId); //this line for debugging

            if (exerciseId) { // Ensure exerciseId is defined
                fetchExerciseDetails(exerciseId);
            }
        }
    });

    // Function to fetch exercise details and then display them
    function fetchExerciseDetails(exerciseName) {
        const apiKey = 'EUrIT2ag8Fb6sotX40Xxjw==4NmGKZ9bLHjTp38b';
        const detailsElement = document.getElementById('details');

        fetch(`https://api.api-ninjas.com/v1/exercises?name=${exerciseName}`, {
                method: 'GET',
                headers: {
                    'X-Api-Key': apiKey,
                    'Content-Type': 'application/json',
                },
            })
            .then(function(response) {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                if (data.length > 0) {
                    const exerciseData = data[0];
                    // Display exercise details in Card 2
                    detailsElement.innerHTML = `
                <h2>${exerciseData.name}</h2>
                <p>Type: ${exerciseData.type}</p>
                <p>Muscle: ${exerciseData.muscle}</p>
                <p>Equipment: ${exerciseData.equipment}</p>
                <p>Difficulty: ${exerciseData.difficulty}</p>
                <p>Instructions: ${exerciseData.instructions}</p> 
            `;
                } else {
                    console.error('Exercise data not found');
                }
            })
            .catch((error) => {
                console.error('Error fetching exercise data:', error);
            });
    }



    //if experience is expert
} else {
    console.log("expert")
    // Function to update the dropdown options with exercise names
    function updateDropdownOptions(muscle) {
        const apiKey = 'EUrIT2ag8Fb6sotX40Xxjw==4NmGKZ9bLHjTp38b';
        const dropdown = document.querySelector(`.${muscle}-trigger .dropdown`);

        fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}&difficulty=expert=&difficulty=intermediate&difficulty=beginner`, {
                method: 'GET',
                headers: {
                    'X-Api-Key': apiKey,
                    'Content-Type': 'application/json',
                },
            })
            .then(function(response) {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {

                dropdown.innerHTML = '';

                // Display the first two exercise names in the dropdown
                for (let i = 0; i < Math.min(2, data.length); i++) {
                    const exerciseName = data[i].name;
                    const exerciseId = data[i].id;
                    const option = document.createElement('a');
                    option.href = '#';
                    option.setAttribute('data-exercise-id', exerciseId);
                    option.classList.add('possibleExercise', 'block', 'px-4', 'py-2', 'text-white', 'hover:bg-gray-700');
                    option.textContent = exerciseName;
                    dropdown.appendChild(option);

                    // Click event listener to fetch exercise details
                    option.addEventListener('click', (e) => {
                        e.preventDefault();
                        fetchExerciseDetails(exerciseName);
                    });
                }
            })
            .catch((error) => {
                console.error('Error fetching exercise data:', error);
            });
    }
    // Trigger fetching data for each muscle group
    ['biceps', 'triceps', 'chest', 'lats', 'glutes', 'hamstrings', 'calves'].forEach((muscle) => {
        updateDropdownOptions(muscle);
    });

    // Event listener for exercise click
    document.addEventListener("click", (e) => {
        const exerciseDiv = e.target;
        if (exerciseDiv.classList.contains('exercise-name')) {
            // Clear previous selections
            document.querySelectorAll(".exercise-name.selected").forEach((el) => {
                el.classList.remove("selected");
            });

            // Add selected class to the clicked exercise name
            exerciseDiv.classList.add("selected");

            // Fetch and display exercise details in Card 2
            const exerciseId = exerciseDiv.getAttribute('data-exercise-id');
            console.log('Clicked exerciseId:', exerciseId); //this line for debugging

            if (exerciseId) { // Ensure exerciseId is defined
                fetchExerciseDetails(exerciseId);
            }
        }
    });

    // Function to fetch exercise details and then display them
    function fetchExerciseDetails(exerciseName) {
        const apiKey = 'EUrIT2ag8Fb6sotX40Xxjw==4NmGKZ9bLHjTp38b';
        const detailsElement = document.getElementById('details');

        fetch(`https://api.api-ninjas.com/v1/exercises?name=${exerciseName}`, {
                method: 'GET',
                headers: {
                    'X-Api-Key': apiKey,
                    'Content-Type': 'application/json',
                },
            })
            .then(function(response) {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                if (data.length > 0) {
                    const exerciseData = data[0];
                    // Display exercise details in Card 2
                    detailsElement.innerHTML = `
                <h2>${exerciseData.name}</h2>
                <p>Type: ${exerciseData.type}</p>
                <p>Muscle: ${exerciseData.muscle}</p>
                <p>Equipment: ${exerciseData.equipment}</p>
                <p>Difficulty: ${exerciseData.difficulty}</p>
                <p>Instructions: ${exerciseData.instructions}</p> 
            `;
                } else {
                    console.error('Exercise data not found');
                }
            })
            .catch((error) => {
                console.error('Error fetching exercise data:', error);
            });
    }




}

//code to remove list elements
$(document).ready(function() {
    $("#exerciseList").on("click", "li", function() {
        $(this).remove();
    });
});


function handleExerciseClick(event) {
    if (event.target.classList.contains("possibleExercise")) {
        // Get the text content of the clicked element
        var exerciseText = event.target.textContent;

        // Create a new <li> element with the exercise text and classes
        var newListItem = document.createElement("li");
        newListItem.textContent = exerciseText;
        newListItem.classList.add("flex","items-center","p-3","text-base","font-bold","rounded-lg","group-hover:shadow","bg-gray-600","hover:bg-gray-500","text-white","cursor-pointer","exercise");

        // Append the new <li> element to the "exerciseList" <ul>
        var exerciseList = document.getElementById("exerciseList");
        exerciseList.appendChild(newListItem);
    }
}

// Attach the click event handler to the document
document.addEventListener("click", handleExerciseClick);


//creating the variables for handling save/submit
var submitButton = $('#submitButton');
var saveButton = $('#saveButton');
var exerciseList = $('#exerciseList');
var exerciseArray = [];
const totalWorkout = [];
var closeModalButton = document.getElementById("closeModalButton");
var closeSaveModalButton = document.getElementById("closeSaveModalButton");
var modal = document.getElementById("myModal");
var saveModal = document.getElementById("saveModal");




//function for when use clicks the submit button
function handleSave() {
    //if no exercises have been chosen
    if (exerciseList.children("li").length === 0) {
        //modal trigger
        modal.classList.remove("hidden");

        closeModalButton.addEventListener("click", function() {
            modal.classList.add("hidden");
        });
    } else {

        //for every li push it to an array
        $('#exerciseList li').each(function() {
            exerciseArray.push($(this).text());
            console.log(exerciseArray);
        });
        //for every exercise in the array request from the api all the attributes
        for (var i = 0; i < exerciseArray.length; i++) {
            var exerciseName = exerciseArray[i];
            apiKey2 = "Lqd4VKEgy0jW7qqvjDuV9w==QzsfbN6iCuLhD7T5";
            $.ajax({
                method: 'GET',
                url: 'https://api.api-ninjas.com/v1/exercises?name=' + exerciseName,
                headers: {
                    'X-Api-Key': apiKey2
                },
                contentType: 'application/json',
                success: function(result) {
                    console.log(result);
                    totalWorkout.push(result[0]);
                    console.log(totalWorkout);

                    submitButton.css("display", "block");
                    storeWorkoutData();

                },
                error: function ajaxError(jqXHR) {
                    console.error('Error: ', jqXHR.responseText);
                }
            });
        }
        saveModal.classList.remove("hidden");
        console.log("yes")
        closeSaveModalButton.addEventListener("click", function() {
            saveModal.classList.add("hidden");
        });;
    };

};


//click event for save button
saveButton.click(handleSave);

//handling sumbit button
function handleSubmit() {
    //if list is empty do nothing
    if (exerciseList.children("li").length === 0) {

    } else {
        //redirect to main page
        window.location.href = "https://mitchmcnaughton.github.io/muscle-mate/";
    }

};
//click event for submit button
submitButton.click(handleSubmit);

//local storage
function storeWorkoutData() {

    const totalWorkoutData = JSON.stringify(totalWorkout);

    localStorage.setItem('totalWorkoutData', totalWorkoutData)

    console.log('Workout data has been stored in localStorage');

};