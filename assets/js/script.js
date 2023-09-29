$(document).ready(function() {
    const currentDay = $("#currentDay");
    currentDay.text(dayjs().format("D, dddd, MMMM"));

    let selectedExercise = $("#workoutList > li").first().text();
    initializeExerciseSelection(selectedExercise);

    $(document).ready(function() {
        $("#workoutList > li").on("click", handleExerciseClick);
        $('#videoButton').on('click', toggleAccordion);
        $("#saveWorkout").on("click", saveWorkoutData);
        $("#previousDateButton").on("click", function() { navigateDate(-1); });
        $("#nextDateButton").on("click", function() { navigateDate(1); });
    
        initializeExerciseSelection($("#workoutList > li").first().text());
    });
    
    function initializeExerciseSelection(exercise) {
        $("#workoutList > li").first().addClass('ui-selected');
        updateExerciseUI(exercise);
    }
    
    function handleExerciseClick() {
        $("#workoutList > li").removeClass('ui-selected');
        $(this).addClass('ui-selected');
        selectedExercise = $(this).text();
        updateExerciseUI(selectedExercise);
        collapseAccordion();
    }
    
    function updateExerciseUI(exercise) {
        console.log('Updating UI for:', exercise);
        $('#exerciseTitle').text(exercise).css('color', 'white');
        $('#videoContent').addClass('hidden');
        $('#videoResults').empty();
        loadWorkoutData(dayjs().format('YYYY-MM-DD'));
        $('#videoContent iframe').remove();
    }
    
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
    
    function collapseAccordion() {
        $('#videoContent').addClass('hidden');
    }    

    function searchForVideos(selectedExercise) {
        console.log('Searching for videos for:', selectedExercise);
        loadClient().then(() => {
            execute(selectedExercise);
        });
    }

    function loadClient() {
        gapi.client.setApiKey("AIzaSyAATQ2DRkyB9kGVU41kEhC34tcRZrxQ9pA");
        return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest");
    }

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
    

    function displayVideo() {
        const videoId = $(this).data('video-id');
        const iframe = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
        $('#videoContent').html(iframe);
    }

    function setNewVideo(src) {
        $('#videoContent iframe').remove();  // Remove existing iframe
        const iframe = `<iframe width="560" height="315" src="${src}" frameborder="0" allowfullscreen=""></iframe>`;
        $('#videoContent').append(iframe);   // Append new iframe
    }    

    function updateStat(id, increment, postText='') {
        const currentValue = parseInt($(id).text());
        $(id).text(currentValue + increment + postText);
    }

    $('.increment-weight').click(() => updateStat('#weight', 5, ' KG'));
    $('.decrement-weight').click(() => updateStat('#weight', -5, ' KG'));
    $('.increment-reps').click(() => updateStat('#reps', 1));
    $('.decrement-reps').click(() => updateStat('#reps', -1));
    $('.increment-sets').click(() => updateStat('#sets', 1));
    $('.decrement-sets').click(() => updateStat('#sets', -1));

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

    function loadWorkoutData(date) {
        const data = localStorage.getItem(date) || "{}";
        const allDataForTheDate = JSON.parse(data);
        const exerciseData = allDataForTheDate[selectedExercise] || {};

        $('#weight').text(exerciseData.weight || "0 KG");
        $('#reps').text(exerciseData.reps || "0");
        $('#sets').text(exerciseData.sets || "0");
    }

    function navigateDate(offset) {
        return function() {
            const newDate = dayjs(currentDay.text(), 'D, dddd, MMMM').add(offset, 'day').format('YYYY-MM-DD');
            currentDay.text(dayjs(newDate).format("D, dddd, MMMM"));
            loadWorkoutData(newDate);
        }
    }

    loadWorkoutData(dayjs().format('YYYY-MM-DD'));
});
