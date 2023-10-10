const { ObjectId } = require('mongodb');
const mongodb = require('../data/database');
const objectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=['dinner']
    const result = await mongodb.getDatabase().db().collection('dinner').find();
    result.toArray().then((dinner, err) => {
      try {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(dinner);
      } catch (err) {
        res.status(400).json({ message: err });
      }
    });
  };
  
  const getSingle = async (req, res) => {
    //#swagger.tags=['dinner']
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid id to find a dinner item.');
    }
    const dinnerId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('dinner').find({ _id: dinnerId });
    result.toArray().then((dinner, err) => {
      try {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(dinner[0]);
      } catch (err) {
        res.status(400).json({ message: err });
      }
    });
  };

  module.exports = {
    getAll,
    getSingle
  };
  