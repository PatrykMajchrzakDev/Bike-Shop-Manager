// Get all the table rows in the HTML table
const rows = document.querySelectorAll("table tr");

// Get the modal popup element and its close button
const modal = document.getElementsByClassName(".modal.box");

async function getOrderInfoFromDB(id) {
  try {
    const response = await fetch(`/api/clickedOrderInfo/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

// Add a click event listener to each row
rows.forEach((row) => {
  row.addEventListener("click", async (event) => {
    id = document.querySelector("#ordersID").dataset.dbid;
    orderInfo = await getOrderInfoFromDB(id);
    console.log(orderInfo);
    console.log(row);
    //Set current order id in popup modal
    orderIdValue = row.children[0].innerText;
    document.querySelector(
      "#currentOrderID"
    ).innerText = `Current order ID: ${orderIdValue}`;

    //Show status info
    document.querySelector("#OrderStatusInfo").value = orderInfo.status;

    //Show due date
    document.querySelector("#OrderDueDateInfo").value = orderInfo.dueDate;

    //Show type of service
    document.querySelector("#OrderServiceInfo").value = orderInfo.service;

    //Show client info
    document.querySelector(
      "#OrderClientInfo"
    ).value = `${orderInfo.client.name}\n${orderInfo.client.address}\n${orderInfo.client.phone}\n${orderInfo.client.email}`;

    //Show description info
    document.querySelector("#OrderDescriptionInfo").innerText =
      orderInfo.description;
  });
});
