// Get all the table rows in the HTML table
const rows = document.querySelectorAll("table tr");

let clientID;

// select clicked table row infos
const clientsName = document.querySelector("#ClientsNameInfo");
const clientsPhone = document.querySelector("#ClientsPhoneInfo");
const clientsEmail = document.querySelector("#ClientsEmailInfo");
const clientsAddress = document.querySelector("#ClientsAddressInfo");
const personOrCompanyRadio2 = document.querySelector("#radio-2");
const personOrCompanyRadio3 = document.querySelector("#radio-3");
const clientsDescription = document.querySelector("#ClientsDescriptionInfo");

// Add a click event listener to each row
rows.forEach((row) => {
  row.addEventListener("click", (event) => {
    // Get information about the clicked row's elements
    const cells = row.querySelectorAll("td");

    // Create an array of the cell contents
    const cellContents = [];
    clientID = cells[0].firstElementChild.dataset.dbid;
    cellContents.unshift(cells[0].firstElementChild.dataset.dbid);

    cells.forEach((cell) => {
      //   console.log(cell.innerText.trim());
      cellContents.push(cell.innerText.trim());
    });

    //Set values to modal popup
    clientsName.value = cellContents[2];
    clientsPhone.value = cellContents[3];
    clientsEmail.value = cellContents[4];
    clientsAddress.value = cellContents[6];
    clientsDescription.value = cellContents[8];

    //Mark radio button based if client is person or company
    if (cellContents[5] === "Person") {
      personOrCompanyRadio2.checked = true;
    } else {
      personOrCompanyRadio3.checked = true;
    }
  });
});

//Update client button
document
  .querySelector("#submitUpdateClientButton")
  .addEventListener("click", updateClient);

//PUT request to update existing user
async function updateClient() {
  try {
    let isPerson = "";
    personOrCompanyRadio2.checked
      ? (isPerson = "Person")
      : (isPerson = "Company");

    modalData = {
      name: clientsName.value,
      phone: clientsPhone.value,
      email: clientsEmail.value,
      address: clientsAddress.value,
      description: clientsDescription.value,
      clientID: clientID,
      personOrCompany: isPerson,
    };
    const response = await fetch("/updateClient", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        modalData: modalData,
      }),
    });
    const data = await response.json();
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

// ========= Search bar functionality =========
const searchInput = document.querySelector("[data-search]");
let clients = [];

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

// //Search input functionality. Add "hidden" class to element which doesnt have text context of inputted letter / number
searchInput.addEventListener("input", (e) => {
  //Grabs search bar input value
  const value = e.target.value.toLowerCase();
  //Grabs all tbody children (table rows)
  let tableRowClient = document.querySelector("tbody").children;

  //Loop through all table rows and checks if table row name, phone, address matches inputted value
  for (let i = 0; i < tableRowClient.length; i++) {
    let tableRowNumber = document.querySelector(`#tableRow${i}`);
    const isVisible =
      //name
      tableRowNumber.children[1].textContent
        .toLowerCase()
        .trim()
        .includes(value) ||
      //phone
      tableRowNumber.children[2].textContent
        .toLowerCase()
        .trim()
        .includes(value) ||
      //address
      tableRowNumber.children[5].textContent
        .toLowerCase()
        .trim()
        .includes(value);
    //if doesnt match then add 'hidden' class
    tableRowClient[i].classList.toggle("hidden", !isVisible);
  }
});

//Delete client button
document
  .querySelector("#deleteClientButton")
  .addEventListener("click", deleteClient);

async function deleteClient() {
  try {
    const response = await fetch("/clients/deleteClient", {
      method: "delete",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        clientID: clientID,
      }),
    });
    const data = await response.json();
    location.reload();
  } catch (error) {
    throw error;
  }
}
