const CustomNotFoundError = require('../errors/CustomNotFoundError')
const asyncHandler = require("express-async-handler");

const db = require("../db");


// The function will automatically catch any errors thrown and call the next function


const getAuthorById = asyncHandler(async (req, res) => {
  const { authorId } = req.params;

  const author = await db.getAuthorById(Number(authorId));

  if (!author) {
    throw new CustomNotFoundError("Author not found");
  }

  res.send(`Author Name: ${author.name}`);
});



module.exports = { getAuthorById };
