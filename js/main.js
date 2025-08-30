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

// Remplacer par vos URL GitHub RAW
loadCSV('https://raw.githubusercontent.com/TON-UTILISATEUR/TON-DEPOT/main/data/sauces.csv', 'sauces-list');
loadCSV('https://raw.githubusercontent.com/TON-UTILISATEUR/TON-DEPOT/main/data/viandes.csv', 'viandes-list');
loadCSV('https://raw.githubusercontent.com/TON-UTILISATEUR/TON-DEPOT/main/data/desserts.csv', 'desserts-list');
