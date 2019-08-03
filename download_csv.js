function createCSV(data) {
    var lineDelimiter = '\n';
    var csv = {
        'title': '',
        'head': '',
        'body': ''
    };

    csv.title = 'csv-title.csv';
    csv.head = '...'; // make your own csv head
    csv.body = '...'; // make your own csv body with `lineDelimiter` (optional)
    return csv;
}

function downloadCSV(csv) {
    var csvContent = csv.head + csv.body;
    if (!csvContent.match(/^data:text\/csv/i)) {
        csvContent = 'data:text/csv;charset=utf-8,' + csvContent; // use 'data:text/csv;charset=utf-8,\ufeff', if you consider using the excel
    }
    var data = encodeURI(csvContent);

    var link = document.createElement('a');
    link.href = data;
    link.download = csv.title;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// var csv = createCSV(data);
downloadCSV(https://github.com/PublicI/employment-discrimination/blob/master/data/complaints_11_17.txt)
