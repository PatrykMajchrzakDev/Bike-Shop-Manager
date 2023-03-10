// Get all the table rows in the HTML table
const rows = document.querySelectorAll("table tr");

// Get the modal popup element and its close button
const modal = document.getElementsByClassName(".modal.box");
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

//Search bar functionality
const searchInput = document.querySelector("[data-search]");
let clients = [];

async function getClientsFromDB() {
  try {
    const response = await fetch("/api/clients");
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

async function getClientsList() {
  try {
    clients = await getClientsFromDB();
  } catch (error) {
    throw error;
  }
}

getClientsList();

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  clients.forEach((client) => {
    console.log(client);
  });
});
