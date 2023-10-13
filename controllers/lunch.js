const { ObjectId } = require('mongodb');
const mongodb = require('../data/database');
const objectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=['Lunch']
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
    //#swagger.tags=['Lunch']
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

  const createLunch = async (req, res) => {
    //#swagger.tags=['Lunch']
    const lunch = {
      lunch_type: req.body.lunch_type,
      item_1: req.body.item_1,
      item_2: req.body.item_2,
      item_3: req.body.item_3,
      item_4: req.body.item_4,
      category: req.body.category
    };
    const response = await mongodb.getDatabase().db().collection('lunch').insertOne(lunch);
    try {
      response.acknowledged;
      res.status(204).send();
    } catch {
      res.status(500).json(response.error || 'Some error occured while updating the lunch.');
    }
  };
  
  const updateLunch = async (req, res) => {
    //#swagger.tags=['Lunch']
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid contact id to update a lunch.');
    }
    const lunchId = new ObjectId(req.params.id);
    const lunch = {
      lunch_type: req.body.lunch_type,
      item_1: req.body.item_1,
      item_2: req.body.item_2,
      item_3: req.body.item_3,
      item_4: req.body.item_4,
      category: req.body.category
    };
    const response = await mongodb
      .getDatabase()
      .db()
      .collection('lunch')
      .replaceOne({ _id: lunchId }, lunch);
    try {
      response.modifiedCount;
      res.status(204).send();
    } catch {
      res.status(500).json(response.error || 'Some error occured while updating the lunch.');
    }
  };
  
  const deleteLunch = async (req, res) => {
    //#swagger.tags=['Lunch']
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid contact id to delete a lunch.');
    }
    const lunchId = new ObjectId(req.params.id);
    const response = await mongodb
      .getDatabase()
      .db()
      .collection('lunch')
      .deleteOne({ _id: lunchId });
    try {
      response.deleteCount > 0;
      res.status(204).send();
    } catch {
      res.status(500).json(response.error || 'Some error occured while deleting the lunch.');
    }
  };

  module.exports = {
    getAll,
    getSingle,
    createLunch,
    updateLunch,
    deleteLunch
  };
  
  
  