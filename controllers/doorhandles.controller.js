const Doorhandles = require("../models/Doorhandle.model");

module.exports.doorhandlesController = {
  getDoorhandles: async (req, res) => {
    try {
      const doorhandles  = await Doorhandles.find().populate("categoryId");

      return res.json(doorhandles);
    } catch (e) {
      return res.status(401).json(e.message);
    }
  },

  addDoorhandles: async (req, res) => {
    const { image, name,  price, description, categoryId, } = req.body;

    try {
      const boorhandles = await Doorhandles.create({
        image,
        name,
        description,
        price,
        categoryId,
        
      });

      return res.json(boorhandles);
    } catch (e) {
      return res.status(401).json(e.message);
    }
  },

  deleteDoorhandles: async (req, res) => {
    const { id } = req.params;
    try {
      const deletedDoorhandles = await Doorhandles.findByIdAndDelete(id);
      if (!deletedDoorhandles) {
        return res.status(404).json({ message: "Doorhandle not found" });
      }
      return res.json({ message: "Doorhandles deleted successfully" });
    } catch (e) {
      return res.status(500).json({ message: "Internal server error" });
    }
  },



}  