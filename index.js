// Add your code here
function submitData(name, email) {
    const url = 'http://localhost:3000/users'; // Replace with the actual URL
  
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    }).then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function submitData(name, email) {
    const url = 'http://localhost:3000/users'; // Replace with the actual URL
  
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    }).then((response) => response.json())
      .then((data) => {
        const id = data.id; // Assuming the response has an 'id' field
        const element = document.createElement('div');
        element.textContent = id;
        document.body.appendChild(element);
  
        return data; // Return the response data
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function submitData(name, email) {
    const url = 'http://localhost:3000/users'; // Replace with the actual URL
  
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    }).then((response) => response.json())
      .then((data) => {
        const id = data.id; // Assuming the response has an 'id' field
        const element = document.createElement('div');
        element.textContent = id;
        document.body.appendChild(element);
  
        return data; // Return the response data
      })
      .catch((error) => {
        const errorMessage = error.message; // Assuming the error has a 'message' field
        const errorElement = document.createElement('div');
        errorElement.textContent = errorMessage;
        document.body.appendChild(errorElement);
      });
  }