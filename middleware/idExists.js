const { ObjectId } = require('mongodb');
const { getDatabase } = require('../data/database');

const idExists = async (req, res, next) => {
  const collection = req.baseUrl.slice(1)
  const id = new ObjectId(req.params.id);
  try {
    const { error } = await getDatabase().db().collection(`${collection}`).find({ _id: id });
    if (error) {
      throw new Error("Id does not exist!")
    }
  } catch (error) {
    res.status(400).json({
      "status": "error",
      "message": error
    })
  }
}

module.exports = idExists