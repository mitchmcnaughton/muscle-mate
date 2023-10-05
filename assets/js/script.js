
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
console.log(document.getElementById("changeSelection"))
// Attach event listeners to change and submit buttons
changeButtonModal.addEventListener("click", function () {
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


// Function to update the dropdown options with exercise names
function updateDropdownOptions(muscle) {
    const apiKey = 'EUrIT2ag8Fb6sotX40Xxjw==4NmGKZ9bLHjTp38b';
    const dropdown = document.querySelector(`.${muscle}-trigger .dropdown`);

    fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`, {
        method: 'GET',
        headers: {
            'X-Api-Key': apiKey,
            'Content-Type': 'application/json',
        },
    })
        .then(function (response) {
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
                option.classList.add('block', 'px-4', 'py-2', 'text-gray-800', 'hover:bg-gray-100', 'dark:text-white', 'dark:hover:bg-gray-700');
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
            `;
        } else {
            console.error('Exercise data not found');
        }
    })
    .catch((error) => {
        console.error('Error fetching exercise data:', error);
    });
}

//still not sure how paul is storing the data but can be easily changed!

function storeWorkoutData(){

    //all the exersizes are for testing
    const totalWorkout = [
        {
            "name": "Dumbbell Bench Press",
            "type": "strength",
            "muscle": "chest",
            "equipment": "dumbbell",
            "difficulty": "intermediate",
            "instructions": "Lie down on a flat bench with a dumbbell in each hand resting on top of your thighs. The palms of your hands will be facing each other. Then, using your thighs to help raise the dumbbells up, lift the dumbbells one at a time so that you can hold them in front of you at shoulder width. Once at shoulder width, rotate your wrists forward so that the palms of your hands are facing away from you. The dumbbells should be just to the sides of your chest, with your upper arm and forearm creating a 90 degree angle. Be sure to maintain full control of the dumbbells at all times. This will be your starting position. Then, as you breathe out, use your chest to push the dumbbells up. Lock your arms at the top of the lift and squeeze your chest, hold for a second and then begin coming down slowly. Tip: Ideally, lowering the weight should take about twice as long as raising it. Repeat the movement for the prescribed amount of repetitions of your training program.  Caution: When you are done, do not drop the dumbbells next to you as this is dangerous to your rotator cuff in your shoulders and others working out around you. Just lift your legs from the floor bending at the knees, twist your wrists so that the palms of your hands are facing each other and place the dumbbells on top of your thighs. When both dumbbells are touching your thighs simultaneously push your upper torso up (while pressing the dumbbells on your thighs) and also perform a slight kick forward with your legs (keeping the dumbbells on top of the thighs). By doing this combined movement, momentum will help you get back to a sitting position with both dumbbells still on top of your thighs. At this moment you can place the dumbbells on the floor. Variations: Another variation of this exercise is to perform it with the palms of the hands facing each other. Also, you can perform the exercise with the palms facing each other and then twisting the wrist as you lift the dumbbells so that at the top of the movement the palms are facing away from the body. I personally do not use this variation very often as it seems to be hard on my shoulders."
        }, 
        {
            "name": "Triceps dip",
            "type": "strength",
            "muscle": "triceps",
            "equipment": "body_only",
            "difficulty": "intermediate",
            "instructions": "To get into the starting position, hold your body at arm's length with your arms nearly locked above the bars. Now, inhale and slowly lower yourself downward. Your torso should remain upright and your elbows should stay close to your body. This helps to better focus on tricep involvement. Lower yourself until there is a 90 degree angle formed between the upper arm and forearm. Then, exhale and push your torso back up using your triceps to bring your body back to the starting position. Repeat the movement for the prescribed amount of repetitions.  Variations: If you are new at this exercise and do not have the strength to perform it, use a dip assist machine if available. These machines use weight to help you push your bodyweight. Otherwise, a spotter holding your legs can help. More advanced lifters can add weight to the exercise by using a weight belt that allows the addition of weighted plates."
        }, 
        {
            "name": "Incline Hammer Curls",
            "type": "strength",
            "muscle": "biceps",
            "equipment": "dumbbell",
            "difficulty": "beginner",
            "instructions": "Seat yourself on an incline bench with a dumbbell in each hand. You should pressed firmly against he back with your feet together. Allow the dumbbells to hang straight down at your side, holding them with a neutral grip. This will be your starting position. Initiate the movement by flexing at the elbow, attempting to keep the upper arm stationary. Continue to the top of the movement and pause, then slowly return to the start position."
        },
        {
            "name": "Weighted pull-up",
            "type": "strength",
            "muscle": "lats",
            "equipment": "other",
            "difficulty": "intermediate",
            "instructions": "Attach a weight to a dip belt and secure it around your waist. Grab the pull-up bar with the palms of your hands facing forward. For a medium grip, your hands should be spaced at shoulder width. Both arms should be extended in front of you holding the bar at the chosen grip. You'll want to bring your torso back about 30 degrees while creating a curvature in your lower back and sticking your chest out. This will be your starting position. Now, exhale and pull your torso up until your head is above your hands. Concentrate on squeezing your shoulder blades back and down as you reach the top contracted position. After a brief moment at the top contracted position, inhale and slowly lower your torso back to the starting position with your arms extended and your lats fully stretched."
        },
        {
            "name": "Barbell glute bridge",
            "type": "powerlifting",
            "muscle": "glutes",
            "equipment": "barbell",
            "difficulty": "intermediate",
            "instructions": "Begin seated on the ground with a loaded barbell over your legs. Using a fat bar or having a pad on the bar can greatly reduce the discomfort caused by this exercise. Roll the bar so that it is directly above your hips, and lay down flat on the floor. Begin the movement by driving through with your heels, extending your hips vertically through the bar. Your weight should be supported by your upper back and the heels of your feet. Extend as far as possible, then reverse the motion to return to the starting position."
        },
        {
            "name": "Barbell Deadlift",
            "type": "strength",
            "muscle": "hamstrings",
            "equipment": "barbell",
            "difficulty": "intermediate",
            "instructions": "Approach the bar so that it is centered over your feet. Your feet should be about hip-width apart. Bend at the hip to grip the bar at shoulder-width allowing your shoulder blades to protract. Typically, you would use an alternating grip. With your feet and your grip set, take a big breath and then lower your hips and flex the knees until your shins contact the bar. Look forward with your head. Keep your chest up and your back arched, and begin driving through the heels to move the weight upward. After the bar passes the knees aggressively pull the bar back, pulling your shoulder blades together as you drive your hips forward into the bar. Lower the bar by bending at the hips and guiding it to the floor."
        },
        {
            "name": "Smith Machine Calf Raise",
            "type": "strength",
            "muscle": "calves",
            "equipment": "machine",
            "difficulty": "intermediate",
            "instructions": "Place a block or weight plate below the bar on the Smith machine. Set the bar to a position that best matches your height. Once the correct height is chosen and the bar is loaded, step onto the plates with the balls of your feet and place the bar on the back of your shoulders. Take the bar with both hands facing forward. Rotate the bar to unrack it. This will be your starting position. Raise your heels as high as possible by pushing off of the balls of your feet, flexing your calf at the top of the contraction. Your knees should remain extended. Hold the contracted position for a second before you start to go back down. Return slowly to the starting position as you breathe in while lowering your heels. Repeat for the recommended amount of repetitions."
        }
    ]
    const totalWorkoutData = JSON.stringify(totalWorkout);

    localStorage.setItem('totalWorkoutData',totalWorkoutData)
    
    console.log('Workout data has been stored in localStorage');
   
}

//to execute the function commented out as not sure what button paul has on his page
//$("#saveWorkoutPlan").on("click", storeWorkoutData);

//calling it here to test retrieving the data
storeWorkoutData()

function retrieveWorkoutData(){

    // Retrieve the JSON data from localStorage
    const totalWorkoutData = localStorage.getItem('totalWorkoutData');

    // Parse the stored JSON data back into an object
    const totalWorkout = JSON.parse(totalWorkoutData);

    // Check if the data exists in localStorage
    if (totalWorkout) {
    // Get a reference to the <ul> element
    const exerciseList = document.getElementById('workoutList');
    
    // Loops through the exercise data and appends the name of each exersize to the list
    for (let i = 0; i < totalWorkout.length; i++) {
        const exerciseName = totalWorkout[i].name;
        const listItem = document.createElement('li');
        listItem.textContent = exerciseName;
        exerciseList.appendChild(listItem);
        
    }
        
        } else {
        console.log('Exercise data not found in localStorage.');
        }

    
}

retrieveWorkoutData()