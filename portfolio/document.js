document.addEventListener('DOMContentLoaded', function () {
    // Footer
    var footerContainer = document.getElementById("footerContainer");
    var footer = document.createElement("footer");
  
    var currentDate = new Date();
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
      btnAlert.style.backgroundColor = 'rgb(36, 33, 36)';
    });
  
    var defaultColor = window.getComputedStyle(btnAlert).color;
    var defaultBackgroundColor = window.getComputedStyle(btnAlert).backgroundColor;
  
    btnAlert.style.color = defaultColor;
  
    btnAlert.addEventListener('mouseleave', function () {
      btnAlert.innerText = 'Click me for Surprise!';
      btnAlert.style.color = 'rgb(141, 182, 0)';
      btnAlert.style.backgroundColor = defaultBackgroundColor;
    });
  
    let count = 1;
    document.getElementById('btn-alert').onclick = () => {
      count = count + 1;
      document.getElementById('txt-counter').innerHTML = count;
      btnAlert.style.backgroundColor = 'rgb(36, 33, 36)';
  
      console.log("Count:", count);
  
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
  
    const orderedList = document.getElementById('numbers');
  
    const initialValue = 1;
    const stopValue = 100;
  
    for (let i = initialValue; i <= stopValue; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = i % 2 === 0 ? 'even' : 'odd';
      listItem.style.backgroundColor = i % 2 === 0 ? 'rgb(36, 33, 36)' : 'rgb(141, 182, 0)';
      listItem.style.transition = 'background-color 0.3s ease';
      listItem.style.cursor = 'pointer';
  
      listItem.addEventListener('mouseover', () => {
        listItem.style.backgroundColor = 'rgb(249, 248, 248)';
      });
  
      listItem.addEventListener('mouseout', () => {
        listItem.style.backgroundColor = i % 2 === 0 ? 'rgb(36, 33, 36)' : 'rgb(141, 182, 0)';
      });
  
      orderedList.appendChild(listItem);
    }
  
    // Add touch events for mobile users
    btnAlert.addEventListener('touchstart', () => {
      btnAlert.style.backgroundColor = 'rgb(249, 248, 248)';
    });
  
    btnAlert.addEventListener('touchend', () => {
      btnAlert.style.backgroundColor = count % 2 === 0 ? 'rgb(36, 33, 36)' : 'rgb(141, 182, 0)';
    });
  
    // Add responsive font size for mobile devices
    btnAlert.style.fontSize = '3vw'; // Adjust as needed
  
    // Add media query for smaller screens
    if (window.matchMedia('(max-width: 600px)').matches) {
      btnAlert.style.fontSize = '4vw'; // Adjust as needed for smaller screens
    }
  
  });
  