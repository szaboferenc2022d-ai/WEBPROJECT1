import termekModel from "../models/termekModel.js";

const termekControlles = {
    // Összes termék lekérése
    async getAll(req, res){
        try {
            const termekek = await termekModel.getAll();
            res.json(termekek);
        } 
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Hiba történt a termékek lekérése során.' });
        }  
    },

    // Termék lekérése ID alapján
    async getById(req, res){
        const { id } = req.params;
        try {
            const termek = await termekModel.getById(id);
            if (!termek) {
                return res.status(404).json({ error: 'Termék nem található.' });
            }
            res.json(termek);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Hiba történt a termék lekérése során.' });
        }
    },

    // Új termék hozzáadása
    async create(req, res){
        try {
            const ujTermek = await termekModel.create(req.body);
            res.status(201).json(ujTermek);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Hiba történt az új termék hozzáadása során.' });
        }
    }
};

export default termekControlles;