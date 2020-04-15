function setConfig(){
    var texts = {
        title: 'Shopping Control'
    }
    document.title = texts.title
    document.getElementById('navTitle').innerHTML = texts.title
    //console.log(  document.getElementById('navTitle'))
   
}
setConfig()