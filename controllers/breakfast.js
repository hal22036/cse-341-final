const { ObjectId } = require('mongodb');
const mongodb = require('../data/database');
const objectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=['breakfast']
    const result = await mongodb.getDatabase().db().collection('breakfast').find();
    result.toArray().then((students, err) => {
      try {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(breakfast);
      } catch (err) {
        res.status(400).json({ message: err });
      }
    });
  };
  
  const getSingle = async (req, res) => {
    //#swagger.tags=['breakfast']
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid id to find a breakfast item.');
    }
    const breakfastId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('breakfast').find({ _id: breakfastId });
    result.toArray().then((breakfast, err) => {
      try {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(breakfast[0]);
      } catch (err) {
        res.status(400).json({ message: err });
      }
    });
  };

  module.exports = {
    getAll,
    getSingle
  };
  