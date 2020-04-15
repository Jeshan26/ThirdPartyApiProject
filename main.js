//Javascript document 

//registering buttons for event handling purpose
// var buttons=document.getElementsByClassName("desc");

let weather1 = document.getElementById("weather");
let weather2 = document.getElementById("weather1");
let weather3 = document.getElementById("weather2");

var input = document.querySelector('input');
let searchWeather = document.getElementById("searchWeather");
let btns = document.getElementsByClassName("weather");
let btn = document.getElementById("desc");
let btn1 = document.getElementById("avail");
let btn2 = document.getElementById("desc1");
let btn3 = document.getElementById("avail1");
let btn4 = document.getElementById("desc2");
let btn5 = document.getElementById("avail2");
let PriceBtn = document.getElementById("price");
let btn6 = document.getElementById("desc3");
let btn7 = document.getElementById("avail3");
let Host = document.getElementById("host-rating");

var map, infoWindow;

function initMap() {
    // i made this variable sothat my code looks cleaner
    var locate = {
        center: {
            lat: 44.4077168,
            lng: -79.6767154
        },
        zoom: 8.3,
        // this creates custom styles for my map     here its like dark mode
        styles: [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#242f3e"
                }]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#746855"
                }]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#242f3e"
                }]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#d59563"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#d59563"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#13484f"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#6b9a76"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#38414e"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#212a37"
                }]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9ca5b3"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#746855"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#1f2835"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#f3d19c"
                }]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#2f3948"
                }]
            },
            {
                "featureType": "transit.station",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#d59563"
                }]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#4272b8"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#4a5566"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#17263c"
                }]
            }
        ]
    }




    map = new google.maps.Map(document.getElementById('map'), locate);


    // adding customs marker for tim and my own house and tim hortons near me,,,

    // i can create as many marker by just adding the position and name below 
    var markers = [{
            coords: {

                lat: 44.5007687,
                lng: -80.2169047
            },
            icon: "PICS/icons.png",
            title: 'Collingwood'
        },
        {
            coords: {
                lat: 43.653226,
                lng: -79.3831843
            },
            icon: "PICS/icons.png",
            title: 'Toronto'
        }, {
            coords: {
                lat: 43.8363372,
                lng: -79.8744836
            },
            icon: "PICS/icons.png",
            title: "Caledon"
        }

    ]
    // looping through above array while calling below function  ...... by this coe looks more readable
    for (var i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
    }
    // function to add marker 
    function addMarker(object) {
        var marker = new google.maps.Marker({
            position: object.coords,
            map: map,
            title: object.title,
            icon: object.icon
        });
    }
}





// browser speech API
var speechbtn = document.getElementById("btn123");
speechbtn.addEventListener("click", sound);

function sound() {
    var syn = window.speechSynthesis;
    var speak = "This is Module-5 customised with more browser API'S and third party API'S and you can also see the weather of following places. Moreover you can additionally see location in the map and also  search in the Textfield to see the weather of any City.";
    var utterthis = new SpeechSynthesisUtterance(speak);
    utterthis.pitch = 1.5;
    utterthis.rate = 1;
    syn.speak(utterthis);

}

document.getElementById("date").innerHTML = Date();
// sound on button click  Another browser api
var ding = new Audio();
ding.src = "sound.mp3";

var error = new Audio();
error.src = "error.wav";

// class vacation template
class Vacation {
    constructor(name, price, rating, location, rooms, availability, features) {
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.location = location;
        this.rooms = rooms;
        this.availability = availability;
        this.features = features;
    }
}

//class vacation description method
Vacation.prototype.description = function() {
    propertyName = "Property Name is: " + this.name;
    propertyRating = "Rating for this property is: " + this.rating;
    let main = document.getElementById('main');
    let p = document.createElement('p');
    let h3 = document.createElement('h3');
    h3.innerHTML = propertyName;
    p.innerHTML = propertyRating;
    main.appendChild(h3);
    main.appendChild(p);
    ding.play();

};
//class vacation availability method
Vacation.prototype.available = function() {
    name = this.name;
    propertyAvailability = "Currently " + name + " property is: " + this.availability;
    let main = document.getElementById('main');
    let p = document.createElement('p');
    p.innerHTML = propertyAvailability;
    main.appendChild(p);
    ding.play();
};
// 2 object being instantiated
let winter = new Vacation('Tiny Winter Getaway', 234, 4, 'Collingwood', 2, 'Not Available', 'Near Beach');

let quiet = new Vacation('Quiet Getaway', 270, 5, 'Collingwood', 2, 'Available', 'Quiet');

//class superproperty being inherited from vacation
class SpecialProperty extends Vacation {
    constructor(name, price, rating, location, rooms, availability, features, discount) {
        super(name, price, rating, location, rooms, availability, features);
        this.discount = discount;
    }
}
// another method being implemented
SpecialProperty.prototype.newPrice = function() {
    name = this.name;
    discountPercent = this.discount / 100;
    newPrice = "Grab the oppurtunity to to visit " + name + " this place at our discounted price which is :" + ((this.price) - (this.price * discountPercent));
    let main = document.getElementById('main');
    let p = document.createElement('p');
    p.innerHTML = newPrice;
    main.appendChild(p);
    ding.play();
};
// instantiating object for inherited class
let special = new SpecialProperty('High Floor', 500, 5, 'Toronto', 2, 'Available', '28th Floor', 20);


// another class being inherited from vacation class
class SuperHost extends Vacation {
    constructor(name, price, rating, location, rooms, availability, features, host) {
        super(name, price, rating, location, rooms, availability, features);
        this.host = host;

    }
}

// function added to inherited class to increase its functionality

SuperHost.prototype.hostratings = function() {
    name = this.name;
    guider = name + "'s host rating is:  " + this.host;
    let main = document.getElementById('main');
    let p = document.createElement('p');
    p.innerHTML = guider;
    main.appendChild(p);
    ding.play();
}
//object being instantiated

let superhost = new SuperHost('Blackberry-Valley', 550, 5, 'Caledon', 5, 'Available', '28th Floor', 4.5);

// below events are being registered

btn.addEventListener("click", function() {
    quiet.description();
})
btn1.addEventListener("click", function() {
    quiet.available();
})

btn2.addEventListener("click", function() {
    winter.description();
})

btn3.addEventListener("click", function() {
    winter.available();
})

btn4.addEventListener("click", function() {
    special.description();
})
btn5.addEventListener("click", function() {
    special.available();
})

PriceBtn.addEventListener("click", function() {
    special.newPrice();
})

btn6.addEventListener("click", function() {
    superhost.description();
})
btn7.addEventListener("click", function() {
    superhost.available();
})

Host.addEventListener("click", function() {
    superhost.hostratings();
});

searchWeather.addEventListener('click', getWeather);

//   weather1.onclick=getWeather;
//   weather2.onclick=getWeather;

//   weather3.onclick=getWeather;



for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = getWeather;


}


function getWeather(e) {

    var cityname;
    //use event object, this will target the buton that is clicked on 
    let whichButton = e.target;
    console.log(whichButton);
    // I added a class to the different buttons in the HTML 
    // the contains method checks to see if a class exists 
    if (whichButton.classList.contains('weather1')) {
        cityname = 'Collingwood';
    } else if (whichButton.classList.contains('weather2')) {
        cityname = 'Collingwood';
    } else if (whichButton.classList.contains('weather3')) {
        cityname = 'Toronto';
    } else if (whichButton.classList.contains('weather4')) {
        cityname = 'Caledon';
    }
    //default 
    else {
        cityname = input.value;
        input.value = "";
    }

    var apicall = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&appid=d120b3181941ff233822b79247a405e4&units=metric";
    /*Create a new XHR object */
    var request = new XMLHttpRequest();
    /* Open a new request using the request() method */
    request.open('GET', apicall);
    /* Set JavaScript to accept JSON from the server */
    request.responseType = 'json';
    /* Send the request with the send() method */
    request.send();

    /*Add an event handler that listens for the onload event of the JSON file/object */
    request.onload = function() {
        //store the response in plenty of pizza 
        var data = request.response;
        if (data.cod == 400 || data.cod == 404) {
            error.play();
            alert("City " + cityname + " does not exists. Please put correct spellings of the city")
        }
        //let's check it out in the console 
        console.log(data);
        //when the response is ready, invoke weatherdata function, passing data as the object 
        weatherdata(data);
    };

    function weatherdata(data) {
        var cityName = data.name;
        var descrip = data.weather[0].description;
        var maxtemp = data.main.temp_max;
        console.log(cityName);
        let main = document.getElementById('main');
        let p = document.createElement('p');
        let des = " The weather at " + cityName + " is currently " + descrip + " and max temperature is " + maxtemp + "\u00B0C.";
        p.innerHTML = des;
        main.appendChild(p);
        ding.play();

    }

}