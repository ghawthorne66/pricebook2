const search = document.getElementById('search')
const matchList = document.getElementById('match-list')

// search items.js and filter it

const searchItem = async searchText => {
    const response = await fetch('../items.js');
    const items = await response.json();
}