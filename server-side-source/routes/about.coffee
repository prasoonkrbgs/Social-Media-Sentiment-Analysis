express = require('express')
router = express.Router()
router.get '/', (req, res, next) ->
  res.render 'page_about',
    title: 'About'
    pageNum: -1
module.exports = router