<<<<<<< HEAD
//still not sure how paul is storing the data but can be easily changed!






function storeWorkoutData(){

    //just to test since don't actually have the data yet
    const chestWorkout = {
        "name": "Dumbbell Bench Press",
        "type": "strength",
        "muscle": "chest",
        "equipment": "dumbbell",
        "difficulty": "intermediate",
        "instructions": "Lie down on a flat bench with a dumbbell in each hand resting on top of your thighs. The palms of your hands will be facing each other. Then, using your thighs to help raise the dumbbells up, lift the dumbbells one at a time so that you can hold them in front of you at shoulder width. Once at shoulder width, rotate your wrists forward so that the palms of your hands are facing away from you. The dumbbells should be just to the sides of your chest, with your upper arm and forearm creating a 90 degree angle. Be sure to maintain full control of the dumbbells at all times. This will be your starting position. Then, as you breathe out, use your chest to push the dumbbells up. Lock your arms at the top of the lift and squeeze your chest, hold for a second and then begin coming down slowly. Tip: Ideally, lowering the weight should take about twice as long as raising it. Repeat the movement for the prescribed amount of repetitions of your training program.  Caution: When you are done, do not drop the dumbbells next to you as this is dangerous to your rotator cuff in your shoulders and others working out around you. Just lift your legs from the floor bending at the knees, twist your wrists so that the palms of your hands are facing each other and place the dumbbells on top of your thighs. When both dumbbells are touching your thighs simultaneously push your upper torso up (while pressing the dumbbells on your thighs) and also perform a slight kick forward with your legs (keeping the dumbbells on top of the thighs). By doing this combined movement, momentum will help you get back to a sitting position with both dumbbells still on top of your thighs. At this moment you can place the dumbbells on the floor. Variations: Another variation of this exercise is to perform it with the palms of the hands facing each other. Also, you can perform the exercise with the palms facing each other and then twisting the wrist as you lift the dumbbells so that at the top of the movement the palms are facing away from the body. I personally do not use this variation very often as it seems to be hard on my shoulders."
    }
    
    //chest section
    //converting it to a string
    const chestWorkoutData = JSON.stringify(chestWorkout);
    //stores it locally
    localStorage.setItem('chestWorkoutData', chestWorkoutData);
    //shows its been stored :)
    console.log('Chest Workout data has been stored in localStorage');

    //triceps section
    //converting it to a string
    const tricepWorkoutData = JSON.stringify(tricepWorkout);
    //stores it locally
    localStorage.setItem('tricepWorkoutData', tricepWorkoutData);
    //shows its been stored :)
    console.log('Tricep Workout data has been stored in localStorage');

    //bicep section
    //converting it to a string
    const bicepWorkoutData = JSON.stringify(bicepWorkout);
    //stores it locally
    localStorage.setItem('bicepWorkoutData', bicepWorkoutData);
    //shows its been stored :)
    console.log('Biceps Workout data has been stored in localStorage');

     //lats section
    //converting it to a string
    const latsWorkoutData = JSON.stringify(latsWorkout);
    //stores it locally
    localStorage.setItem('latsWorkoutData', latsWorkoutDataWorkoutData);
    //shows its been stored :)
    console.log('Lats Workout data has been stored in localStorage');

    //glutes section
    //converting it to a string
    const glutesWorkoutData = JSON.stringify(glutesWorkout);
    //stores it locally
    localStorage.setItem('glutesWorkoutData', glutesWorkoutData);
    //shows its been stored :)
    console.log('Glutes Workout data has been stored in localStorage');

    //hamstrings section
    //converting it to a string
    const hamstringsWorkoutData = JSON.stringify(hamstringsWorkout);
    //stores it locally
    localStorage.setItem('hamstringsWorkoutData', hamstringsWorkoutData);
    //shows its been stored :)
    console.log('Hamstrings Workout data has been stored in localStorage');
     
    //calves section
    //converting it to a string
    const calvesWorkoutData = JSON.stringify(calvesWorkout);
    //stores it locally
    localStorage.setItem('calvesWorkoutData', calvesWorkoutData);
    //shows its been stored :)
    console.log('Calves Workout data has been stored in localStorage');
}

//to execute the function commented out as not sure what button paul has on his page
//$("#saveWorkoutPlan").on("click", storeWorkoutData);
=======
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
>>>>>>> 5e25a915b20161835979c77f981a4a79f8abb56c
