const monthlyIncome = document.querySelector("#monthlyIncome");
const yearlyIncome = document.querySelector("#yearlyIncome");
const annualSal = document.querySelector("#annualSal");
const btn = document.querySelector(".btn");

monthlyIncome.addEventListener("change", salaryTotal);
let salary = 0;

function salaryTotal() {
  salary = Math.trunc(monthlyIncome.value * 12);
}

btn.addEventListener("click", onCLick);

function onCLick() {
  yearlyIncome.innerHTML = salary.toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP",
  });
  taxableIncome();
}

function taxableIncome() {
  if (salary < 12571) {
    annualSal.innerHTML = salary.toLocaleString("en-GB", {
      style: "currency",
      currency: "GBP",
    });
  }
  if (salary >= 12571 && salary < 50270) {
    let number = Math.trunc(salary - (salary - 12571) * 0.2);
    annualSal.innerHTML = number.toLocaleString("en-GB", {
      style: "currency",
      currency: "GBP",
    });
  }
  if (salary >= 50271 && salary < 150000) {
    let taxSalary20 = (50721 - 12571) * 0.2;
    let taxSalary40 = (salary - 50271) * 0.4;
    let number = Math.trunc(salary - (taxSalary20 + taxSalary40));
    annualSal.innerHTML = number.toLocaleString("en-GB", {
      style: "currency",
      currency: "GBP",
    });
  }
}
