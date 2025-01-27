function updateOutput(content) {
  document.getElementById('output').textContent = content;
}

// Function that returns a promise resolving with the input value after 2 seconds
function startPromise() {
  const inputValue = parseInt(document.getElementById('ip').value);
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(inputValue);  // Resolving with the input number after 2 seconds
    }, 2000);
  });
}

// Event listener for the button click
document.getElementById('btn').addEventListener('click', () => {
  startPromise()
    .then(number => {
      updateOutput(`Result: ${number}`); // Display the initial result after 2 seconds
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(number * 2);  // Multiply by 2 after 1 second
        }, 1000);
      });
    })
    .then(number => {
      updateOutput(`Result: ${number}`); // Display the result after multiplying by 2
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(number - 3);  // Subtract 3 after 1 second
        }, 1000);
      });
    })
    .then(number => {
      updateOutput(`Result: ${number}`); // Display the result after subtracting 3
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(number / 2);  // Divide by 2 after 1 second
        }, 1000);
      });
    })
    .then(number => {
      updateOutput(`Result: ${number}`); // Display the result after dividing by 2
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(number + 10);  // Add 10 after 1 second
        }, 1000);
      });
    })
    .then(number => {
      updateOutput(`Final Result: ${number}`); // Display the final result after adding 10
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
});