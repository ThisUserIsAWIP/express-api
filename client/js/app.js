const { json } = require("body-parser")


$('#chirpBtn').click($.get('/api/chirps'), ( data ) => {
    let chirpData = json.parse(data)
    let chirps = [chirpData]
     .then(chirps.map(chirp => {
        $('#chirpContainer').append(
            `<div>
                <h3>${chirp.user}</h3>
                <p>${chirp.chirp}</p>
            </div>`
            )
    }))
})

