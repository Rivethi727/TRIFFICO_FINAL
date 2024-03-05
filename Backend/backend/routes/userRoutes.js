import express from 'express';
const router = express.Router();
import { authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    createUser
    
  } 
from '../controllers/userController.js';


import { protect ,isAdmin } from '../middleware/authMiddleware.js';


// user Full 

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router
.route('/profile')
.get(protect, getUserProfile)
.put(protect, updateUserProfile);
router.post('/createuser',createUser)



export default router;