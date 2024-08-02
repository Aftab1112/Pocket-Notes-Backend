import { app } from "./app.js";
import { connectToMongoDB } from "./data/database.js";

connectToMongoDB();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
