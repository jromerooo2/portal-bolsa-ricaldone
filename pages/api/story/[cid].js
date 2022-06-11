import getStory from "../../../lib/getStory";

export default async(req, res) => {
    const { cid } = req.query;

  try {
    const result = await getStory(cid);
    console.log(result);
    res.status(200).json(result);
  } catch (err) {
    res.status(403).json({ err: "Error occured while adding a new food." });
  }
};