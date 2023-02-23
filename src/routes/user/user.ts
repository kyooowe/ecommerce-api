//#region Import
import { Router } from "express";
import { CreateUser } from "../../controllers/user/user";
//#endregion

//#region Action
const UserRouter = Router()
UserRouter.post('/', CreateUser)
//#endregion

export { UserRouter }