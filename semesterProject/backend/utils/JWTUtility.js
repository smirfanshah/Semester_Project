const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const authenticateToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Extract token
    if (!token) {
        return res.status(401).json({ error: "Access token is missing or invalid" });
    }
    console.log("Token from request:", token);
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
        req.user = decoded; // Attach user info to request
        console.log("Decoded token:", decoded);
        next();
    } catch (err) {
        console.error("Token verification error:", err.message);
        return res.status(401).json({ error: "Token is invalid or expired" });
    }
};

module.exports = { authenticateToken };
