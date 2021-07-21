# Weather-Journal App Project

## Info Details

Auther : **Udacity**

Modifyed and edited by : Islam Elsayed Abdou _"Solii-H"_

Purpose : Using Node.js to build a weather app by getting information from https://openweathermap.org APIs

## Content

-/website
--app.js
--index.html
--style.css
-package.json
-server.js

## Method

### Creatng a server

server can be lunch by typing 'node server' in cmd in the root directory of the project
port is 3030

### Dependencies

express, body-parser, cors must be installed

### API key

The API key is brought from the openweathermap website

### GetData function

This function's job is to get all the needed data from the api

### postData function

This function record the api informations in a path /storeData which will be called back

### updateUI function

Adding the new data to their specific elements in the html file

### Event listener

Click event listener to the button which will activate the updateUI function

### projectData object

by using get and post methods the data will be stored in this object to retreive it later on the website

## Additional info

Using the API docs to choose which information you want to choose is very helpfull [openweathermap](https://openweathermap.org/current#data)
