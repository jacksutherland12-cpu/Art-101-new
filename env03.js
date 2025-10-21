
let title = "Daily Conditions in Perry’s Deep World";
let waterTemp = "12°C";
let visibility = "fair";
let moodNote = "Perry is feeling curious today.";


let habitats = ["deep blue", "reef cave", "kelp forest"];


let perry = {
  name: "Perry",
  species: "Blue & yellow reef fish",
  favoritePlace: habitats[0],
  mood: "curious"
};

let buddy = {
  name: "Spike",
  species: "Purple tang",
  favoritePlace: habitats[1],
  mood: "chill"
};

let environment = {
  temperature: waterTemp,
  visibility: visibility,
  current: "gentle",
  notes: moodNote
};


let megaSentence = "";
megaSentence = megaSentence
  + "<p><strong>" + title + "</strong></p>"
  + "<p>Today’s water temp: " + environment.temperature
  + ", visibility: " + environment.visibility
  + ", current: " + environment.current + ".</p>"
  + "<p>Main habitats we visit: " + habitats[0] + ", " + habitats[1] + ", " + habitats[2] + ".</p>"
  + "<p>" + perry.name + " the " + perry.species
  + " likes the " + perry.favoritePlace
  + " and feels " + perry.mood + ".</p>"
  + "<p>" + buddy.name + " the " + buddy.species
  + " prefers the " + buddy.favoritePlace
  + " and is " + buddy.mood + ".</p>"
  + "<p>Note: " + environment.notes + "</p>";


$("#output").html(megaSentence);


$("#output").append(
  "<div class='pics'>"
  + "<img src='fish1.jpg' alt='purple fish character' />"
  + "<img src='fish2.jpg' alt='blue fish character' />"
  + "</div>"
);
