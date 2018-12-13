console.log('map.js linked');

var noda = document.getElementById('noda').coords
var uptown = document.getElementById('uptown').coords
var southend = document.getElementById('southend').coords
var dilworth = document.getElementById('dilworth').coords
var plaza = document.getElementById('plaza').coords

var highlightNoda = document.getElementById('highlightNoda');
var highlightUptown = document.getElementById('highlightUptown');
var highlightSouthend = document.getElementById('highlightSouthend');
var highlightDilworth = document.getElementById('highlightDilworth');
var highlightPlaza = document.getElementById('highlightPlaza');

var blankMap = document.getElementById('blankMap');

function setHeadingColor(x) {
    var heading = document.getElementById('mainHeading');
    console.log(heading);
    heading.classList.add('bg-' + x);
}

// reset heading color
function resetHeadingColors(a,b,c,d) {
    var heading = document.getElementById('mainHeading');
    heading.classList.remove('bg-' + a);
    heading.classList.remove('bg-' + b);
    heading.classList.remove('bg-' + c);
    heading.classList.remove('bg-' + d);
};

// set z-index
function setZindex(x) {
    x.style.zIndex = 30;
}

// reset z-index on selected elements
function resetZindex(x) {
    x.style.zIndex = 10;
}


// on hover do this
function getCoords(x) {
    // console.log(x);

    if (x === noda) {
    
        
        setZindex(highlightNoda);
        setHeadingColor(1);
        resetHeadingColors(2,3,4,5);
        console.log('you hovered over Noda');
    
    } else if (x === plaza) {

        
        setZindex(highlightPlaza);
        setHeadingColor(2);
        resetHeadingColors(1,3,4,5);
        console.log('you hovered over a Plaza');

    } else if (x === uptown) {

        
        setZindex(highlightUptown);
        setHeadingColor(3);
        resetHeadingColors(1,2,4,5);
        console.log('you hovered over Uptown');

    } else if (x === dilworth) {

        
        setZindex(highlightDilworth);
        setHeadingColor(4);
        resetHeadingColors(2,3,1,5);
        console.log('you hovered over Dilworth');

    } else if (x === southend) {

        
        setZindex(highlightSouthend);
        setHeadingColor(5);
        resetHeadingColors(2,3,4,1);
        console.log('you hovered over Southend');

    } else {
        setZindex(blankMap);
        console.log('z index has been reset');
    };
}

// on click

goToDetail = function() {
    window.location.href = 'detailPage.html';
    console.log("here")
}

// ToDo: 
// edit photo 
// add an "alternate" for each neightborhood 6 images total (1 original, 5 neighborhoods)
// all photos have map/area tags with same coords 
// when original photo area is hovered over... alternate photo will be brought to the foreground 
// if then statement determines which photo will then be brought to foreground