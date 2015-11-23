var sheetName = encodeURIComponent('Newsletter t&c');
var queryString = encodeURIComponent('SELECT A offset 1');
var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1trBV4aIU6sb04Xd8op-rEzyGkqNVWcT8qQbedaaA4RY&sheet=' + sheetName + '&tq=' + queryString);      

function getSpreadsheet() {
	query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
	if (response.isError()) {
		alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
		return;
	}
	var dataTable = response.getDataTable();
	dataTable.getNumberOfRows() ? printDataTable(dataTable) : alert('spreadsheets is empty');
}

function printDataTable(dataTable) {
	var template = '';

	template += '<ul>';
	for(index = 0; index < dataTable.getNumberOfRows(); index++) {
		template += '<li>' + dataTable.getValue(index, 0) + '</li>'
	}
	template += '</ul>';
	document.getElementById("table").innerHTML = template; 
}

google.setOnLoadCallback(getSpreadsheet);
