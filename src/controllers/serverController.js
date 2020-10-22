const { Server } = require('../models');

const ServerController = () => {

  const getAllServers = async (req, res) => {
    try {
      const result = await Server.findAll({})

      res.json(result)
    } catch (error) {
      res.json(error)
    }
  }

  const create = async (req, res) => {
    try {

      const result = await Server.create(req.body);

      res.json(result);

    } catch (error) {
      res.json(error);
    }
  }

  return {
    getAllServers,
    create
  }
}

module.exports = ServerController;
