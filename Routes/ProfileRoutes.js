const express = require ('express');
const ProfileController = require('../Controllers/ProfileController');
const router = express.Router();

router.get('/:id', (request, result) => ProfileController.getProfileByID(request, result));
router.post('/', (request, result) => ProfileController.addProfile(request, result));
router.delete('/:id', (request, result) => ProfileController.removeProfile(request, result));
router.patch('/:id', (request, result) => ProfileController.updateProfile(request, result));


module.exports = router;