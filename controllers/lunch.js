const { ObjectId } = require('mongodb');
const mongodb = require('../data/database');
const objectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=['lunch']
    const result = await mongodb.getDatabase().db().collection('lunch').find();
    result.toArray().then((lunch, err) => {
      try {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lunch);
      } catch (err) {
        res.status(400).json({ message: err });
      }
    });
  };
  
  const getSingle = async (req, res) => {
    //#swagger.tags=['lunch']
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid id to find a lunch item.');
    }
    const lunchId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('lunch').find({ _id: lunchId });
    result.toArray().then((lunch, err) => {
      try {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lunch[0]);
      } catch (err) {
        res.status(400).json({ message: err });
      }
    });
  };

  module.exports = {
    getAll,
    getSingle
  };
  