

function init() {


}

let upload = document.getElementById('upload');
console.log(upload);
if(upload){
    upload.addEventListener('click', (event) => {
        var userImg = document.getElementById('user');
        /* Need to figure out what eventListener to use, not saving the final img */
        localStorage.setItem('userImg', userImg);

    })
}

