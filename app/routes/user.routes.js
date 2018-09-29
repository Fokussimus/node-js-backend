var validator = require('./secure.js')

module.exports = (app) => {
  const users = require('../controllers/users.controller.js');

  /**
   * @api {post} /signup Register new user 
   * @apiPermission admin
   * @apiName SignUp
   * @apiGroup User
   * 
   * @apiParam {String} usrname Unique username
   * @apiParam {String} password Password for this user
   * 
   * @apiParamExample {json} Request-Example:
   * {
   *    "usrname":"max",
   *    "password":"mustermann"
   * }
   * */
  app.post('/signup', users.create);

  /**
   * @api {post} /signin Sign in to authors and admin area
   * @apiPermission admin/author
   * @apiName SignIn
   * @apiGroup User
   * 
   * @apiParam {String} usrname Unique username
   * @apiParam {String} password Password for this user
   * 
   * @apiParamExample {json}      Request-Example:
   * {
   *    "usrname":"max",
   *    "password":"mustermann"
   * }
   *
   * @apiSuccessExample {json}      Success-Response (200)
   * {
   *  "success": "Welcome to the JWT Auth",
   *  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmE4ODA5MjA1MDM3YjA4NjQ4MjE1MDYiLCJpYXQiOjE1Mzc3OTEyMjMsImV4cCI6MTUzNzc5ODQyM30.IWFL3VsDqefRmvIF5NwGCAyoKrxOrCpjL6rQjQ7nQwk"
   * }
   * 
   * @apiErrorExample {json}      Error-Response (401)
   * {
   *  "message": "Unauthorized Access"
   * }
   * 
   * @apiErrorExample {json}      Error-Response (401)
   * {
   *  "message": "User not found"
   * }
   * 
   * */
  app.post('/signin', users.login);

  /**
  * @api {get} /users Get users 
  * @apiPermission admin
  * @apiName GetUser
  * @apiGroup User
  * 
  * @apiSuccessExample    Success-Response (200)
  * [
  *   {
  *      "_id": "5ba8809205037b0864821506",
  *      "usrname": "webste"
  *   },
  *   {
  *      "_id": "5ba8e3e2a703a52a8467151a",
  *      "usrname": "max"
  *   }
  * ]
  * 
  * @apiErrorExample      Error-Response (403)
  * Forbidden
  * */
  app.get('/users', validator.verifyToken, users.find);


  /**
  * @api {get} /users Get user by id
  * @apiPermission admin
  * @apiName GetUser
  * @apiGroup User
  * 
  * @apiParam {String} userId Id to identify user
  * */
  app.get('/users/:userId', validator.verifyToken, users.findOne);

  /**
  * @api {put} /users Update a user
  * @apiPermission admin
  * @apiName UpdateUser
  * @apiGroup User
  * 
  * @apiParam {String} userId Id to identify user
  * */
  app.put('/users/:userId', validator.verifyToken, users.update);


  /**
  * @api {delete} /users Delete a user
  * @apiPermission admin
  * @apiName DeleteUser
  * @apiGroup User
  * 
  * @apiParam {String} userId Id to identify user
  * */
  app.delete('/users/:userId', validator.verifyToken, users.delete);
}