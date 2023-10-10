const { ObjectId } = require('mongodb');
const mongodb = require('../data/database');
const objectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=['dessert']
    const result = await mongodb.getDatabase().db().collection('dessert').find();
    result.toArray().then((dessert, err) => {
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

  const createDessert = async (req, res) => {
    //#swagger.tags=['dessert']
    const dessert = {
      dessert_type: req.body.dessert_type,
      item_1: req.body.item_1,
      item_2: req.body.item_2,
      item_3: req.body.item_3,
      item_4: req.body.item_4,
      item_5: req.body.item_5,
      item_6: req.body.item_6,
      category: req.body.category
    };
    const response = await mongodb.getDatabase().db().collection('dessert').insertOne(dessert);
    try {
      response.acknowledged;
      res.status(204).send();
    } catch {
      res.status(500).json(response.error || 'Some error occured while updating the dessert.');
    }
  };
  
  const updateDessert = async (req, res) => {
    //#swagger.tags=['dessert']
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid contact id to update a dessert.');
    }
    const dessertId = new ObjectId(req.params.id);
    const dessert = {
      dessert_type: req.body.dessert_type,
      item_1: req.body.item_1,
      item_2: req.body.item_2,
      item_3: req.body.item_3,
      item_4: req.body.item_4,
      item_5: req.body.item_5,
      item_6: req.body.item_6,
      category: req.body.category
    };
    const response = await mongodb
      .getDatabase()
      .db()
      .collection('dessert')
      .replaceOne({ _id: dessertId }, dessert);
    try {
      response.modifiedCount;
      res.status(204).send();
    } catch {
      res.status(500).json(response.error || 'Some error occured while updating the dessert.');
    }
  };
  
  const deleteDessert = async (req, res) => {
    //#swagger.tags=['dessert']
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid contact id to delete a dessert.');
    }
    const dessertId = new ObjectId(req.params.id);
    const response = await mongodb
      .getDatabase()
      .db()
      .collection('dessert')
      .deleteOne({ _id: dessertId });
    try {
      response.deleteCount > 0;
      res.status(204).send();
    } catch {
      res.status(500).json(response.error || 'Some error occured while deleting the dessert.');
    }
  };

  module.exports = {
    getAll,
    getSingle,
    createDessert,
    updateDessert,
    deleteDessert
  };
  
  