const createTourService = async (req, res) => {
    try {
        const newTour = await Tours.create(req.body);
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

module.exports = createTourService;