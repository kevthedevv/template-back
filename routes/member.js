const express = require('express')
// const requireAuth = require('../middleware/requireAuth')
const router = express.Router()


const {
     createMember,
} = require('../controller/member_controller')

router.post('/', createMember)


module.exports = router