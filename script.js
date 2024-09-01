const workoutForm = document.getElementById('workoutForm');
const workoutLog = document.getElementById('workoutLog');
const clearLog = document.getElementById('clearLog');

// Event listener for form submission
workoutForm.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const workout = document.getElementById('workout').value;
    const duration = document.getElementById('duration').value;
    const calories = document.getElementById('calories').value;

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = `${workout} - ${duration} minutes - ${calories} calories burned`;

    // Add the new item to the workout log
    workoutLog.appendChild(li);

    // Clear the input fields
    workoutForm.reset();
});

// Event listener for clearing the log
clearLog.addEventListener('click', function () {
    workoutLog.innerHTML = ''; // Clear all entries
});
