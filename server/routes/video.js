const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const dlib = require('dlib');
const cv2 = require('cv2');
const { face_recognition_model_v1, get_frontal_face_detector, shape_predictor } = dlib;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

// Initialize Dlib models
const facerec = new face_recognition_model_v1('./model/dlib_face_recognition_resnet_model_v1.dat');
const detector = new get_frontal_face_detector();
const predictor = new shape_predictor('path/to/shape_predictor_68_face_landmarks.dat');

// Helper function to load face descriptors from JSON file
const loadFaceDescriptors = () => {
    const data = fs.readFileSync('data/face_descriptors.json');
    return JSON.parse(data);
};

let faceDescriptors = loadFaceDescriptors();

// Route to handle video stream
router.get('/video_feed', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'video_feed.html'));
});

router.post('/upload', upload.single('image'), (req, res) => {
    const imgPath = req.file.path;
    const img = cv2.imread(imgPath);
    const rgbImg = cv2.cvtColor(img, cv2.COLOR_BGR2RGB);
    const faces = detector(rgbImg);

    if (faces.length === 1) {
        const face = faces[0];
        const shape = predictor(rgbImg, face);
        const faceDescriptor = facerec.compute_face_descriptor(rgbImg, shape);
        const faceDescriptorArray = Array.from(faceDescriptor);

        faceDescriptors.push({ name: req.body.name, descriptor: faceDescriptorArray });
        fs.writeFileSync('./data/face_descriptors.json', JSON.stringify(faceDescriptors));

        res.json({ status: 'success' });
    } else {
        res.status(400).json({ status: 'error', message: 'No face or multiple faces detected' });
    }

    fs.unlinkSync(imgPath);
});



app.post('/process_frame', async (req, res) => {
    const { frame } = req.body;
  
    try {
      const response = await axios.post('http://localhost:5001/process_frame', { frame });
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Error processing frame in Flask backend' });
    }
  });
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

  

module.exports = router;
