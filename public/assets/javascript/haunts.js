// neighborhoodId = require("./neighborhoodSelect");
neighborhoodId = 1;

function populateHaunts(){
    $.get("/api/locations/" + neighborhoodId, function (data){
        console.log("/api/locations/" + neighborhoodId);
        console.log(`Data: ${data}`);

        if(data){
            $(".location-section").empty();

            for (i=0; i < data.length; i++){
                console.log(data[i]);
            
                //add to DOM
                $(".location-section").append(`
                <div class="location-details">
                        <h5 class="tertiary-heading">${data[i].LOCATION_NAME}</h5>
                        <p></p>
                        <p>${data[i].LOCATION_TYPE}</p>
                        <p>${data[i].DESCRIPTION}</p>
                        <p>${data[i].LOCAL_NOTE}</p>
                    </div>
                    <div class="contact-info">
                        <ul>
                            <li id="locationPhone">${data[i].PHONE}</li>
                            <li id="locationUrl">${data[i].WEBSITE}</li>
                            <li id="locationAddress">${data[i].LOCATION_ADDRESS}</li>
                            <li id="locationHours">Hours</li>
                        </ul>
                    </div>           
                `);
            }
        }
    });
};

populateHaunts();

