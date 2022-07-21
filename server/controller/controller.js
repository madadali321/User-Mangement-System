var UserModel = require('../model/user-model');

//CREATE API
//create and save new user
exports.create = (req, res) => {
    //validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty" })
        return
    }

    //new User
    const user = new UserModel({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status,
    })

    //save user in the database
    user.save(user).then(data => {
        res.send(data);
        // res.redirect('/')
    })
        .catch(err => {
            res.send(500).send({
                message: err.message || "Some error occurred while creating a create operation"
            });
        });
}



//GET API
//retrive and return all users/ retrive and return a single user
exports.find = (req, res) => {
    if (req.query.id) {
        const id = req.query.id;
        UserModel.findById(id).then(user => {
            res.send(user);
        }).catch(err => {
            res.status(500).send({ message: err.message || "Error occured while search a single user" })
        })
    } else {
        UserModel.find().then(user => {
            res.send(user);
        }).catch(err => {
            res.status(500).send({ message: err.message || "Error occured while retriving user information" })
        })
    }

}



//Update API
//Update a new Identified user by user Id
exports.update = (req, res) => {
    if (!req.body) {
        res.send(400).send({ message: "Data to update can not be empty" })
    }

    const id = req.params.id;
    UserModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Update user with ${id}. Maybe user not found` })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error Update user information" })
        })

}


//Delete API
//Delete a use with specified user id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    UserModel.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Delete this user with this ${id}.` })
            } else {
                res.send({ message: "User was deleted succesfully!" })
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Cannot Delete user with id = " + id })
        });
}