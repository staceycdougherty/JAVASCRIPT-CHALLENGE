// from data.js
var tableData = data;

var tbody = d3.select("tbody");


// add data to table on page
data.forEach(tableData => {
    var row = tbody.append("tr");
    Object.entries(tableData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
// listen-button
var tableData = data;
var button = d3.select("#filter-btn");
var inputDate = d3.select("#datetime");

// Create event handlers 
button.on("click", runEnter);


// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);
  
  var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

  console.log(filteredData);

  // clear current table data
  d3.select("tbody").text(" ");

  // get reference to tbody with new variable
  var filteredTbody = d3.select("tbody");

  filteredData.forEach(function(sighting) {
    console.log(sighting);
    var row = filteredTbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]) {
        console.log(key, value);

        var cell = row.append("td")
        cell.text(value)
        });  
    });
};