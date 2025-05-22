import html from "./app.html";
import './app.css'
import {Modal} from "flowbite";


const rootElement = document.getElementById('root');
rootElement.innerHTML = html;

const modalElement = document.getElementById('counterparty-modal');
const modal = new Modal(modalElement);

const counterparties = [
    {
        name: "ООО \"Покупатель\"",
        inn: "12345678945",
        address: "г.Москва, ул.Арбат, д.10",
        kpp: "773601002"
    },
    {
        name: "ООО \"Поставщик\"",
        inn: "77365709010",
        address: "г.Москва, пр.Юбилейный, д.47",
        kpp: "773601001"
    },
    {
        name: "Розничный покупатель",
        inn: "12312312345",
        address: "г.Москва, пр.Мира, д.42",
        kpp: "773601003"
    },
];

function renderTable() {
    const tableBody = document.getElementById("counterparties-body");
    tableBody.innerHTML = "";

    counterparties.forEach((item, index) => {
        const row = document.createElement("tr");
        row.className = "bg-white border-b border-gray-200";

        row.innerHTML = `
      <td class="px-6 py-4">${item.name}</td>
      <td class="px-6 py-4">${item.inn}</td>
      <td class="px-6 py-4">${item.address}</td>
      <td class="px-6 py-4">${item.kpp}</td>
      <td class="px-6 py-4">
        <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-[3px] focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-xs px-3.5 py-2.5 text-center inline-flex items-center">
        Удалить
        </button>
      </td>
    `;

        row.querySelector("button").addEventListener("click", () => deleteCounterparty(index));
        row.addEventListener("dblclick", () => openEditModal(index));

        tableBody.appendChild(row);
    });
}

function deleteCounterparty(index) {
    counterparties.splice(index, 1);
    renderTable();
}

function openEditModal(index) {
    const counterparty = counterparties[index];

    document.getElementById('name').value = counterparty.name;
    document.getElementById('inn').value = counterparty.inn;
    document.getElementById('address').value = counterparty.address;
    document.getElementById('kpp').value = counterparty.kpp;

    modalElement.setAttribute("data-index", index.toString());

    modal.show();
}

document.getElementById('add-button').addEventListener('click', function (e) {
    modalElement.querySelector("form").reset();
    modalElement.removeAttribute("data-index");
    modal.show();
});

modalElement.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const inn = document.getElementById('inn').value;
    const address = document.getElementById('address').value;
    const kpp = document.getElementById('kpp').value;

    const index = modalElement.getAttribute("data-index");
    if (index !== null && index !== "") {
        counterparties[index] = {name: name, inn: inn, address: address, kpp: kpp};
    } else {
        counterparties.push({name: name, inn: inn, address: address, kpp: kpp});
    }
    renderTable();

    modal.hide();
});

document.getElementById('cancel-button').addEventListener('click', function (e) {
    modal.hide();
});

document.addEventListener("DOMContentLoaded", () => {
    renderTable();
});
