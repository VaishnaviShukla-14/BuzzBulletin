const mongoose = require('mongoose');
const Grid = require('gridfs-stream');
const conn = mongoose.connection;

let gfs;
conn.once('open', () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});

exports.saveImage = (req, res) => {
  const { originalname, buffer } = req.file;

  const writeStream = gfs.createWriteStream({
    filename: originalname
  });

  writeStream.write(buffer);
  writeStream.end();

  writeStream.on('close', () => {
    res.json({ message: 'Image saved successfully' });
  });
};

exports.saveVideo = (req, res) => {
  const { originalname, buffer } = req.file;

  const writeStream = gfs.createWriteStream({
    filename: originalname
  });

  writeStream.write(buffer);
  writeStream.end();

  writeStream.on('close', () => {
    res.json({ message: 'Video saved successfully' });
  });
};