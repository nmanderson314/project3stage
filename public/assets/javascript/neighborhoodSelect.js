localStorage.clear();

function populateStorage(x) {
    localStorage.setItem('neighborhoodStorage', x);
    window.location.href = 'detailPage.html';
}
