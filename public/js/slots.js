// // slots.js - Implement frontend logic

// // Function to fetch parking slots data from backend API and populate the table
// function fetchParkingSlots() {
//   axios.get('http://localhost:3000/PMS/v1/slots')
//       .then(response => {
//           const slots = response.data;
//           console.log('Response data:', response.data);
//           // Populate the table with slot data
//           const tableBody = document.getElementById('tAllData');
//           tableBody.innerHTML = '';
//           slots.forEach(slot => {
//               slot.slots.forEach(innerSlot => {
//                   tableBody.innerHTML += `
//                       <tr>
//                           <td>${slot.floorName}</td>
//                           <td>${slot.wingName}</td>
//                           <td>${innerSlot.slotName}</td>
//                           <td>${innerSlot.isAvailable ? 'Yes' : 'No'}</td>
//                           <td>${innerSlot.vehicleType}</td>
//                           <td>${innerSlot.capacity}</td>
//                           <td>${slot.isFullyOccupied ? 'Yes' : 'No'}</td>
//                           <td>${slot.isActive ? 'Yes' : 'No'}</td>
//                           <td><button class="btn btn-primary btn-sm" onclick="editSlot('${innerSlot._id}')">Edit</button></td>
//                           <td><button class="btn btn-danger btn-sm" onclick="deleteSlot('${innerSlot._id}')">Delete</button></td>
//                       </tr>
//                   `;
//               });
//           });
//       })
//       .catch(error => {
//           console.error('Error fetching parking slots:', error);
//       });
// }

// // Function to add a new parking slot
// function addParkingSlot(slotData) {
//   axios.post('http://localhost:3000/PMS/v1/slots', slotData)
//       .then(response => {
//           console.log('Slot added successfully:', response.data);
//           // Fetch updated slot data after addition
//           fetchParkingSlots();
//           // Close the modal
//           $('#slotModal').modal('hide');
//       })
//       .catch(error => {
//           console.error('Error adding parking slot:', error);
//       });
// }

// // Function to handle form submission for adding a new parking slot
// document.getElementById('btnSave').addEventListener('click', function(event) {
//   event.preventDefault();
//   // Extract slot data from the form
//   const floorName = document.getElementById('txtFloorName').value;
//   const wingName = document.getElementById('txtWingName').value;
//   const slotName = document.getElementById('txtSlot').value;
//   const vehicleType = document.getElementById('chkCategory').value;
//   const capacity = document.getElementById('txtCapacity').value;
//   const isAvailable = document.getElementById('chkSlot').checked;
//   const isFullyOccupied = document.getElementById('chkOccupied').checked;
//   const isActive = document.getElementById('chkActive').checked;
//   // Construct slot object
//   const slotData = {
//       floorName,
//       wingName,
//       slots: [{ slotName, vehicleType, isAvailable, capacity }],
//       isFullyOccupied,
//       isActive
//   };
//   // Add the new parking slot
//   addParkingSlot(slotData);
// });

// // Function to initialize the page
// function initializePage() {
//   // Fetch parking slots data when the page loads
//   fetchParkingSlots();
// }

// // Call initializePage function when the page DOM is ready
// document.addEventListener('DOMContentLoaded', initializePage);
// Function to fetch parking slots data from backend API and populate the table
function fetchParkingSlots() {
  axios.get('http://localhost:3000/PMS/v1/slots')
      .then(response => {
          // Log the response data to the console
          console.log('Response data:', response.data);

          // Extract the actual slots array from the response data
          const slots = response.data.data;
          
          // Log the slots data to verify it's correctly extracted
          console.log('Slots data:', slots);

          // Populate the table with slot data
          // Example: Update the HTML content of the table body
          const tableBody = document.getElementById('tAllData');
          tableBody.innerHTML = '';
          slots.forEach(slot => {
              slot.slots.forEach(subSlot => {
                  tableBody.innerHTML += `
                      <tr>
                          <td>${slot.floorName}</td>
                          <td>${slot.wingName}</td>
                          <td>${subSlot.slotName}</td>
                          <td>${subSlot.isAvailable ? 'Yes' : 'No'}</td>
                          <td>${subSlot.vehicleType}</td>
                          <td>${subSlot.capacity}</td>
                          <td>${slot.isFullyOccupied ? 'Yes' : 'No'}</td>
                          <td>${slot.isActive ? 'Yes' : 'No'}</td>
                          <td><button class="btn btn-danger btn-sm" onclick="deleteSlot('${subSlot._id}')">Delete</button></td>
                      </tr>
                  `;
              });
          });
      })
      .catch(error => {
          console.error('Error fetching parking slots:', error);
      });
}

// Function to add a new parking slot
function addParkingSlot(slotData) {
  axios.post('http://localhost:3000/PMS/v1/slots', slotData)
      .then(response => {
          console.log('Slot added successfully:', response.data);
          // Fetch updated slot data after addition
          fetchParkingSlots();
          // Close the modal
          $('#slotModal').modal('hide');
      })
      .catch(error => {
          console.error('Error adding parking slot:', error);
      });
}

// Function to handle form submission for adding a new parking slot
// Function to handle form submission for adding a new parking slot
document.getElementById('btnSave').addEventListener('click', function(event) {
  event.preventDefault();
  // Extract slot data from the form
  const floorName = document.getElementById('txtFloorName').value;
  const wingName = document.getElementById('txtWingName').value;
  const slotName = document.getElementById('txtSlot').value;
  const vehicleType = document.getElementById('chkCategory').value;
  const capacity = document.getElementById('txtCapacity').value;
  const isAvailable = document.getElementById('chkSlot').checked;
  const isFullyOccupied = document.getElementById('chkOccupied').checked;
  const isActive = document.getElementById('chkActive').checked;

  // Validate form data
  if (!floorName || !wingName || !slotName || !vehicleType || !capacity) {
    alert('Please fill out all required fields.');
    return;
  }

  // Construct slot object
  const slotData = {
    floorName,
    wingName,
    slots: [{ slotName, vehicleType, isAvailable, capacity, category: vehicleType }],
    isFullyOccupied,
    isActive
  };

  // Add the new parking slot
  addParkingSlot(slotData);
});
function deleteSlot(slotId) {
  // Implement the logic to delete the slot here
  console.log('Deleting slot with ID:', slotId);
  // Example: Send a DELETE request to the backend API
  axios.delete(`http://localhost:3000/PMS/v1/slots/${slotId}`)
      .then(response => {
          console.log('Slot deleted successfully:', response.data);
          // Fetch updated slot data after deletion
          fetchParkingSlots();
      })
      .catch(error => {
          console.error('Error deleting parking slot:', error);
      });
}

// Function to initialize the page
function initializePage() {
  // Fetch parking slots data when the page loads
  fetchParkingSlots();
}

// Call initializePage function when the page DOM is ready
document.addEventListener('DOMContentLoaded', initializePage);
