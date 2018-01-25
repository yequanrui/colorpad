function random_select(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function refresh_content() {

    //ani out current
    var nodes = document.getElementById('feed_wrapper').childNodes

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

            var it = random_select(color_data)

            var code = it.hex.slice(1)
            var gstep = 20
            code += colorDiff(it.hex, -1*gstep, -1*gstep, -1*gstep).slice(1)
            code += colorDiff(it.hex, -2*gstep, -2*gstep, -2*gstep).slice(1)
            code += colorDiff(it.hex, -3*gstep, -3*gstep, -3*gstep).slice(1)

            itemer(j, 0, code, it.pinyin, it.name)
        }
    }, 500)


}