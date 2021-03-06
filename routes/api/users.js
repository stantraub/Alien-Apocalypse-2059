const express = require('express');
const router = express();
const User = require("../../models/User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport')

const validateRegisterInput = require('../../validations/register');
const validateLoginInput = require('../../validations/login');

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

router.get('/current', passport.authenticate('jwt', { session: false }, (req, res) => {
    res.json({
        id: req.user.id,
        username: req.user.username,
        highScore: req.user.highScore
    })
}))

router.get('/highscores', (req,res) => {
    User.find({}).then(users => {
        let top = [];
        users.forEach((user) => {
            if (user.highScore > 0) {
                top.push({ 
                    username: user.username,
                    highScore: user.highScore
                })
            }
        
        
        })

        top.sort((a, b) => (a.highScore > b.highScore) ? -1 : 1)

       

        // top.push(users.highScore);
        res.json(top.slice(0, 5));
    })
})
router.patch('/highscore/:id',(req,res)=>{
   
    User.findOne({username:req.body.userData.username}).then(user=>{
        if(req.body.highscore>user.highScore){
            user.highScore = req.body.highscore;
            user.save();
        }
      
    return res.json(user)}).catch(err=>console.log(err))
    })

router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ username: req.body.username})
        .then(user => {
            if (user) {
                return res.status(400).json({ username: "That username is already registered"})
            } else {
                const newUser = new User({
                    username: req.body.username, 
                    password: req.body.password,
                    highScore: 0
                })

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save().then(user => res.json(user)).catch(err => console.log(err));
                    })
                })
            }
        })
})



router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
 

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const username = req.body.username;
    const password = req.body.password;

    User.findOne({ username })
        .then(user => {
            if (!user) {
                return res.status(404).json({ username: 'This user does not exist' });
            }
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = { id: user.id, username: user.username, highScore: user.highScore };

                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            // Tell the key to expire in one hour
                            { expiresIn: 3600 },
                            (err, token) => {
                           
                                res.json({
                                    success: true,
                                    token: 'Bearer ' + token
                                });
                            });
                    } else {
                        return res.status(400).json({ password: 'Not working' });
                    }
                })
        })
})



module.exports = router;