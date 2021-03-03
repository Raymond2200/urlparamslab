albums = require('../model/albums')

function noSearch(req, res) {
    res.render('albums.ejs', {albums : albums.albumsArray})
}

function locateAlb (req, res) {
    let x = req.params.id
    let y = true
    for (i of albums.albumsArray) {
        if ( i.id == x) {
            res.send('you have typed ' + i.id + ' which is album name ' + i.name )
            y = true
        }
        else {
            y = false
        }
    }
    if (y === false) {
        res.send('album does not exist in library')
    }
}



module.exports = {
    locateAlb,
    noSearch
}