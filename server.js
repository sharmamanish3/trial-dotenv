require("dotenv").config({path: "c:/dotenv/.env"});
console.log("APP_HOST", process.env.APP_HOST);
console.log("APP_PORT", process.env.APP_PORT);
console.log("APP_USER", process.env.APP_USER);
console.log("APP_PASSWORD", process.env.APP_PASSWORD);

setTimeout(()=>console.log("Time out"), 2000);
console.log("Date Value", new Date().toISOString());
console.log("Date Value 2", new Date().toDateString());

//Feature Branch-1
console.log("DIR NAME",__dirname);