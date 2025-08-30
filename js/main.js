async function loadCSV(file, listId) {
    const response = await fetch(file);
    const text = await response.text();
    const lines = text.split('\n').filter(line => line.trim() !== '');
    const ul = document.getElementById(listId);

    lines.forEach(line => {
        const [name, url] = line.split(',');
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = url;
        a.textContent = name;
        a.target = "_blank";
        li.appendChild(a);
        ul.appendChild(li);
    });
}

loadCSV('data/sauces.csv', 'sauces-list');
loadCSV('data/viandes.csv', 'viandes-list');
loadCSV('data/desserts.csv', 'desserts-list');
