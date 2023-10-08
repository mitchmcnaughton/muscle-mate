function retrieveWorkoutData() {
    // Retrieve the exercises data from localStorage
    const totalWorkoutData = localStorage.getItem('totalWorkoutData');
    const totalWorkout = JSON.parse(totalWorkoutData);

    if (totalWorkout) {
        const exerciseList = document.getElementById('workoutList');
        
        // Loop through the exercise data
        for (let i = 0; i < totalWorkout.length; i++) {
            const exerciseName = totalWorkout[i].name;
            const listItem = document.createElement('li');
            listItem.textContent = exerciseName;

            // Check for the last recorded date for the exercise
            const exerciseData = JSON.parse(localStorage.getItem(exerciseName) || "{}");
            const lastRecordedDate = Object.keys(exerciseData).sort().pop();

            if (lastRecordedDate) {
                const { weight, reps, sets } = exerciseData[lastRecordedDate];
                listItem.textContent += ` - Last recorded on ${lastRecordedDate}: ${weight} / ${reps} reps / ${sets} sets`;
            }
            
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
    currentDay.text(dayjs().format("D, dddd, MMMM"));

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

<<<<<<< Updated upstream
// Saves the workout data to local storage.
function saveWorkoutData() {
    const date = currentDate.format('YYYY-MM-DD');

    // Retrieve the exercise data for the selected exercise or initialize a new object if it doesn't exist
    let exerciseData = JSON.parse(localStorage.getItem(selectedExercise) || "{}");

    exerciseData[date] = {
        weight: $('#weight').text(),
        reps: $('#reps').text(),
        sets: $('#sets').text()
    };

    localStorage.setItem(selectedExercise, JSON.stringify(exerciseData));
}

// Load the workout data for the specified date.
function loadWorkoutData(date) {
    const exerciseData = JSON.parse(localStorage.getItem(selectedExercise) || "{}");
    const workoutForTheDate = exerciseData[date] || {};

    $('#weight').text(workoutForTheDate.weight || "0 KG");
    $('#reps').text(workoutForTheDate.reps || "0");
    $('#sets').text(workoutForTheDate.sets || "0");
}
=======
    function saveWorkoutData() {
        const today = currentDate.format('YYYY-MM-DD'); // Use currentDate here
        const allDataForToday = JSON.parse(localStorage.getItem(today) || "{}");
        
        allDataForToday[selectedExercise] = {
            weight: $('#weight').text(),
            reps: $('#reps').text(),
            sets: $('#sets').text()
        };
        
        localStorage.setItem(today, JSON.stringify(allDataForToday));
    }
     
    function loadWorkoutData(date) {
        const data = localStorage.getItem(date) || "{}";
        const allDataForTheDate = JSON.parse(data);    
        const exerciseData = allDataForTheDate[selectedExercise] || {};
        
        $('#weight').text(exerciseData.weight || "0 KG");
        $('#reps').text(exerciseData.reps || "0");
        $('#sets').text(exerciseData.sets || "0");
    }
      
>>>>>>> Stashed changes

});
