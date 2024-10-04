

document.getElementById('searchButton').addEventListener('click', function() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const rows = document.querySelectorAll('#dictionaryTable tbody tr');
    let count = 0;
    let resultText = '';

    rows.forEach(row => {
        const cells = row.getElementsByTagName('td');
        let rowContainsTerm = false;

        for (let cell of cells) {
            if (cell.textContent.toLowerCase().includes(searchTerm)) {
                rowContainsTerm = true;
                count++;
                break; 
            }
        }

        if (rowContainsTerm) {
            row.style.display = ''; 
        } else {
            row.style.display = 'none'; 
        }
    });

    resultText = count > 0 ? `Se encontraron ${count} coincidencias.` : 'No se encontraron coincidencias.';
    document.getElementById('resultContainer').innerText = resultText;
});
