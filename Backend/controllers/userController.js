const User = require("../models/User");

exports.updateProfile = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.user.id,
      {
        name: req.body.name,
        phone: req.body.phone,
        bio: req.body.bio,
      },
      { new: true }
    );

    res.json(user);
  } catch {
    res.status(500).json({ msg: "Profile update failed" });
  }
};