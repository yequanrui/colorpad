function random_select(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function refresh_content() {

    //ani out current
    var nodes = document.getElementById('feed_wrapper').childNodes
    console.log(nodes)

    for(var i = 0; i < nodes.length; i+=1){
        if(nodes[i].style){
            nodes[i].style.opacity = 0
        }
    }



    setTimeout(function () {
        // delete current
        var wrap = document.getElementById('feed_wrapper')
        while (wrap.firstChild){
            wrap.removeChild(wrap.firstChild);
        }


        // generate new

        for(var j = 0; j < 6; j++) {

            var it = random_select(chdata)
            itemer(it.order, it.id, it.code, it.date, it.likes)
        }
    }, 500)




}