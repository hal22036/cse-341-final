const { ObjectId } = require('mongodb');
const mongodb = require('../data/database');
const objectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=['Dinner']
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
    //#swagger.tags=['Dinner']
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

  const createDinner = async (req, res) => {
    //#swagger.tags=['Dinner']
    const dinner = {
      dinner_type: req.body.dinner_type,
      item_1: req.body.item_1,
      item_2: req.body.item_2,
      item_3: req.body.item_3,
      item_4: req.body.item_4,
      category: req.body.category
    };
    const response = await mongodb.getDatabase().db().collection('dinner').insertOne(dinner);
    try {
      response.acknowledged;
      res.status(204).send();
    } catch {
      res.status(500).json(response.error || 'Some error occured while updating the dinner.');
    }
  };
  
  const updateDinner = async (req, res) => {
    //#swagger.tags=['Dinner']
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid contact id to update a dinner.');
    }
    const dinnerId = new ObjectId(req.params.id);
    const dinner = {
      dinner_type: req.body.dinner_type,
      item_1: req.body.item_1,
      item_2: req.body.item_2,
      item_3: req.body.item_3,
      item_4: req.body.item_4,
      category: req.body.category
    };
    const response = await mongodb
      .getDatabase()
      .db()
      .collection('dinner')
      .replaceOne({ _id: dinnerId }, dinner);
    try {
      response.modifiedCount;
      res.status(204).send();
    } catch {
      res.status(500).json(response.error || 'Some error occured while updating the dinner.');
    }
  };
  
  const deleteDinner = async (req, res) => {
    //#swagger.tags=['Dinner']
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid contact id to delete a dinner.');
    }
    const dinnerId = new ObjectId(req.params.id);
    const response = await mongodb
      .getDatabase()
      .db()
      .collection('dinner')
      .deleteOne({ _id: dinnerId });
    try {
      response.deleteCount > 0;
      res.status(204).send();
    } catch {
      res.status(500).json(response.error || 'Some error occured while deleting the dinner.');
    }
  };

  module.exports = {
    getAll,
    getSingle,
    createDinner,
    updateDinner,
    deleteDinner
  };
  
  