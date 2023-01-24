const cloudinary = require("../middleware/cloudinary");

module.exports = {
  getDashboard: async (req, res) => {
    try {
      res.render("feed.ejs");
    } catch (err) {
      console.log(err);
    }
  },
};
