const { default: mongoose } = require('mongoose')
const Member = require('../model/member_model')


/**CREATE NEW MEMBER */
const createMember = async (req, res) => {
      const {
            member_id,
            firstname,
            middlename,
            lastname,
      } = req.body

      try {
            const member = await Member.create({
                  member_id,
                  firstname,
                  middlename,
                  lastname,
            })
            res.status(200).json(member)
      } catch (error) {
            res.status(400).json({ error: error.message })
      }
}

module.exports = {
      createMember,
}








