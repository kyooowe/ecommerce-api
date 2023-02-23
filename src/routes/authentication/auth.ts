//#region Import
import { Router } from "express";
import { Login } from "../../controllers/authentication/login";
//#endregion

//#region Action
const AuthenticationRouter = Router()
AuthenticationRouter.post('/login', Login)
//#endregion

export { AuthenticationRouter }