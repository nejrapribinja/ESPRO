const verifyRoles = (permissions) => {
  return (req, res, next) => {
    const tokenRoleID = req.tokenInfo.token_role_id;

    if (permissions.includes(tokenRoleID)) {
      next();
    } else {
      return res.status(401).json("You don't have permission!");
    }
  };
};

module.exports = verifyRoles;
