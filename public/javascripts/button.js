document.getElementById('searchbar').addEventListener('input', search);

function search(){
    //console.log(document.getElementById('searchbar').value)
    var searchinput = document.getElementById('searchbar').value
    //console.log (typeof searchinput)
    //console.log (searchinput)
    searchinput = searchinput.toLowerCase()
    const allpictures = document.getElementsByClassName('pictures')
    
    for(let i = 0;i<allpictures.length;i++){
        var comparethis = allpictures[i].src

    
        if (comparethis.includes(searchinput)){
            console.log('match')
            allpictures[i].style.display = '';

        }
        else {
            allpictures[i].style.display = 'none'
        }
    }
}