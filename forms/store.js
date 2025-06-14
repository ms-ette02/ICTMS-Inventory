const itemTypes = [
  { id: 1, name: "Printer" },
  { id: 2, name: "Monitor" },
  { id: 3, name: "Keyboard" },
  { id: 4, name: "Mouse" },
  { id: 5, name: "RAM" },
  { id: 6, name: "Power Supply" },
  { id: 7, name: "Connector" },
  { id: 8, name: "USB Cable" },
  { id: 9, name: "Network Switch" },
  { id: 10, name: "Laptop" },
  { id: 11, name: "Desktop Computer" },
  { id: 12, name: "External Hard Drive" },
  { id: 13, name: "Projector" },
  { id: 14, name: "LAN Cable" },
  { id: 15, name: "Wireless Adapter" },
  { id: 16, name: "Other" }
];

const brands = [
  { id: 1, name: "HP" },
  { id: 2, name: "Dell" },
  { id: 3, name: "Lenovo" },
  { id: 4, name: "Asus" },
  { id: 5, name: "Cisco" },
  { id: 6, name: "TP-Link" },
  { id: 7, name: "Kingston" },
  { id: 8, name: "Logitech" },
  { id: 9, name: "Acer" },
  { id: 10, name: "Other" }
];

const stockData = [];

function populateDropdowns() {
  const itemTypeSelect = document.getElementById("itemType");
  const brandSelect = document.getElementById("brand");

  itemTypes.forEach(t => {
    const option = document.createElement("option");
    option.value = t.id;
    option.textContent = t.name;
    itemTypeSelect.appendChild(option);
  });

  brands.forEach(b => {
    const option = document.createElement("option");
    option.value = b.id;
    option.textContent = b.name;
    brandSelect.appendChild(option);
  });
}

function renderTable() {
  const tableBody = document.getElementById("stockTableBody");
  tableBody.innerHTML = "";
  stockData.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.id}</td>
      <td>${item.itemType}</td>
      <td>${item.brand}</td>
      <td>${item.model}</td>
      <td>${item.serial}</td>
      <td>${item.stock}</td>
      <td>${item.consumable}</td>
    `;
    tableBody.appendChild(row);
  });
}

document.getElementById("itemForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const newItem = {
    id: stockData.length + 1,
    itemType: itemTypes.find(t => t.id == document.getElementById("itemType").value)?.name || "Unknown",
    brand: brands.find(b => b.id == document.getElementById("brand").value)?.name || "Unknown",
    model: document.getElementById("model").value,
    serial: document.getElementById("serialNumber").value,
    stock: document.getElementById("stock").value,
    consumable: document.querySelector('input[name="isConsumable"]:checked').value === "1" ? "Yes" : "No"
  };

  stockData.push(newItem);
  renderTable();
  this.reset();
});

document.addEventListener("DOMContentLoaded", populateDropdowns);
