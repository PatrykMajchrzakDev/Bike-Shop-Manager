// ===============================================
// ============ COUNT (URGENT) ORDERS ============
// ===============================================

async function getListOfOrders() {
  try {
    const response = await fetch(`/api/getListOfOrders`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

//Load orders from db
addEventListener("load", countUrgentOrders);

async function countUrgentOrders() {
  let allOrders = await getListOfOrders();
  //Loop through orders and check if is Done and then if urgent
  console.log(allOrders);
  for (let order of allOrders) {
    if (order.status === "Done") {
      continue;
    } else if (
      formatDistance(
        format(new Date(), "dd-MM-yyyy"),
        new Date(order.dueDate)
      ).match(/(\d+)/) < 2
    ) {
      console.log("test");
    } else {
      console.log("shit!");
    }
  }
}
