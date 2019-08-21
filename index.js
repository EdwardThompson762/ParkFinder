'use strict'

function findParks(state, maxResults=10) {
  const APIkey= 'xEiYvTjZwY4Wp42UNSo2Y9HDxgROtqFbcChotXWf';
  fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${state}&api_key=${APIkey}`)

  .then(response => response.json())
  .then(responseJson =>
   displayResults(responseJson,10))
   .catch(error => alert('no parks found'));
}

function searchButton(){
$('parkSearch').on('click',function(event){
console.log(parkSearch);

});
}
//trigger event listener
function watchForm(){
  $('#parkForm').on('submit',(event) => {
    event.preventDefault();
    let parks=$('#parkSearch').val()
    console.log(parks);
    findParks(parks);
  });
}

function displayResults(responseJson, maxResults){
console.log(responseJson);
$('#resultsList').empty();
for (let i=0; i <responseJson.data.length && i<maxResults ; i++)
  $('#resultsList').append(`<h1></h1>${responseJson.data[i].fullName} ${responseJson.data[i].description}
  ${responseJson.data[i].url}`);

$('#results').removeClass('hidden')
}

function handleButtons(){
  $(searchButton);
  $(watchForm);
}
handleButtons();