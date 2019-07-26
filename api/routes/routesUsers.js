const express = require('express');

const db = require('../../knexConfig.js');

const server = express();

server.use(express.json());

/**
 * @api {get} /api/users GET /api/users
 * @apiVersion 1.0.0
 * @apiName Get Users
 * @apiGroup Users
 *
 * @apiExample Request
 * axios.get('/api/users');

 * @apiSuccess {number} id            User Id
 * @apiSuccess {string} user            user (required, must be unique)

 * @apiSuccessExample {json} Response
 *  [
 *      {
            "id": 1,
            "user": "Patient Zero",
        },
        {
            "id": 2,
            "user": "Patient One",
        }
    ]
*
*
*/
server.get('/', async (req, res) => {
    try {
        const users = await db('users');
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message:"Cannot retrieve the users", error:error });
    }
});








/**
 * @api {get} /api/users/:id GET /api/users/:id
 * @apiVersion 1.0.0
 * @apiName Get Users by id
 * @apiGroup Users
 *
 * @apiExample Request
 * axios.get('/api/users/:id');
 *
 * @apiParam {id} id            User Id

 * @apiHeader {string} authorization This is for a protected route!

 * @apiSuccess {number} id User ID
 * @apiSuccessExample {json} Response
    {
        "id": 2,
        "user": "Patient One",
    }
*/
server.get('/:id', async (req, res) => {
    try {
        const userById = await db('users').where({ id:req.params.id }).first();
        if (userById.length === 0) {  
            res.status(404).json({ message:"The user with the specified ID does not exist." });
        } else {
            res.status(200).json(userById);
        }
    } catch (error) {
        res.status(500).json({ message:"Cannot retrieve the user", error:error });
    }
});





server.get('/mobile/:id', async (req, res) => {
    try {
        const userById = await db('users').where({ id:req.params.id }).first();
        const insulinById = await db('insulin').where({ user_id:req.params.id });
        const bloodsugarById = await db('bloodsugar').where({ user_id:req.params.id });
        if (userById.length === 0) {  
            res.status(404).json({ message:"The user with the specified ID does not exist." });
        } else {
            res.status(200).json({ ...userById, insulinById, bloodsugarById });
        }
    } catch (error) {
        res.status(500).json({ message:"Cannot retrieve the user", error:error });
    }
});




server.post('/', async (req, res) => {
    if(!req.body.username || !req.body.bg_high || !req.body.bg_low) {
        return res.status(400).json({ message:"Please include username, bg high and bg low" })
    }
    try {
        const checkUserExists = await db('users').where({ username:req.body.username }).first();
        if(checkUserExists) {
            return res.status(404).json({ message:"Username exists, please choose another" })
        }
        const [id] = await db('users').insert(req.body)
        res.status(201).json({ message:"Thank you, user has been added", user:req.body });
    } catch (error) {
        res.status(500).json({ message:"Cannot add the user", error:error });
    }
});




server.delete('/:id', async (req, res) => {
    const checkUserExists = await db('users').where({ id:req.params.id }).first();
    if(!checkUserExists) {
        return res.status(404).json({ message:"Sorry, user does not exist" })
    }
    try {
        const userDelete = await db('users').where('id',req.params.id).del();
        if (userDelete > 1) {
            res.status(200).json({ message: `${userDelete} users have been deleted` })    
        } else {
            res.status(200).json({ message: `${userDelete} user has been deleted` })
        }
    }
    catch (error) {
        res.status(500).json({ message:"Something went wrong deleting user!",error:error })
    }
});



server.put('/:id', async (req, res) => {
    const bodyObject = Object.keys(req.body)
    if(!bodyObject.length) return res.status(400).json({ message:"Nothing to update" })

    try {
        const checkUserExists = await db('users').where({ id:req.params.id }).first();
        const allUsers = await db('users');
        const userFiltered = allUsers.filter(user => user.username === req.body.username);
        if(!checkUserExists) return res.status(404).json({ message:"Sorry, user does not exist" })
        if (userFiltered.length >= 1) {
            return res.status(409).json({ message: "Please choose a different username. Username already exists." })
        }
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong updating user!"})
    }
    try {
        const userUpdate = await db('users').where({ id:req.params.id }).update(req.body);
        res.status(200).json({ message: `${userUpdate} user has been updated` })
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong updating user!"})
    }
});


server.put('/', async (req, res) => {
    res.status(400).json({ message:"Please include a user id to update" })
});



module.exports = server;

