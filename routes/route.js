import express from "express";

import { 
    getAllItems, 
    getAllItemsASC, 
    getEmergencyContactById,
    updateEmergencyContact,
    addEmergencyContact,
    deleteEmergencyContact,
    getEmergencyContactByCountry } from "../models/models.js";

const emergencyContactsRouter = express.Router();

emergencyContactsRouter.get("/", async function (req, res) {
    console.log("GET request for all items")
    const responseObject = {
        success: true,
        message: "Returned all items",
        payload: await getAllItems()
    };
    res.status(200).json(responseObject);
});

emergencyContactsRouter.get("/asc", async function (req, res) {
    console.log("GET request for all items ASC order")
    const responseObject = {
        success: true,
        message: "Returned all items ASC order",
        payload: await getAllItemsASC()
    };
    res.status(200).json(responseObject);
});

emergencyContactsRouter.get("/:id", async function (req, res) {
    const id = Number(req.params.id);
    console.log(`GET request for emergency_contacts with id of ${id}`)
    const responseObject = {
      success: true,
      message: "returned item with ${id}",
      payload: await getEmergencyContactById(id),
    };
    res.status(200).json(responseObject);
  });

  emergencyContactsRouter.get("/country/:country", async function (req, res) {
    const country = String(req.params.country);
    console.log(`GET request for emergency_contacts for ${country}`)
    const responseObject = {
      success: true,
      message: "returned item ${country}",
      payload: await getEmergencyContactByCountry(country),
    };
    res.status(200).json(responseObject);
  });

emergencyContactsRouter.put("/:id", async function (req, res) {
    const id = Number(req.params.id);
    console.log(`PUT request for emergency_contacts with id of ${id}`)  
  const emergencyContact = req.body;
  const responseObject = {
    success: true,
    message: "EmergencyContact updated",
    payload: await updateEmergencyContact(id, emergencyContact),
  };
  res.status(200).json(responseObject);
});

emergencyContactsRouter.post("/", async function (req, res) {
    const newEmergencyContact = req.body;
    console.log(`POST request for new EmergencyContact : ${JSON.stringify(newEmergencyContact)}`);
    const responseObject = {
      success: true,
      message: `added new EmergencyContact : ${JSON.stringify(newEmergencyContact)}`,
      payload: await addEmergencyContact(newEmergencyContact),
    };
    res.status(200).json(responseObject);
  });

  emergencyContactsRouter.delete("/:id", async function (req, res) {
    const id = Number(req.params.id);
    console.log(`DELETE request for emergency_contact with id of ${id}`)
    const responseObject = {
      success: true,
      message: `emergency_contact deleted with id of ${id}`,
      payload: await deleteEmergencyContact(id),
    };
    res.status(200).json(responseObject);
  });

export default emergencyContactsRouter;