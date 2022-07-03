import express from "express";
import {
  createBlog,
  updateBlog,
  deleteBlog,
  getAllBlogsAdmin,
} from "../controllers/blogController.js";

const router = express.Router();

router.route("/createBlog").post(createBlog);
router.route("/allblogs").get(getAllBlogsAdmin);
router.route("/editBlog/:id").put(updateBlog);
router.route("/deleteBlog/:id").delete(deleteBlog);

export default router;
