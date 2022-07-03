import express from "express";
import {
    commentToBlog,
    getAllBlog,
    getSingleBlog,
  
} from "../controllers/blogController.js";

const router = express.Router()



router.route('/allBlogs').get(getAllBlog)
router.route('/getSingleBlog/:id').get(getSingleBlog)
router.route('/addComments/:id').patch(commentToBlog)







export default router;