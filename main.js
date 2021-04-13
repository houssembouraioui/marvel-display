


// var movies = {
// 	title:
// 	iMDBRating:
// 	director:
// 	cast:
// 	boxOffice:
// 	discription:
// 	notableAwards:
// }


function createMarvel (title1,imdb,director1,actors1,boxOffice1,discription1,date,poster1){
	return{
	title: title1,
	iMDBRating: imdb,
	director: director1,
	actors: actors1,
	boxOffice: boxOffice1,
	discription: discription1,
	releaseDate: date,
	poster: poster1
	}
}
var ironMan1 = createMarvel("Iron man",7.922,"John Favreau","Robert Downey Jr.,Gweneth Paltrow",585,"a good start for the universe","may 2 2008","ironMan1.jpg" )
var theIncredibleHulk = createMarvel("The Incredible Hulk",6.701,"Louis Letterier","Edward Norton , Liv Tyler",263,"meh","june 13 2008","theIncredibleHulk.jpg")
var ironMan2 = createMarvel("Iron Man 2",7.5,"John Favreau","Robert Downey Jr. ,Mickey Rourke",623,"good","may 7 2010","ironMan2.jpg")
var thor = createMarvel("Thor",7.02,"Kenneth Branagah","Chris Hemsworth, Tom Hiddleston, Anthony Hopkins",449,"not bad","may 6 2011","thor.jpg")
var captainAmerica1 = createMarvel("Captain America:The First Avenger",6.901,"Joe Johnston","Chris Evans, Hugo Weaving",370,"pretty decent","jul 22 2011","captainAmerica1.jpg")
var theAvengers = createMarvel("The Avengers",8.09, "Joss Whedon","Robert Downey Jr., Chris Evans,Scarlett Johansson, Chris Hemsworth, Mark Ruffalo",1519,"remarquable","may 4 2012","theAvengers1.jpg")
var ironMan3 = createMarvel("Iron Man 3",7.109, "Shane Black","Robert Downey Jr.,Gweneth Paltrow",1215,"critically underrated", "may 3 2013","ironMan3.jpg")
var thor2 = createMarvel("Thor: The Dark World",6.92,"Alan Taylor","Chris Hemsworth, Natalie Portman, Tom Hiddleston", 664, "not too bad","nov 8 2013","thor2.jpg")
var captainAmerica2 =createMarvel("Captain America: The Winter Soldier",7.7,"Anthony and Joe Russo","Chris Evans, Samuel L. Jackson, Scarlett Johansson",714,"one of the greatest MCU movies","apr 4 2014","captainAmerica2.jpg")
var guardians1 = createMarvel("Guardians of the Galaxy",8.05,"James Gunn","Chris Pratt, Bradley Cooper,Zoe Saldana",772,"uniquely hilarious","aug 1 2014","guardians1.jpg")
var Avengers2 = createMarvel("Avengers: Age of Ultron",7.301,"Joss Whedon","Robert Downey Jr., Chris Evans,Scarlett Johansson, Chris Hemsworth, Mark Ruffalo",1405,"could\'ve been better","may 1 2015","Avengers2.jpg")
var antMan = createMarvel ("Ant-Man",7.301,"Peyton Reed","Paul Rudd, Michael Douglas, Corey Stoll",519,"good overall","jul 17 2015","antMan.jpg")
var captainAmerica3 = createMarvel("Captain America: Civil War",7.89, "Anthony and Joe Russo"," Chris Evans, Robert Downey Jr., Scarlett Johansson, Jeremy Runner",1280,"the start of it all","may 6 2016","captainAmerica3.jpg" )
var doctorStrange = createMarvel("Doctor Strange",7.59,"Scott Derrickson"," Benedict Cumberbatch, Chiwetel Ejiofor, Rachel McAdams",677,"very pleasant to watch","nov 4 2016","doctorStrange.jpg")
var guardians2 = createMarvel("Guardians of the Galaxy Vol. 2",7.69,"james Gunn","Chris Pratt, Bradley Cooper, Zoe Saldana",863,"the perfect combination between comedy and trauma","may 5 2017","guardians2.jpg")
var spiderMan1 = createMarvel("Spider-Man: Homecoming",7.401,"John Watts"," Tom Holland, Michael Keaton, Robert Downey Jr.",880,"a bit overrated","jul 4 2017","spiderMan1.jpg")
var thor3 = createMarvel("Thor: Ragnarok",7.99,"Taika Waititi","Chris Hemsworth, Tom Hiddleston, Cate Blanchett",863,"the best Thor movie","nov 3 2017","thor3.jpg")
var blackPanther = createMarvel("Black Panther",7.301,"Ryan Coogler"," Chadwick Boseman, Michael B. Jordan, Lupita Nyong'o",1347,"had one of the best antagonists","feb 16 2018","blackPanther.jpg")
var avengers3 = createMarvel("Avengers: Infinity War",8.49,"Anthony and Joe Russo"," Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans, Scarlett Johansson, Benedict Cumberbatch,Josh Brolin",2048,"one of the greatest movies of all time","apr 27 2018","avengers3.jpg")
var antMan2 = createMarvel("Ant-Man and the Wasp",7.01,"Peyton Reed", "Paul Rudd, Evangeline Lilly, Michael Peña",622,"better than most people expected","jul 6 2018", "antMan2.jpg")
var captainMarvel = createMarvel("Captain Marvel",6.901,"Anna Boden and Ryan Fleck"," Brie Larson, Samuel L. Jackson, Ben Mendelsohn",1128,"extremly overrated","mar 8 2019","captainMarvel.jpg")
var avengers4 = createMarvel("Avengers: Endgame",8.48,"Anthony and Joe Russo"," Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans, Scarlett Johansson, Benedict Cumberbatch,Josh Brolin",2792,"the greatest pssible ending for one of the best franchises of all time","apr 26 2019","avengers4.jpg")

var mcu = [ironMan1,theIncredibleHulk,ironMan2,thor,captainAmerica1,theAvengers,ironMan3,thor2,captainAmerica2,guardians1,Avengers2,antMan,captainAmerica3,doctorStrange,guardians2,spiderMan1,thor3,blackPanther,avengers3,antMan2,captainMarvel,avengers4]

var mcuRate = [...mcu]
var mcuBox = [...mcu]
mcuRate.sort(function (a, b) {
  return a.iMDBRating - b.iMDBRating;
});

mcuBox.sort(function(a,b){
	return a.boxOffice - b.boxOffice
})






var ironMan = function(){
	var reg = /\Iron/ 
	return mcu.filter(function(movie){
		return reg.test(movie.title) 
	})
} 
var iron = ironMan()

var thorr = function(){
		var reg = /\Thor/ 
	return mcu.filter(function(movie){
		return reg.test(movie.titles) 
	})
}
var thunder = thorr() 

var cap = function(){
	var reg1 = /\Captain/ 
	var reg2 = /\America/
	return mcu.filter(function(movie){
		return reg1 && reg2.test(movie.title) 
	})
}
var capA = cap()

var avenge = function(){
	var reg1 = /\Avengers/ 
	return mcu.filter(function(movie){
		return reg1.test(movie.title) 
	})
}
var others = function(){
	var reg1 = /\Captain/ 
	var reg2 = /\America/
	var reg3 = /\Avengers/
	var reg4 = /\Thor/ 
	var reg5 = /\Iron/

	return mcu.filter(function(movie){
		return !((reg1 && reg2).test(movie.title)) && !reg3.test(movie.title) && !reg4.test(movie.title)
			&& !reg5.test(movie.title)
	})
}
var autre = others()




var av = avenge()

	var result = $("<div id = 'displaying'></div>")
var display =function (array) { 
	result.html("")
	for (var i = 0; i < array.length; i++) {
		var movie = $("<div class = 'movies'></div>")
		var movieImage = $("<img src = '' >")
		var text = $("<p class = 'info'>"+  array[i].title +"</p>")
		var rate = $("<p class = 'stars' >"+ array[i].iMDBRating.toFixed(1)+"/10" +"\u2B50"+"</p>")
		movieImage.attr("src",array[i].poster)
		
		
		movie.append(movieImage)
		movie.append(text)
		movie.append(rate)
		result.append(movie)
	}
	$("body").append(result)
}

//return a filtered array with the titles = name
var search = function(name){  //we get name from the value of the search input 
	return mcu.filter(function(obj){
		return obj.title.includes(name)
	})	
}

var searched = search()

		
		




display(mcu)



$("a#home").click(function(){display(mcu)})
$("a#avengerz").click(function(){display(av)})
$("a#ironman").click(function(){display(iron)})
$("a#capt").click(function(){display(capA)})
$("a#tho").click(function(){display(thunder)})
$("a#other").click(function(){display(autre)})
// $("#sortBy").hover(append(".sortBy"))
$("a#date").click(function(){display(mcu)})
$("a#sortRate").click(function(){display(mcuRate)})
$("a#sortIncome").click(function(){display(mcuBox)})
$("#look").click(function(){
	var looking = $("input").val()
	var filteredArr = search(looking)
	display(filteredArr)
})




