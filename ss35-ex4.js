let employees = JSON.parse(localStorage.getItem("employees")) || [];
const employeesPerPage = 4;
let currentPage = 1;

function addEmployee() {
    let name = document.getElementById("name").value.trim();
    let position = document.getElementById("position").value.trim();
    if (!name || !position) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }
    employees.push({ name, position });
    localStorage.setItem("employees", JSON.stringify(employees));
    document.getElementById("name").value = "";
    document.getElementById("position").value = "";
    renderEmployees();
}

function renderEmployees() {
    let list = document.getElementById("employeeList");
    list.innerHTML = "";
    
    let start = (currentPage - 1) * employeesPerPage;
    let end = start + employeesPerPage;
    let paginatedEmployees = employees.slice(start, end);
    
    paginatedEmployees.forEach((emp, index) => {
        let row = `<tr>
            <td>${start + index + 1}</td>
            <td>${emp.name}</td>
            <td>${emp.position}</td>
        </tr>`;
        list.innerHTML += row;
    });
    renderPagination();
}

function renderPagination() {
    let totalPages = Math.ceil(employees.length / employeesPerPage);
    let pagination = document.getElementById("pagination");
    pagination.innerHTML = "";
    
    for (let i = 1; i <= totalPages; i++) {
        let btn = document.createElement("button");
        btn.innerText = i;
        btn.onclick = function () {
            currentPage = i;
            renderEmployees();
        };
        if (i === currentPage) {
            btn.style.fontWeight = "bold";
        }
        pagination.appendChild(btn);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    renderEmployees();
});
