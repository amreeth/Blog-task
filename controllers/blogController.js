import Blog from '../modals/blogModel.js'
import { pagenations } from '../middlewares/blogMIddleware.js'






export const createBlog = async (req, res) => {
    try {

        const blogObj = {
            title: req.body.title,
            author: req.body.author,
            blog: req.body.blog

        }

        const createdBlog = await Blog.create(blogObj)

        res.status(200).json({
            success: true,
            message: "blog created successfully",
            createdBlog
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "something wrong",
            error
        })

    }
}

export const getAllBlogsAdmin=async(req,res)=>{
    try {
        const allBlogs=await Blog.find({})
        if(allBlogs.length>0){
            res.status(200).json({
                allBlogs,
                message:"all blogs are"
            })
        }else{
            res.status(404).json({
                message:"blogs not found"
            })
        }

    } catch (error) {
        res.status(500).json(error)
    }
}


export const getAllBlog = async (req, res) => {
    try {

        const blogs = await pagenations(req.query.page)

        res.status(200).json({
            success: false,
            blogs
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "something wrong",
            error
        })
    }

}

export const getSingleBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id)

        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "resource not found"
            })
        }
        res.status(200).json({
            success: true,
            blog
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "something wrong",
            error
        })
    }
}


export const commentToBlog = async (req, res) => {
    try {
        const { userId, comment } = req.body;
        const blog = await Blog.findById(req.params.id)

        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "resource not found"
            })
        }
        if (blog.comments.includes(userId)) {

            res.status(200).json({
                success: false,
                message: "You Already Commented this blog !"
            })

        } else {
            blog.comments.push({
                user: userId,
                comment: comment,
                date: Date.now()
            })
            await blog.save()

            res.status(200).json({
                success: true,
                message: "commented successfully !"
            })
        }


    } catch (error) {
        res.status(500).json({
            success: false,
            message: "something wrong",
            error
        })
    }
}

export const updateBlog = async (req, res) => {
    try {
        const { title, content } = req.body;

        const blog = await Blog.findById(req.params.id)

        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "resource not found"
            })
        }

        if (title) {
            blog.title = title
        }
        if (content) {
            blog.blog = content
        }

        await blog.save()
        res.status(200).json({
            success: true,
            message: "Blog updated successfully !"
        })



    } catch (error) {
        res.status(500).json({
            success: false,
            message: "something wrong",
            error
        })
    }
}

export const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id)


        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "resource not found"
            })
        }

        await blog.remove()

        res.status(200).json({
            success: true,
            message: "Blog Deleted Successfully !",

        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "something wrong",
            error
        })
    }
}

