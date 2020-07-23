const { body } = require('express-validator')
const models = require('../../../database/models');

exports.validate = (method) => {
  switch (method) {
    case 'requestVpoint': {
     return [ 
        body('sldr_user_id').exists().isInt(),
        body('mgm_user_id').exists().isInt(),
        body('reason').exists(),
        body('point').exists().isInt(),            
       ]   
    }    
  }      
}

