import pool from "../config/db.js";

const UserModel = {
    // Összes felhasználó lekérése az adatbázisból
    async getAll() {
        const [rows] = await pool.query('SELECT * FROM users');
        return rows;
    },

    // Felhasználó lekérése ID alapján
    async getById(id) {
        const [rows] = await pool.query(
            'SELECT * FROM users WHERE id = ?', [id]
        );
        return rows[0];
    },

    // Új felhasználó hozzáadása
    async create(user) {
        // Javítva: elfogadja a profileimage és a profilimage nevet is
        const { email, password, name, phone, profileimage, profilimage } = user;
        const [result] = await pool.query(
            'INSERT INTO users (email, password, name, phone, profilimage) VALUES (?, ?, ?, ?, ?)',
            [email, password, name, phone ?? null, profilimage ?? profileimage ?? null]
        );
        return { id: result.insertId, ...user };
    },

    // Felhasználó lekérése email alapján
    async getByEmail(email) {
        const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        return rows[0];
    },

    // Javítva: valódi SQL frissítés a res.json helyett
    async updateLastLogin(id) {
        await pool.query('UPDATE users SET lastlogin = NOW() WHERE id = ?', [id]);
    }
};

export default UserModel;