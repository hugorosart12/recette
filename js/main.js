async function loadCSV(url, listId) {
    const response = await fetch(url);
    const text = await response.text();
    const lines = text.split('\n').filter(line => line.trim() !== '');
    const ul = document.getElementById(listId);
    ul.innerHTML = '';
    lines.forEach(line => {
        const [name, link] = line.split(',');
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link;
        a.textContent = name;
        a.target = "_blank";
        li.appendChild(a);
        ul.appendChild(li);
    });
}

// URLs RAW pour hugorosart12/recette
loadCSV('https://raw.githubusercontent.com/hugorosart12/recette/main/data/sauces.csv', 'sauces-list');
loadCSV('https://raw.githubusercontent.com/hugorosart12/recette/main/data/viandes.csv', 'viandes-list');
loadCSV('https://raw.githubusercontent.com/hugorosart12/recette/main/data/desserts.csv', 'desserts-list');
