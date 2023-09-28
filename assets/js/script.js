$(document).ready(function() {
    console.log('Script loaded!');

    // Display the current day using dayjs
    var currentDay = $("#currentDay");
    currentDay.text(dayjs().format("D, dddd, MMMM"));

    // Make the workoutList selectable
    $("#workoutList").selectable();

    // Add a click event listener to the workoutList items
    $('#workoutList li').on('click', function() {
        console.log("Workout list item clicked!");
        const selectedExercise = $(this).text();
        console.log(`Selected exercise: ${selectedExercise}`);
        $('#exerciseTitle').text(selectedExercise);
        if(typeof gapi !== 'undefined') {  // Check if gapi is loaded
            searchForVideos(selectedExercise);
        } else {
            console.error('Google API client is not loaded yet.');
        }
    });
});

function onGAPILoad() {
    console.log('Google API client loaded.');
}

function loadClient() {
    console.log('Loading YouTube API client...');
    gapi.client.setApiKey("AIzaSyBy9GCobOIxHBxvbwi7Hzk5XxMnoJ5yHfc");  // Replace with your key. Consider moving this server-side.
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest");
}

function searchForVideos(selectedExercise) {
    console.log(`Searching for videos for: ${selectedExercise}`);  // Added log
    loadClient().then(() => {
        execute(selectedExercise);
    });
}

function execute(selectedExercise) {
    console.log(`Executing YouTube API call for: ${selectedExercise}`);  // Added log
    return gapi.client.youtube.search.list({
            "part": "snippet",
            "maxResults": 3,
            "order": "viewCount",
            "q": selectedExercise + " exercise instructional video"
        })
        .then(function(response) {
            console.log("Response from YouTube API:", response);  // Updated log
            displaySearchResults(response.result.items);
        },
        function(err) {
            console.error("Execute error", err);
        });
}

function displaySearchResults(items) {
    console.log(`Displaying search results for videos.`);  // Added log
    let resultsHtml = items.map((item, index) => {
        return `<button data-video-id="${item.id.videoId}" class="video-result">${item.snippet.title}</button>`;
    }).join("");
    $('#videoResults').html(resultsHtml);
    $('.video-result').on('click', function() {
        const videoId = $(this).data('video-id');
        console.log(`Displaying video with ID: ${videoId}`);  // Added log
        const iframe = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        $('#videoContent').html(iframe);
    });
}

function onGAPILoad() {
    console.log('Google API client loaded.');
}

function loadClient() {
    console.log('Loading YouTube API client...');
    gapi.client.setApiKey("AIzaSyBy9GCobOIxHBxvbwi7Hzk5XxMnoJ5yHfc");  // Replace with your key. Consider moving this server-side.
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest");
}

function searchForVideos(selectedExercise) {
    console.log(`Searching for videos for: ${selectedExercise}`);  // Added log
    loadClient().then(() => {
        execute(selectedExercise);
    });
}

function execute(selectedExercise) {
    console.log(`Executing YouTube API call for: ${selectedExercise}`);  // Added log
    return gapi.client.youtube.search.list({
            "part": "snippet",
            "maxResults": 3,
            "order": "viewCount",
            "q": selectedExercise + " exercise instructional video"
        })
        .then(function(response) {
            console.log("Response from YouTube API:", response);  // Updated log
            displaySearchResults(response.result.items);
        },
        function(err) {
            console.error("Execute error", err);
        });
}

function displaySearchResults(items) {
    console.log(`Displaying search results for videos.`);  // Added log
    let resultsHtml = items.map((item, index) => {
        return `<button data-video-id="${item.id.videoId}" class="video-result">${item.snippet.title}</button>`;
    }).join("");
    $('#videoResults').html(resultsHtml);
    $('.video-result').on('click', function() {
        const videoId = $(this).data('video-id');
        console.log(`Displaying video with ID: ${videoId}`);  // Added log
        const iframe = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        $('#videoContent').html(iframe);
    });
}
