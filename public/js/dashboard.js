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
    let id = row.children[0].children[0].dataset.dbid;
    orderInfo = await getOrderInfoFromDB(id);
    // console.log(orderInfo);
    // console.log(row);
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
    document.querySelector("#OrderDescriptionInfo").value =
      orderInfo.description;
  });
});

//Update client button
document
  .querySelector("#submitUpdateOrderButton")
  .addEventListener("click", updateOrder);

//PUT request to update existing user
async function updateOrder() {
  try {
    modalOrderData = {
      id: orderInfo._id,
      status: document.querySelector("#OrderStatusInfo").value,
      dueDate: document.querySelector("#OrderDueDateInfo").value,
      service: document.querySelector("#OrderServiceInfo").value,
      client: orderInfo.client,
      description: document.querySelector("#OrderDescriptionInfo").value,
    };
    const response = await fetch("/updateOrder", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        modalOrderData: modalOrderData,
      }),
    });
    const data = await response.json();
    location.reload();
  } catch (err) {
    console.log(err);
  }
}
