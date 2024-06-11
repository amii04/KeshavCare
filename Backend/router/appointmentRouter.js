import express from "express";
import { deleteAppointment, getAllAppointments, postAppointment, updateAppointmentStatus } from "../controller/appointmentController.js";
import {isAdminAuthenticated,isPatientAuthenticated} from "../middlewares/auth.js"
const router=express.Router();

router.post("/post", isPatientAuthenticated,postAppointment);
router.get("/getallappointment", isAdminAuthenticated,getAllAppointments);
router.put("/updated/:id", isAdminAuthenticated,updateAppointmentStatus);
router.delete("/delete/:id", isAdminAuthenticated,deleteAppointment);
export default router;
