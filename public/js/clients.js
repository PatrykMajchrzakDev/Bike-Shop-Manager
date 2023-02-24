// Get all the table rows in the HTML table
const rows = document.querySelectorAll("table tr");

// Get the modal popup element and its close button
const modal = document.getElementsByClassName(".modal.box");

// Add a click event listener to each row
rows.forEach((row) => {
  row.addEventListener("click", (event) => {
    // Get information about the clicked row's elements
    const cells = row.querySelectorAll("td");

    // Create an array of the cell contents
    const cellContents = [];
    cellContents.unshift(cells[0].firstElementChild.dataset.dbid);

    cells.forEach((cell) => {
      //   console.log(cell.innerText.trim());
      cellContents.push(cell.innerText.trim());
    });
    console.log(cellContents);

    // select clicked table row infos
    const clientsName = document.querySelector("#ClientsNameInfo");
    const clientsPhone = document.querySelector("#ClientsPhoneInfo");
    const clientsEmail = document.querySelector("#ClientsEmailInfo");
    const clientsAddress = document.querySelector("#ClientsAddressInfo");
    const personOrCompanyRadio2 = document.querySelector("#radio-2");
    const personOrCompanyRadio3 = document.querySelector("#radio-3");
    const clientsDescription = document.querySelector(
      "#ClientsDescriptionInfo"
    );

    //Set values to modal popup
    clientsName.value = cellContents[2];
    clientsPhone.value = cellContents[3];
    clientsEmail.value = cellContents[4];
    clientsAddress.value = cellContents[6];
    clientsDescription.value = cellContents[8];

    if (cellContents[5] === "Person") {
      personOrCompanyRadio2.checked = true;
    } else {
      personOrCompanyRadio3.checked = true;
    }
    modalData = cellContents;
  });
});
