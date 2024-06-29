import e from "express";
import fs from "fs";


const app = e();
const port = 3000;

app.get("/:code", (req, res) => {
  const jsonString = fs.readFileSync("./syllabus.json", "utf-8");
  const data = JSON.parse(jsonString);
  res.json(data.filter((subj) => subj.course_code == req.params.code));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
