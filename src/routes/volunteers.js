import express from "express";
const router = express.Router();
import Volunteer from "../models/Volunteer.js";

//Definir uma rota (/voluntarios) que aceite requisições GET, POST e responda de maneira apropriada.
// Rota para registrar um novo voluntário
router.post("/", async (req, res) => {
    try {
        const { name, email, interestArea } = req.body;

        // Verifica se o voluntário já existe
        const existingVolunteer = await Volunteer.findOne({ email });
        if (existingVolunteer) {
            return res.status(400).json({ message: "Voluntário já cadastrado." });
        }
        // Cria um novo voluntário
        const newVolunteer = new Volunteer({ name, email, interestArea });
        await newVolunteer.save();
        return res.status(201).json(newVolunteer);
    } catch (error) {
        console.error("Erro ao cadastrar voluntário:", error);
        return res.status(500).json({ message: "Erro ao cadastrar voluntário." });
    }
});

// Rota para listar todos os voluntários
router.get("/", async (req, res) => {
    try {
        const volunteers = await Volunteer.find();
        return res.status(200).json(volunteers);
    } catch (error) {
        console.error("Erro ao listar voluntários:", error);
        return res.status(500).json({ message: "Erro ao listar voluntários." });
    }
});


//Definir uma rota (/voluntarios/:id) que aceite requisições PUT/PATCH DELETE e responda de maneira apropriada.
// Rota para atualizar um voluntário
router.put("/:id", async (req, res) => {
    try {
        const { name, email, interestArea } = req.body;
        const { id } = req.params;

        // Verifica se o voluntário existe
        const existingVolunteer = await Volunteer.findById(id);
        if (!existingVolunteer) {
            return res.status(404).json({ message: "Voluntário não encontrado." });
        }

        // Atualiza os dados do voluntário
        existingVolunteer.name = name;
        existingVolunteer.email = email;
        existingVolunteer.interestArea = interestArea;
        await existingVolunteer.save();

        return res.status(200).json(existingVolunteer);
    } catch (error) {
        console.error("Erro ao atualizar voluntário:", error);
        return res.status(500).json({ message: "Erro ao atualizar voluntário." });
    }
});

// Rota para deletar um voluntário
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        // Verifica se o voluntário existe
        const existingVolunteer = await Volunteer.findById(id);
        if (!existingVolunteer) {
            return res.status(404).json({ message: "Voluntário não encontrado." });
        }

        // Deleta o voluntário
        await Volunteer.findByIdAndDelete(id);
        return res.status(200).json({ message: "Voluntário deletado com sucesso." });
    } catch (error) {
        console.error("Erro ao deletar voluntário:", error);
        return res.status(500).json({ message: "Erro ao deletar voluntário." });
    }
});

// Exporta o router
export default router;