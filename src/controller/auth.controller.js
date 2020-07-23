require('dotenv').config()
const models = require('../../database/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = { 
    generateToken: (req, res) => {
        models.tb_user.findOne({ 
            where: { 
                username: req.body.username 
            }
        })
        .then(async _getuser => {
            if(_getuser && _getuser.password) {
                const userChecking = await bcrypt.compareSync(req.body.password, _getuser.password);
                if(userChecking) {
                    const expired = new Date().getTime() + (1*60*60*1000)
                    var token = await jwt.sign(
                        { 
                            id: _getuser.id,
                            username: _getuser.username,
                            expired: expired 
                        }, process.env.APP_SECRET );
                    if(token) {
                        res.status(200).json({
                            success: true,
                            type: 'token',
                            content: {
                                access_token: token,
                                type: 'Bearer',
                                expired: expired
                            },
                            username: _getuser.username,
                            name: _getuser.name,
                            avatar: _getuser.avatar,
                            id: _getuser.id
                        })
                    } else {
                        res.status(200).json({code: 400, message: "generate token is failed!"})
                    }

                } else {
                    res.status(200).json({code: 404, message: "Invalid username or password!"})
                }
            } else {
                res.status(200).json({code: 200, message: "Invalid username or password!"})
            }
        }).catch(_err => {
            res.status(_err.code | 500).send({msg: 'errr', err: _err})
        })
    },

    updateAccount: (req, res) => {
        let updates = {
            username: req.body.username,
            avatar: req.body.avatar,
            name: req.body.name
          }
        if(req.body && req.body.password) {
            updates.password = bcrypt.hashSync(req.body.password, 15)
        }
        models.tb_user.update(updates,  {where: {id: req.params.id}})
        .then(resp => {
            res.status(200).send(resp)
        })
    }
}