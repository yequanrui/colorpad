
document.addEventListener('DOMContentLoaded', function() {
    console.log("dom loaded")

    selected_load()
    setTimeout(refresh_content, 10)

    new Clipboard('.copy-btn');
})

var G_SELECTED_COLOR_ARR = []
function selected_load() {
    console.log("load selected colors")
    if (localStorage.getItem('data')){
        G_SELECTED_COLOR_ARR = localStorage.getItem('data').split('=')
        G_SELECTED_COLOR_ARR.forEach(
            function (t) { ui_add_selected(t) }
        )
    } else {
        localStorage.setItem('data', '')
    }
    document.getElementById('selected_wrap').style.opacity = 1

}


function ui_add_selected(color_string, ani) {

    var newNode = document.getElementById('color_line_template').cloneNode(true)

    document.getElementById('selected_pool').appendChild(newNode)
    newNode.style.display = 'flex'
    newNode.childNodes[1].style.backgroundColor = color_string //注意childnodes中间有 text 间隔，所以是1
    newNode.setAttribute('id', color_string.slice(1))
    newNode.childNodes[7].setAttribute('onclick', 'on_color_delete("' + color_string + '")')
    newNode.childNodes[5].setAttribute('data-clipboard-text', color_string)
    newNode.childNodes[5].setAttribute('onclick', 'on_color_copy()')

    newNode.childNodes[1].setAttribute('data-clipboard-text', color_string)
    newNode.childNodes[1].setAttribute('onclick', 'on_color_copy()')


    if (ani){
        setTimeout(function () { //enable animcation
            newNode.childNodes[1].style.height = "30px"
        }, 1)
    } else {
        newNode.childNodes[1].style.height = "30px"
    }
}

function save_selected_colors() {
    localStorage.setItem('data', G_SELECTED_COLOR_ARR.join('='))
}
function contains(a, obj) {
    var i = a.length;
    while (i--) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}
function on_color_click(color_string) {
    console.log(color_string)
    if (contains(G_SELECTED_COLOR_ARR, color_string)){
        console.log("color already selected")

        anime({
            targets: document.getElementById(color_string.slice(1)),

            backgroundColor: [
                {value: '#999'},
            ],
            duration: 50,

            direction: 'alternate'
        });
    } else {
        // save to localstorage
        G_SELECTED_COLOR_ARR.push(color_string)
        save_selected_colors()
        ui_add_selected(color_string, true)
    }
}

function on_color_delete(color_string) {
    console.log('delete color', color_string)

    //delete from localstore
    G_SELECTED_COLOR_ARR.splice(G_SELECTED_COLOR_ARR.indexOf(color_string), 1)
    // localStorage.removeItem(color_string)

    save_selected_colors()

    //delete from ui
    setTimeout(function () {
        document.getElementById('selected_pool').removeChild(document.getElementById(color_string.slice(1)))
    }, 300)
    document.getElementById(color_string.slice(1)).style.height = "0px"
    document.getElementById(color_string.slice(1)).style.opacity = 0
}

function on_color_copy() {
    console.log('play copy sound')

    var audio = document.getElementsByTagName("audio")[0];
    audio.play();
}

