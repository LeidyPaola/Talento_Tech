const author = require('../models/author');

const getAll = async (req, res) => {
    try {
        const items = await author.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los datos' });
    }
};

const createOne = async (req, res) => {
    const { title, description, year, genre, directorOrAuthor } = req.body;
    const newItem = new author({
        title,
        description,
        year,
        genre,
        directorOrAuthor,
    });

    try {
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el item' });
    }
};

const getOneById = async (req, res) => {
    try {
        const item = await author.findById(req.params.id);
        if (!item) return res.status(404).json({ message: 'Item no encontrado' });
        res.json(item);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el item' });
    }
};

const updateOneById = async (req, res) => {
    try {
        const updatedItem = await author.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) return res.status(404).json({ message: 'Item no encontrado' });
        res.json(updatedItem);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el item' });
    }
};

const deleteOneById = async (req, res) => {
    try {
        const deletedItem = await author.findByIdAndDelete(req.params.id);
        if (!deletedItem) return res.status(404).json({ message: 'Item no encontrado' });
        res.json({ message: 'Item eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el item' });
    }
};

module.exports = {
    getAll,
    createOne,
    getOneById,
    updateOneById,
    deleteOneById,
};
