const { ObjectId } = require('mongodb');
const mongodb = require('../data/database');
const objectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=['dessert']
    const result = await mongodb.getDatabase().db().collection('dessert').find();
    result.toArray().then((students, err) => {
      try {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(dessert);
      } catch (err) {
        res.status(400).json({ message: err });
      }
    });
  };
  
  const getSingle = async (req, res) => {
    //#swagger.tags=['dessert']
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid id to find a dessert item.');
    }
    const dessertId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('dessert').find({ _id: dessertId });
    result.toArray().then((dessert, err) => {
      try {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(dessert[0]);
      } catch (err) {
        res.status(400).json({ message: err });
      }
    });
  };

  module.exports = {
    getAll,
    getSingle
  };
  