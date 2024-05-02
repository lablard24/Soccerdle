//game unlimited players version page api

import User from "../models/userModel.js";

import Player from "../models/playerModel.js";

const leaderboardAmount = 10;

export const leaderboard = async (req, res) => {
    try {
      //const { score } = req.body;
        const users = await User.find({}).select({ "name": 1, "score": 1, "_id": 0}).sort({ score: -1 }).limit(10);

        res.status(201).json(users);

    } catch (error) {
      console.log("Error in unlimited controller", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
};

export const updateScore = async (req, res) => {
    try {
        const { username, score } = req.body;

        await User.updateOne({ username }, { score: score })

        res.status(201).json({
            username: username,
            score: score || 0
          });

    } catch (error) {
      console.log("Error in unlimited controller", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
};