const express = require('express');
const router = express.Router();

//Request model
const Request = require('../../models/Request');

/**
 * @route   GET api/requests
 * @desc    Get All Requests
 * @access  Public
 */


router.get('/', async (req, res) => {
  try {
    const requests = await Request.find();
    if (!requests) throw Error('No Request');

    res.status(200).json(requests);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

/**
 * @route   POST api/requests
 * @desc    Create An Request
 * @access  Private
 */

router.post('/', async (req, res) => {
  const newRequest = new Request({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    workEmail: req.body.workEmail,
    phoneNumber: req.body.phoneNumber,
    country: req.body.country,
    company: req.body.company,
    objective: req.body.objective,
    details: req.body.details

  });

  try {
    const request = await newRequest.save();
    if (!request) throw Error('Something went wrong saving the request');

    res.status(200).json(request);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

/**
 * @route   DELETE api/requests/:id
 * @desc    Delete A Request
 * @access  Private
 */

router.delete('/:id', async (req, res) => {
  try {
    const request = await Request.findById(req.params.id);
    if (!request) throw Error('No request found');

    const removed = await request.remove();
    if (!removed)
      throw Error('Something went wrong while trying to delete the request');

    res.status(200).json({ success: true });
  } catch (e) {
    res.status(400).json({ msg: e.message, success: false });
  }
});


module.exports= router;
