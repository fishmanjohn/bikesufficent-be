const router = require('express').Router()
const Users = require('./users-model')



router.get('/', (req, res) => {
    Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get all users' });
    });
  });

router.get('/:id', (req,res)=>{
    Users.findById(req.params.id)
    .then(user=>{
        res.status(200).json(user)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({message: 'failed to get user'})
    })
})



module.exports = router 