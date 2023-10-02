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