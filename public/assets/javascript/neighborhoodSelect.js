localStorage.clear();

function populateStorage(x) {
    localStorage.setItem('neighborhoodStorage', x);
  }

$("[alt='map with noda highlighted']").click(populateStorage(1));

$("[alt='map with noda highlighted']").click(populateStorage(1));

$("[alt='map with noda highlighted']").click(populateStorage(1));
$("[alt='map with noda highlighted']").click(populateStorage(1));
document.getElementById('highlightDilworth').addEventListener("click", populateStorage(500));
document.getElementById('highlightSouthend').addEventListener("click", populateStorage(600));
// document.getElementByAttribute("alt","Noda").addEventListener("click", populateStorage(1));

// document.getElementById("plaza").addEventListener("click", populateStorage(2));

// document.getElementById("uptown").addEventListener("click", populateStorage(3));


// document.getElementById("dilworth").addEventListener("click", populateStorage(4));


// document.getElementById("southend").addEventListener("click", populateStorage(5));
