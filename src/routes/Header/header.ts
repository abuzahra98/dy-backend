
import express from 'express';
import { Header } from '../../entity/Header/Header';

const header = express.Router();

header.use(express.json());

header.post("/header", async (req, res) => {
  try {
    const newHeader = Header.create(req.body);
    const savedHeader = await newHeader.save();
    res.status(201).json(savedHeader);
  } catch (error) {
    console.error("Error creating header:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

header.get('/header', async (req, res) => {
  try {
    const header = await Header.find();
    res.json({ data: header, status: 'success', code: 200 });
  } catch (error) {
    console.error('Error fetching header:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default header;
