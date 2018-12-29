
document.getElementById("loader").style.display = 'none';
document.getElementById("search").addEventListener("click", () => search());
var searcher = document.getElementById("search");
searcher.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("search").click();
      console.log("lhe dao al enter");
  }
                                                  });

function search(){
    document.getElementById("loader").style.display = "block";
    var value = document.getElementById("input").value;
    var text = document.getElementById("main");
  document.getElementById("main").innerHTML = "";
   
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+value+'&APPID=d84c244555530ce003a42fdf67cbd9be')
    .then((res) => res.json())
    .then((json) => {
        data = json;
        console.log(value);
        console.log(data);
        var temp = data.main.temp;
        temp = temp-273.15;
    text.append(temp.toFixed(2)+ "ºC " +" in "+ data.name + " "+ data.sys.country+ ", "+ data.weather[0].description);
        document.getElementById("loader").style.display = 'none';
        
    })
    .catch((err) => {
        console.log(err);
        text.append(data.message);
        document.getElementById("loader").style.display = 'none';
    });
    
      document.getElementById("input").value = "";
    
}




