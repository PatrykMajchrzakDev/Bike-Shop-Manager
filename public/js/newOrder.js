//Change name of header
document.querySelector("#header-title").innerText = "Add new order";

// ============================================
// ============ CLIENTS SEARCH BAR ============
// ============================================

let clients = [];
let searchInput = document.querySelector("[data-searchForClientsInput]");
//Fetch clients from db
async function getClientsFromDB() {
  try {
    const response = await fetch("/api/clients");
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

//Function to save clients db document as variable
async function getClientsList() {
  try {
    clients = await getClientsFromDB();
  } catch (error) {
    throw error;
  }
}

//Saves clients db document as variable
searchInput.addEventListener("click", getClientsList);

function searchClients() {
  let filter = searchInput.value.toUpperCase();
  let clientList = document.querySelector(".searchResultList");
  clientList.innerHTML = "";

  // Loop through all clients and filter out the ones that don't match the search query
  for (let i = 0; i < clients.length; i++) {
    let client = clients[i];
    if (
      client.name.toUpperCase().indexOf(filter) > -1 ||
      client.address.toUpperCase().indexOf(filter) > -1 ||
      client.phone.toUpperCase().indexOf(filter) > -1
    ) {
      let clientDiv = document.createElement("div");
      clientDiv.innerHTML = `${client.name} | ${client.email} | ${client.address} | ${client.phone}`;

      // Add a click event listener to each client result
      clientDiv.addEventListener("click", function () {
        searchInput.value = client._id; // Set the input value to the _id of the clicked client
        clientList.innerHTML = ""; // Hide the client list after a selection is made
      });

      clientList.appendChild(clientDiv);
    }
  }
  // Add a click event listener to the document to hide the client list when clicked outside
  document.addEventListener("click", function (event) {
    if (!clientList.contains(event.target) && event.target != searchInput) {
      clientList.innerHTML = "";
    }
  });
}
