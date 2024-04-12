
class DetailController {

    // [GET] home
    index(req, res) {
        res.render('detail');
    }
}

module.exports = new DetailController;