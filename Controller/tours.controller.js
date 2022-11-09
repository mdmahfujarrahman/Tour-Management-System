const  createTourService = require ("../services/tours.service.js");

const createTour = async (req, res) => {
    try {
        const newTour = await createTourService(res);
        res.status(201).json({
            status: "success",
            data: {
                tour: newTour,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
}


module.exports = { createTour };