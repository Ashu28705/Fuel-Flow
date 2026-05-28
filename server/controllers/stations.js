import Station from '../models/Station.js';

export const getStations = async (req, res) => {
  const stations = await Station.find();
  res.json(stations);
};

export const addStation = async (req, res) => {
  const station = await Station.create(req.body);
  res.status(201).json(station);
};
