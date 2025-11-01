const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Patient = require('./models/Patient');

router.get('/', auth, async (req, res) => {
    try {
        const doctorId = req.user.doctorId;
        const patients = await Patient.find({ registeredBy: doctorId });
        res.json(patients);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.post('/', auth, async (req, res) => {
    const { name, disease, wardNumber, admittedDate } = req.body;
    const doctorId = req.user.doctorId; 

    try {
        const newPatient = new Patient({
            name,
            disease,
            wardNumber,
            admittedDate: admittedDate || Date.now(),
            registeredBy: doctorId 
        });

        const patient = await newPatient.save();
        res.status(201).json(patient);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.put('/:id', auth, async (req, res) => {
    const { name, disease, wardNumber } = req.body;
    const patientId = req.params.id;
    const doctorId = req.user.doctorId;

    try {
        let patient = await Patient.findById(patientId);
        if (!patient) {
            return res.status(404).json({ msg: 'Patient not found' });
        }

        
        if (patient.registeredBy.toString() !== doctorId) {
            return res.status(401).json({ msg: 'Not authorized to update this patient' });
        }

        const updatedFields = { name, disease, wardNumber };
        patient = await Patient.findByIdAndUpdate(
            patientId,
            { $set: updatedFields },
            { new: true }
        );

        res.json(patient);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.delete('/:id', auth, async (req, res) => {
    const patientId = req.params.id;
    const doctorId = req.user.doctorId;

    try {
        let patient = await Patient.findById(patientId);
        if (!patient) {
            return res.status(404).json({ msg: 'Patient not found' });
        }

        if (patient.registeredBy.toString() !== doctorId) {
            return res.status(401).json({ msg: 'Not authorized to delete this patient' });
        }

        await Patient.findByIdAndDelete(patientId);
        res.json({ msg: 'Patient removed' });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
