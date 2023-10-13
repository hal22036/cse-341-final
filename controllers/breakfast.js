const { ObjectId } = require('mongodb');
const mongodb = require('../data/database');

const getAll = async (req, res) => {
    //#swagger.tags=['breakfast']
    const result = await mongodb.getDatabase().db().collection('breakfast').find();
    result.toArray().then((breakfast, err) => {
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

  const createBreakfast = async (req, res) => {
    //#swagger.tags=['breakfast']
    const breakfast = {
      main_dish: req.body.main_dish,
      item_1: req.body.item_1,
      item_2: req.body.item_2,
      item_3: req.body.item_3,
      item_4: req.body.item_4,
      category: req.body.category
    };
    const response = await mongodb.getDatabase().db().collection('breakfast').insertOne(breakfast);
    try {
      response.acknowledged;
      res.status(200).json(breakfast);
    } catch {
      res.status(500).json(response.error || 'Some error occured while creating the breakfast.');
    }
  };
  
  const updateBreakfast = async (req, res) => {
    //#swagger.tags=['breakfast']
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid contact id to update a breakfast.');
    }
    const breakfastId = new ObjectId(req.params.id);
    const breakfast = {
      main_dish: req.body.main_dish,
      item_1: req.body.item_1,
      item_2: req.body.item_2,
      item_3: req.body.item_3,
      item_4: req.body.item_4,
      category: req.body.category
    };
    const response = await mongodb
      .getDatabase()
      .db()
      .collection('breakfast')
      .replaceOne({ _id: breakfastId }, breakfast);
    try {
      response.modifiedCount;
      res.status(200).json(breakfast);
    } catch {
      res.status(500).json(response.error || 'Some error occured while updating the breakfast.');
    }
  };
  
  const deleteBreakfast = async (req, res) => {
    //#swagger.tags=['breakfast']
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid contact id to delete a breakfast.');
    }
    const breakfastId = new ObjectId(req.params.id);
    const response = await mongodb
      .getDatabase()
      .db()
      .collection('breakfast')
      .deleteOne({ _id: breakfastId });
    try {
      response.deleteCount > 0;
      res.status(200).json({"message": `Breakfast with id ${breakfastId} was succesfully deleted.`});
    } catch {
      res.status(500).json(response.error || 'Some error occured while deleting the breakfast.');
    }
  };

  module.exports = {
    getAll,
    getSingle,
    createBreakfast,
    updateBreakfast,
    deleteBreakfast
  };
  