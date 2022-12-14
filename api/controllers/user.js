import { db } from "../db.js";

export const getUsers = (_, res) => {
    const listar = "SELECT * FROM usuarios";
    // const inserir = "";
    // const atualizar = "";
    // const del = "";

    db.query(listar, (err, data) =>{
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};