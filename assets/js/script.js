
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

$(document).ready(function() {
    const currentDay = $("#currentDay");
    let selectedExercise = $("#workoutList > li").first().text();
    let currentDate = dayjs();

    // Initialize the accordion.
    initializeExerciseSelection(selectedExercise);

    $("#workoutList > li").on("click", handleExerciseClick);
    $('#videoButton').on('click', toggleAccordion);
    $("#saveWorkout").on("click", saveWorkoutData);
    $("#previousDateButton").on("click", function() { navigateDate(-1); });
    $("#nextDateButton").on("click", function() { navigateDate(1); });
    
    $('.increment-weight').click(() => updateStat('#weight', 5, ' KG'));
    $('.decrement-weight').click(() => updateStat('#weight', -5, ' KG'));
    $('.increment-reps').click(() => updateStat('#reps', 1));
    $('.decrement-reps').click(() => updateStat('#reps', -1));
    $('.increment-sets').click(() => updateStat('#sets', 1));
    $('.decrement-sets').click(() => updateStat('#sets', -1));

    // Sets the first exercise in the list to be selected and updates the UI accordingly.
    function initializeExerciseSelection(exercise) {
        $("#workoutList > li").first().addClass('ui-selected');
        updateExerciseUI(exercise);
    } 

    // Handles the click event for the exercise list.
    function handleExerciseClick() {
        $("#workoutList > li").removeClass('ui-selected');
        $(this).addClass('ui-selected');
        selectedExercise = $(this).text();
        updateExerciseUI(selectedExercise);
        collapseAccordion();
    }
    
    // Updates the UI to display the selected exercise.
    function updateExerciseUI(exercise) {
        console.log('Updating UI for:', exercise);
        $('#exerciseTitle').text(exercise).css('color', 'white');
        $('#videoContent').addClass('hidden');
        $('#videoResults').empty();
        loadWorkoutData(dayjs().format('YYYY-MM-DD'));
        $('#videoContent iframe').remove();
    }
    
    // Toggles the accordion open and closed.
    function toggleAccordion() {
        const content = $('#videoContent');
        
        if (content.hasClass('hidden')) {
            content.removeClass('hidden');
            if (typeof gapi !== 'undefined') {
                searchForVideos(selectedExercise);
            }
        } else {
            content.addClass('hidden');
        }
    }
    
    // Closes the accordion.
    function collapseAccordion() {
        $('#videoContent').addClass('hidden');
    }    

    // Searches YouTube for videos related to the selected exercise.
    function searchForVideos(selectedExercise) {
        console.log('Searching for videos for:', selectedExercise);
        loadClient().then(() => {
            execute(selectedExercise);
        });
    }

    // Loads the YouTube API client library.
    function loadClient() {
        gapi.client.setApiKey("AIzaSyAATQ2DRkyB9kGVU41kEhC34tcRZrxQ9pA");
        return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest");
    }

    // Executes the search for videos.
    function execute(selectedExercise) {
        return gapi.client.youtube.search.list({
            "part": "snippet",
            "maxResults": 3,
            "order": "relevance",
            "q": selectedExercise + " exercise instructional video"
        })
        .then(displaySearchResults, function(err) {
            console.error("Execute error", err);
        });
    }

    // Displays the search results.
    function displaySearchResults(response) {
        let items = response.result.items;
        let resultsHtml = items.map((item) => {
            return `
                <div class="video-result-box">
                    <button data-video-id="${item.id.videoId}" class="video-result p-2.5 my-2.5 bg-colour text-black">
                        <span class="video-result-title">${item.snippet.title}</span>
                    </button>
                </div>`;
        }).join("");
    
        $('#videoResults').html(resultsHtml);
        $('#videoResults').on('click', '.video-result', displayVideo);
    }

    // Displays the selected video.
    function displayVideo() {
        const videoId = $(this).data('video-id');
        const iframe = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
        $('#videoContent').html(iframe);
    }

    // Sets the video to be displayed.
    function setNewVideo(src) {
        $('#videoContent iframe').remove();  // Remove existing iframe
        const iframe = `<iframe width="560" height="315" src="${src}" frameborder="0" allowfullscreen=""></iframe>`;
        $('#videoContent').append(iframe);   // Append new iframe
    }    

    // Updates the specified stat by the specified increment.
    function updateStat(id, increment, postText='') {
        const currentValue = parseInt($(id).text());
        $(id).text(currentValue + increment + postText);
    }


    // Navigates to the previous or next day.
    function navigateDate(offset) {
        currentDate = currentDate.add(offset, 'day');
        currentDay.text(currentDate.format("D, dddd, MMMM"));
        loadWorkoutData(currentDate.format('YYYY-MM-DD'));
    }

    // Saves the workout data to local storage.
    function saveWorkoutData() {
        const today = dayjs().format('YYYY-MM-DD');
        const allDataForToday = {
            ...JSON.parse(localStorage.getItem(today) || "{}"),
            [selectedExercise]: {
                weight: $('#weight').text(),
                reps: $('#reps').text(),
                sets: $('#sets').text()
            }
        };
        localStorage.setItem(today, JSON.stringify(allDataForToday));
    }

    // Display the current day on page load.
    currentDay.text(dayjs().format("D, dddd, MMMM"));
    
    // Load the workout data for the current day.
    function loadWorkoutData(date) {
        const data = localStorage.getItem(date) || "{}";
        const allDataForTheDate = JSON.parse(data);
        const exerciseData = allDataForTheDate[selectedExercise] || {};
    
        $('#weight').text(exerciseData.weight || "0 KG");
        $('#reps').text(exerciseData.reps || "0");
        $('#sets').text(exerciseData.sets || "0");
    }    

});

