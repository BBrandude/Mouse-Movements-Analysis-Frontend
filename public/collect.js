function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let movements = []
window.addEventListener('mousemove', function (e) {
    let mouseMovement = {
        "x": e.screenX,
        "y": e.screenY,
        "t": window.performance.now(),
    }
    movements.push(mouseMovement)
})

window.addEventListener('click', function (e) {
    console.log(e)
})

let submitButton = document.getElementById('submit-data')

async function submit() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'POST',
        body: JSON.stringify({
            mouseMovement: movements,
        }),
        credentials: 'include'
    };
    
    window.removeEventListener('mousemove', function (e) {
        let mouseMovement = {
            "x": e.screenX,
            "y": e.screenY,
            "t": window.performance.now(),
        }
        movements.push(mouseMovement)
    })
    await sleep(1)
    fetch("http://localhost:8000/api/proccessdata", requestOptions)
}

submitButton.addEventListener('click', e => {
    if (!(movements.length > 0)) {
        alert('move mouse and click again')
    } else {
        submit()
    }

})
