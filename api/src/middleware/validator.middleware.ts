// Module for email validation. Adds a dependencie but no need for complex regex
var validator = require("email-validator");

// Checks the validity of user ID values. Can be used for other endpoints later aswell. THne should be renamed
export const userIdValidator = function (req: any, res: any, next:any) {
    // Check if the id param is numerical and 0 or greater. If not then skip the route and send back error right away
    if(isNaN(req.params.id) || (parseInt(req.params.id) < 0)) {
        console.log("Not a valid user ID. Request came from " + req.ip + ". Request was /api/users/" + req.params.id);
        res.status(500).json({error: 'User ID must be a valid integer number'});
    } else {
        // IF validation succeeds go to next function in middleware stack
        next();
    }
}

export const userUpdateValidator = function (req: any, res: any, next: () => void) {
    if(req.body.firstname.trim().length === 0 || req.body.lastname.trim().length === 0 || req.body.email.trim().length === 0) {
        res.status(500).json({error: 'Firstname, Lastname or Email parameters are empty'});
    }
    else if (!validator.validate(req.body.email)) {res.status(500).json({error: 'Email is in a wrong format'})} 
    else {
        next();
    }
}

export const userAddValidator = function (req: any, res: any, next: () => void) {
    if(req.body.firstname.trim().length === 0 || req.body.lastname.trim().length === 0 || req.body.email.trim().length === 0
    || req.body.password.trim().length === 0 || req.body.group.trim().length === 0) {
        res.status(500).json({error: 'Some of the required data is missing. Present firstname, lastname, email, password and group'});
    }
    next();
}