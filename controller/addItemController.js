
const userItem = require("../Models/addItemModel");

exports.addItems = async (req, res) => {
    try {
        // req.body.userId = req.userId;
        const { title, description, author, public_year, isbn } = req.body;
        if (!title || !description || !author || !public_year || !isbn) {
            return res.status(404).json("Please Enter All fields");
        }

        const newBook = new userItem({
            title,
            description,
            author,
            publicYear: public_year,
            isbn
            // userId: req.body.userId
        })
        const savedProduct = await newBook.save();
        return res.status(201).json({
            message: "Book saved successfully",
            details: savedProduct,
            success: true
        })

    }
    catch (err) {
        return res.status(500).json(err);
    }


}

exports.getAllItems = async (req, res) => {
    try {
        const response = await userItem.find({});
        if (!response) {
            return res.status(404).json({
                success: true,
                data: []
            })
        }
        return res.status(200).json({
            success: true,
            data: response,
        })

    } catch (err) {
        return res.status(500).json(err)
    }
}

exports.getSingleItem = async (req, res) => {
    try {
        const _id = req.params.id;
        const response = await userItem.findOne({ _id });
        if (!response) {
            return res.status(400).json({
                success: true,
                data: []
            })
        }
        return res.status(200).json({
            success: true,
            data: response
        })
    }
    catch (err) {
        console.log(err)
        return res.status(500).json("Something went wrong")
    }
}

exports.deleteItem = async (req, res) => {
    try {
        const _id = req.params.id;
        const response = await userItem.deleteOne({ _id });
        return res.status(200).json({
            success: true,
            data: response
        })
    }
    catch (err) {
        return res.status(500).json("Something went wrong")
    }
}

exports.updateItem = async (req, res) => {
    try {
        const _id = req.params.id;
        const { title, author, description, public_year, isbn } = req.body;
        const response = await userItem.updateOne({ _id }, {
            $set: { title: title, description: description, author: author, publicYear: public_year, isbn: isbn }
        })
        return res.status(201).json({
            success: true,
            message: "Book Updated successfully"
        })
    }
    catch (err) {
        return res.status(500).json("Something went wrong")
    }
}