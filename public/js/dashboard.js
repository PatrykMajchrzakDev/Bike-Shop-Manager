//Change name of order header
document.querySelector("#header-title").innerText = "Dashboard";

// ===================================================
// ============ MODAL POPUP FUNCTIONALITY ============
// ===================================================
// Get all the table rows in the HTML table
const rows = document.querySelectorAll("table tr");

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
    ).value = `Name:        ${orderInfo.client.name}\nAddress:   ${orderInfo.client.address}\nPhone:       ${orderInfo.client.phone}\nEmail:         ${orderInfo.client.email}`;

    //Show description info
    document.querySelector("#OrderDescriptionInfo").value =
      orderInfo.description;
  });
});

// ====================================================
// ============ UPDATE ORDER FUNCTIONALITY ============
// ====================================================
//Update order button
document
  .querySelector("#submitUpdateOrderButton")
  .addEventListener("click", updateOrder);

//PUT request to update existing order
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
    const response = await fetch("/dashboard/updateOrder", {
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

// ====================================================
// ============ DELETE ORDER FUNCTIONALITY ============
// ====================================================
//Delete order button
document
  .querySelector("#deleteOrderButton")
  .addEventListener("click", deleteOrder);

async function deleteOrder() {
  if (confirm("Do you really want to DELETE this order?")) {
    try {
      orderID = orderInfo._id;
      const response = await fetch("/dashboard/deleteOrder", {
        method: "delete",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          orderID: orderID,
        }),
      });
      const data = await response.json();
      location.reload();
    } catch (error) {
      throw error;
    }
  }
}

// ==================================================
// ============ PAGINATION FUNCTIONALITY ============
// ==================================================
document.querySelector(".btn-active").classList.add("bg-blue");
