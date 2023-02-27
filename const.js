
const movies = [
	{
	  title: "Mr.Robot",
	  year: 2015,
	  genre: "Drama,Psychological-thriller",
	  image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rottentomatoes.com%2Ftv%2Fmr_robot&psig=AOvVaw0HV5R8fWwThE0yPcYV5sbC&ust=1677383528138000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOiAg93ir_0CFQAAAAAdAAAAABAE",
	},
	{
	  title: "Social Network",
	  year: 2010,
	  genre: "Action,Spy",
	  image: "https://images.unsplash.com/photo-1619463703047-5c4a4ab1b202",
	},
	{
	  title: "Snowden",
	  year: 2016,
	  genre: "Biographic Drama",
	  image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BMTg2MzYzNzgzOF5BMl5BanBnXkFtZTgwOTg4NzQ4OTE%40._V1_.jpg&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt3774114%2F&tbnid=vWQBOWqFADPX6M&vet=12ahUKEwjxveyI7a_9AhWeBXcKHRR4CVMQMygAegUIARDlAQ..i&docid=CM0RB1cLHk1RjM&w=1899&h=2962&q=snowden%20movie&ved=2ahUKEwjxveyI7a_9AhWeBXcKHRR4CVMQMygAegUIARDlAQ",
	},
  ];
  


// for loop / forEach  
// function {return const number} 
// function (argument) { obejct (argument ) return object} 
// show via console or html 

const images1 = ["https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rottentomatoes.com%2Ftv%2Fmr_robot&psig=AOvVaw0HV5R8fWwThE0yPcYV5sbC&ust=1677383528138000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOiAg93ir_0CFQAAAAAdAAAAABAE"];
const images2 = ["movie.png"];
const images3 = [""];  
for (let x = 0; x < images.length; x++) {
	const element = 'img src= "' + images[0] + '"'
	let pic = document.querySelector('.images').innerHTML = element;
	pic;
}

function getObject(title,year,genre,image) {
	return object = {
		 title: title,
		year: year,
		genre: genre,
	}
	return object;
}

/*let object=getObject('Mr.Robot','2015','dramma');
const Aza=document.getElementById("movies") */

function getObjectArr() {
	const movies = [
		getObject("Mr.Robot ", 2015 ," Action-Drama"),
		getObject("Social Network", 2010 , "Spy-Action"),
		getObject("Smowden", 2016 , "Boigraphic-Drama"),
	]
	return movies;
}


let userName = 'Azat';
function showMessage () {
	let message = 'Hi!' + userName;
	alert(message);
}
showMessage ();


let cinema="";
object.forEach(moviie=>{
	cinema+=`
       <div class="movie">
			<img src="${movie.image}">
	   </div>
	`;
});
movie.innerHTML=cinema;

	// <![CDATA[  <-- For SVG support
	if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}
	// ]]>
