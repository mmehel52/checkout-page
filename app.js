// *************for goods1*****************************
const plus11 = document.getElementById("plus1");
const minus11 = document.getElementById("minus1");
const remove11 = document.getElementById("remove1");
const counter11 = document.getElementById("counter1");
const pt11 = document.getElementById("pt1");
const subtotal = document.getElementById("subtotal");
const tax = document.getElementById("tax");
const shipping = document.getElementById("shipping");
const total = document.getElementById("total");
let sum1 = 0;
let sum2 = 0;
let sum3 = 0;
let price1 = 25.98;
let price2 = 45.99;
let price3 = 74.99;
plus11.addEventListener("click", () => {
  sum1++;
  counter11.innerHTML = sum1;
  pt11.innerHTML = "$" + sum1 * price1;
  let a = sum1 * price1 + sum2 * price2 + sum3 * price3;
  subtotal.innerHTML = "$" + a.toFixed(2);
  tax.innerHTML = "$" + (a * (18 / 100)).toFixed(2);
  shipping.innerHTML = "$15";
  total.innerHTML = "$" + (15 + a + (a * 18) / 100).toFixed(2);
});

minus11.addEventListener("click", () => {
  if (sum1 > 0) {
    sum1--;
    counter11.innerHTML = sum1;
    pt11.innerHTML = "$" + sum1 * 54.99;
    let a = sum1 * 54.99 + sum2 * 45.99 + sum3 * 74.999;
    subtotal.innerHTML = "$" + a.toFixed(2);
    tax.innerHTML = "$" + (a * (18 / 100)).toFixed(2);
    shipping.innerHTML = "$15";
    total.innerHTML = "$" + (15 + a + (a * 18) / 100).toFixed(2);
  }
});
remove11.addEventListener("click", () => {
  document.getElementById("goods1").setAttribute("class", "hidden");
  price1 = 0;
  let a = sum1 * price1 + sum2 * price2 + sum3 * price3;
  subtotal.innerHTML = "$" + a.toFixed(2);
  tax.innerHTML = "$" + (a * (18 / 100)).toFixed(2);
  shipping.innerHTML = "$15";
  total.innerHTML = "$" + (15 + a + (a * 18) / 100).toFixed(2);
});

// ********for goods2*******************************
const plus22 = document.getElementById("plus2");
const minus22 = document.getElementById("minus2");
const remove22 = document.getElementById("remove2");
const counter22 = document.getElementById("counter2");
const pt22 = document.getElementById("pt2");

plus22.addEventListener("click", () => {
  sum2++;
  counter22.innerHTML = sum2;
  pt22.innerHTML = "$" + sum2 * price2;
  let a = sum1 * price1 + sum2 * price2 + sum3 * price3;
  subtotal.innerHTML = "$" + a.toFixed(2);
  tax.innerHTML = "$" + (a * (18 / 100)).toFixed(2);
  shipping.innerHTML = "$15";
  total.innerHTML = "$" + (15 + a + (a * 18) / 100).toFixed(2);
});

minus22.addEventListener("click", () => {
  if (sum2 > 0) {
    sum2--;
    counter22.innerHTML = sum2;
    pt22.innerHTML = "$" + sum2 * price2;
    let a = sum1 * price1 + sum2 * price2 + sum3 * price3;
    subtotal.innerHTML = "$" + a.toFixed(2);
    tax.innerHTML = "$" + (a * (18 / 100)).toFixed(2);
    shipping.innerHTML = "$15";
    total.innerHTML = "$" + (15 + a + (a * 18) / 100).toFixed(2);
  }
});
remove22.addEventListener("click", () => {
  document.getElementById("goods2").setAttribute("class", "hidden");
  price2 = 0;
  let a = sum1 * price1 + sum2 * price2 + sum3 * price3;
  subtotal.innerHTML = "$" + a.toFixed(2);
  tax.innerHTML = "$" + (a * (18 / 100)).toFixed(2);
  shipping.innerHTML = "$15";
  total.innerHTML = "$" + (15 + a + (a * 18) / 100).toFixed(2);
});
// ********for goods3*******************************
const plus33 = document.getElementById("plus3");
const minus33 = document.getElementById("minus3");
const remove33 = document.getElementById("remove3");
const counter33 = document.getElementById("counter3");
const pt33 = document.getElementById("pt3");

plus33.addEventListener("click", () => {
  sum3++;
  counter33.innerHTML = sum3;
  pt33.innerHTML = "$" + sum3 * price3;
  let a = sum1 * price1 + sum2 * price2 + sum3 * price3;
  subtotal.innerHTML = "$" + a.toFixed(2);
  tax.innerHTML = "$" + (a * (18 / 100)).toFixed(2);
  shipping.innerHTML = "$15";
  total.innerHTML = "$" + (15 + a + (a * 18) / 100).toFixed(2);
});
minus33.addEventListener("click", () => {
  if (sum3 > 0) {
    sum3--;
    counter33.innerHTML = sum3;
    pt33.innerHTML = "$" + sum3 * price3;
    let a = sum1 * price1 + sum2 * price2 + sum3 * price3;
    subtotal.innerHTML = "$" + a.toFixed(2);
    tax.innerHTML = "$" + (a * (18 / 100)).toFixed(2);
    shipping.innerHTML = "$15";
    total.innerHTML = "$" + (15 + a + (a * 18) / 100).toFixed(2);
  }
});

remove33.addEventListener("click", () => {
  document.getElementById("goods3").setAttribute("class", "hidden");
  price3 = 0;
  let a = sum1 * price1 + sum2 * price2 + sum3 * price3;
  subtotal.innerHTML = "$" + a.toFixed(2);
  tax.innerHTML = "$" + (a * (18 / 100)).toFixed(2);
  shipping.innerHTML = "$15";
  total.innerHTML = "$" + (15 + a + (a * 18) / 100).toFixed(2);
});
