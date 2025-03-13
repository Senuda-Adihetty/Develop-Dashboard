const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

//  Show Side Bar
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

//  Hide Side Bar
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

//  Change Theme
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

// // Fill Table
// Schedules.forEach(Schedules => {
//   const tr = document.createElement('tr');
//   const trContent = `
//                 <td>${Schedules.productName}</td>
//                 <td>${Schedules.productNumber}</td>
//                 <td>${Schedules.paymentStatus}</td>
//                 <td class="${Schedules.shipping === 'Declined' ? 'danger' : Schedules.shipping === 'Pending' ? 'warning' : 'primary'}"> ${Schedules.shipping}</td>
//                 <td class="primary"> Details </td>`;

// tr.innerHTML = trContent;
// document.querySelector('table tbody').appendChild(tr);


// });

// Fill Table
Schedules.forEach(schedule => {
  const tr = document.createElement('tr');
  const trContent = `
                <td>${schedule.productName}</td>
                <td>${schedule.productNumber}</td>
                <td>${schedule.paymentStatus}</td>
                <td class="${schedule.shipping === 'Declined' ? 'danger' : schedule.shipping === 'Pending' ? 'warning' : 'primary'}"> ${schedule.shipping}</td>
                <td class="primary"> Details </td>`;

  tr.innerHTML = trContent;
  
  const tbody = document.querySelector('table tbody');
  if (tbody) {
    tbody.appendChild(tr);
  }
});

