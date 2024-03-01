// import { MongoClient } from "mongodb";

// // /api/new-meetup
// // POST /api/new-meetup

// async function handler(req, res) {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI);
//     // Your database operation here
//     if (req.method === "POST") {
//       const data = req.body;

//       const client = await MongoClient.connect(
//         "mongodb+srv://hamze-al-zayed:Sdk48XdwK9W6nbD7@cluster0.xnf09vu.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
//       );
//       const db = client.db();

//       const meetupsCollection = db.collection("meetups");

//       const result = await meetupsCollection.insertOne(data);

//       console.log(result);

//       client.close();

//       res.status(201).json({ message: "Meetup inserted!" });
//     }
//   } catch (error) {
//     console.error("MongoDB connection error:", error);
//     return res.status(500).json({ message: "Failed to connect to MongoDB" });
//   }
// }

// export default handler;
