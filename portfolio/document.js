document.addEventListener('DOMContentLoaded', function () {
    // Footer
    var footerContainer = document.getElementById("footerContainer");
    var footer = document.createElement("footer");

    var currentDate = new Date();
    // Format the date as desired (e.g., YYYY-MM-DD)
    var formattedDate = currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate();

    footer.innerHTML = `<p>&copy; ${formattedDate} Kenny Robstad</p>`;
    footerContainer.appendChild(footer);

    // Button Click Event
    var btnAlert = document.getElementById("btn-alert");
    console.log("Button element:", btnAlert);

    btnAlert.addEventListener("click", function () {
        console.log("Button clicked");
        alert("Hello World!");
    });

    // Button Hover Effect
    btnAlert.addEventListener('mouseover', function () {
        btnAlert.innerText = 'Surprise!';
        btnAlert.style.color = 'rgb(249, 248, 248)';
        btnAlert.style.backgroundColor = 'rgb(36, 33, 36)'; // Change the background color on hover
    }); 

    // Store the default color and background color
    var defaultColor = window.getComputedStyle(btnAlert).color;
    var defaultBackgroundColor = window.getComputedStyle(btnAlert).backgroundColor;

    btnAlert.style.color = defaultColor;

    btnAlert.addEventListener('mouseleave', function () {
        btnAlert.innerText = 'Click me for Surprise!';
        btnAlert.style.color = 'rgb(141, 182, 0)';
        btnAlert.style.backgroundColor = defaultBackgroundColor; // Restore the default background color
    });

    let count = 1;
    document.getElementById('btn-alert').onclick = () => {
        count = count + 1;
        document.getElementById('txt-counter').innerHTML = count;
        btnAlert.style.backgroundColor = 'rgb(36, 33, 36)';
         // Change background color on click

        console.log("Count:", count);

        // Check if count is even or odd and add the corresponding class
        if (count % 2 === 0) {
            console.log("Even");
            document.getElementById('txt-counter').classList.add('even');
            document.getElementById('txt-counter').classList.remove('odd');
            document.getElementById('btn-counter').style.backgroundColor = 'rgb(36, 33, 36)';
        } else {
            console.log("Odd");
            document.getElementById('txt-counter').classList.add('odd');
            document.getElementById('txt-counter').classList.remove('even');
            document.getElementById('btn-counter').style.backgroundColor = 'rgb(141, 182, 0)';
        }
    };
});
