module.exports = (role) => {
  return (req, res, next) => {

    if (!req.user) {
      return res.status(401).json({ msg: "User not authenticated" });
    }

    if (!req.user.role) {
      return res.status(400).json({ msg: "Role missing in token" });
    }

    if (req.user.role !== role) {
      return res.status(403).json({ msg: "Access denied" });
    }

    next();
  };
};