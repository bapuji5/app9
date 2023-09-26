import express from "express";
import request from 'request';
const app = express();
const port = 3000;
app.use(express.static("public"));
let t;
let h;
let p;
let url="https://api.openweathermap.org/data/2.5/weather?q=visakhapatnam&appid=8f9d8dd3576ec3bf5359e25b2388c892"

request(url, function (error, response, body) {
  //console.error('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
 // console.log('body:', body); // Print the HTML for the Google homepage.
 let weather=JSON.parse(body);
 t=Math.floor(weather.main.temp-273.15);
 h=weather.main.humidity;
 p=weather.main.pressure;
});

app.get("/", (req, res) => {
  const data = {
    title: "Weather Data",
    temperature: t,
    humidity: h,
    pressure: p,
  };
  res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log("Server is running on port:3000");
});
