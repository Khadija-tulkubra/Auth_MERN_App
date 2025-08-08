const ensureAuthenticated = (req, res, next) => {
  let token = req.headers['authorization'];
   console.log("Raw Token from Header:", token); // Log this

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided.", success: false });
  }
  if (token &&  token.startsWith("Bearer ")) {
    token = token.slice(7); // remove 'Bearer ' from the string
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user info to request object
  } catch (error) {
    return res.status(403).json({ message: "Invalid token.", success: false });
  }
  next(); // Proceed to the next middleware or route handler
}

module.exports = { ensureAuthenticated };