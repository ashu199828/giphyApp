//  https://media2.giphy.com/media/8Bl38gdtUK7WDdi59y/giphy.gif?cid=4cf86e378o4v4zwm9hghey3ip8almoptlza74g0dbtb29ryf&rid=giphy.gif&ct=g
var apiKey = 'vz6lMSC7pCatfHqjqWFDDFsTvx9Efid9';


document.addEventListener('DOMContentLoaded', init)
function init(){
document.getElementById('go').addEventListener('click', ev =>{
ev.preventDefault();
let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=18&q=`
let str = document.getElementById('input').value.trim();
var newStr = '&GETanalytics->onclick->url'
url = url.concat(str);
url = url.concat(newStr)

console.log(url)
// let params = new URLSearchParams(url.search);
// params.append('GET analytics->onclick->url','')
console.log(url)
fetch(url)
.then(response => response.json())
.then(content =>{
    console.log(content.data)
    let output = document.getElementById('output')
    let giphyImages = document.getElementById('giphyImages')
    console.log(giphyImages)
    

    for(var i = 0; i<content.data.length; i++){

        data =  content.data[i].images.downsized.url
        id = content.data[i].id
        // console.log(id)
        var imgString = `<img onclick="grab(id)" id="${data}" src="${data}" alt="">`
        giphyImages.innerHTML += imgString;
    
     }
    console.log(document.body)
    
   
    // let input = document.getElementById('input').innerHTML = '' 
   
   
})

.catch(err=>{
    console.log(err);
})
})
}


let textMsg = document.getElementById('textMsg')
let emoji = document.getElementById('emoji')
var newStr = '&GET analytics->onclick->url'

let grab = (id)=>{
    

    console.log(id)
    let str = `<img src="${id}" alt="">`
    emoji.innerHTML += str;
    let outputStr = ` <div id="giphyImages"></div>`
    output.innerHTML = outputStr;
    
}

let post = document.getElementById('post')
let postOutput = document.getElementById('postOutput')
let input = document.getElementById('input')


post.addEventListener('click', e=>{
    e.preventDefault();
    postOutput.innerHTML += textMsg.value + emoji.innerHTML;
    emoji.innerHTML = '';
    textMsg.value = '';
    input.value = '';
    console.log(document.body)
    
    
})


