const lastModified = new Date();
let dyn_date_element = document.getElementById('DynamicDate');
let dyn_copy = document.getElementById('copy');
dyn_date_element.textContent = lastModified;
dyn_copy.innerHTML = `&copy; ${lastModified.getFullYear()} James Green`;