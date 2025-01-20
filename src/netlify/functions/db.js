const path = require("path");
const fs = require("fs");

exports.handler = async (event, context) => {
  try {
    const filePath = path.resolve(__dirname, "../../data/db.json");
    const data = fs.readFileSync(filePath, "utf-8");

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Allow all domains to access the function
        "Access-Control-Allow-Methods": "GET, OPTIONS", // Allow GET and OPTIONS methods
        "Access-Control-Allow-Headers": "Content-Type", // Allow content-type header
      },
      body: data,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Unable to read db.json" }),
    };
  }
};
