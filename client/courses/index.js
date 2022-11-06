'use strict'


async function addRecord() {
    let url = `http://localhost:5000/api/courses/`
    const response = await fetch(url, {method: 'POST'});
    
    console.log('Record added to table');
}

async function deleteRecord() {
    let url = `http://localhost:5000/api/courses/2`
    const response = await fetch(url, {method: 'DELETE'});
    const data = await response.json();
    console.log(data);
    console.log(`Record deleted`);
    
}

function addToCart() {
    
    console.log(`Record has been added to cart`);
}

'use strict'

document.addEventListener('DOMContentLoaded', () => {
    fetchAndRenderCourses();
});

async function fetchAndRenderCourses() {
    let url = 'http://localhost:5000/api/courses';

    // fetch courses
    const coursesJson = await fetchCourses(url);

    // render courses
    renderCourses(coursesJson);
}

async function fetchCourses(url) {
    const response = await fetch(url, {method: 'GET'});
    const data = await response.json();

    return data;
}

function renderCourses(coursesJson) {
    const coursesElement = document.querySelector("#courses-table");
    let html = "";
    
    html += "<table class='table table-striped'>";
    
    html += "<thead><tr>";
    Object.keys(coursesJson[0]).forEach(key => {
        html += `<th scope="col">${key}</th>`
    });
    html += "<tr></thead>";

    html += "<tbody>";
    coursesJson.forEach(course => {
        html += `<tr>
                    <td scope="row">${course.Id}</td>
                    <td>${course.Name}</td>
                    <td>${course.Price}</td>
                    <td>${course.Description.substring(0, 40)+'...'}</td>
                    <td><button onclick="deleteRecord()"><i class="gg-trash"></i></button><button onclick="addToCart()"><i class="gg-shopping-cart"></i></button></td>
                 </tr>`;
    });
    html += "</tbody>";

    html += "</table>";

    coursesElement.innerHTML = html;
}


