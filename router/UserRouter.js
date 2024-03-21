const userrouter= require('../controller/UserController');

router.get('/', userrouter.getAllUsers);
router.get('/:id', userrouter.getUserById);
router.post('/', userrouter.createUser);
router.put('/:id', userrouter.updateUser);
router.delete('/:id', userrouter.deleteUser);
