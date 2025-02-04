// Import express from express
import express from "express";

const router = express.Router();

let DB = [
  {
    id: 1,
    fName: "Bishes",
    lName: "Adhikari",
  },

  {
    id: 2,
    fName: "Umesh",
    lName: "Dhakal",
  },
];

// Get Method

router.get("/", (req, res) => {
  console.log(req.query);
  DB.push(req.query);
  res.json({
    message: "Get method started",
    user: DB,
  });
});

// Post Method

router.post("/", (req, res) => {
  const { id, fName, lName } = req.body;

  if (!id || !fName || !lName) {
    return res.status(400).json({
      message: "Please enter all the required fields",
    });
  }

  //   Check if the id matches

  if (DB.some((user) => user.id === id)) {
    return res.status(401).json({
      message: "id already exists",
    });
  }

  const newUser = { id: +id, fName, lName };

  res.json({
    message: "New user has been added",
    user: newUser,
  });
});

//PUT Method
router.put("/", (req, res) => {
  console.log(req.body);
  DB.push(req.body);
  res.json({
    message: "Put method implemented",
  });
});

//  Delete Method
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  const initialLength = DB.length;

  DB = DB.filter((user) => user.id !== +id);

  if (DB.length === initialLength) {
    return res.status(400).json({
      message: "ID not found",
    });
  }

  res.json({
    message: `The ID with ${id} is deleted`,
    user: DB,
  });
});

export default router;
