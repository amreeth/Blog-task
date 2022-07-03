import Blog from '../modals/blogModel.js'

export const pagenations = async (page) => {

    let resultPerPage = 5;
    let currentPage = Number(page) || 1;

    const skip = resultPerPage * (currentPage - 1);
    const result = await Blog.find().limit(resultPerPage).skip(skip);

    return result;
}