// Get all the table rows in the HTML table
const rows = document.querySelectorAll("table tr");

// Get the modal popup element and its close button
const modal = document.getElementsByClassName(".modal.box");

///////
///////
//// Fetch params ID to TBF
///////
////

async function getOrderInfoFromDB(id) {
  try {
    const response = await fetch(`/api/clickedOrderInfo?${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

// Add a click event listener to each row
rows.forEach((row) => {
  row.addEventListener("click", (event) => {
    id = row.children[0].dataset.dbid;
    orderInfo = getOrderInfoFromDB(id);
    console.log(orderInfo);
  });
});
