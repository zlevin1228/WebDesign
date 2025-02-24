//function used to log into the members.html page

function checkPassword() {
    const correctPassword = "bestboardever123$"; // Change this to your desired password
    const inputPassword = document.getElementById("password").value; //grabs the password inputted
    const message = document.getElementById("message"); //message displayed incorrect/correct pass

    if (inputPassword === correctPassword) { //if password inputted is equal to correctPass
        console.log(inputPassword);
        message.style.color = "green"; //turns the color of the message green
        message.textContent = "Login successful!"; // message displayed if correct
        setTimeout(() => {
            window.location.href = "members.html"; // Redirect to another page
        }, 1000); //time out function of 1000ms to redirect to members.html
    } else {
        console.log(inputPassword);
        message.style.color = "red"; //if incorrect, message turns red
        message.textContent = "Incorrect password. Try again."; //message displayed if incorrect
    }
}

// the log in button ability to click the enter button
document.getElementById("password").addEventListener("keypress", function (event) {
    if (event.key === "Enter") { //when enter is clicked
        checkPassword(); // runs the log in function
    }
});