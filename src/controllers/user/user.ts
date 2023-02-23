//#region Import
import { UserModel } from "../../models/user/user";
import { Request, Response } from "express";
import { SingleApiResponse } from "../../helpers/response";
//#endregion

//#region Action
const CreateUser = async (req: Request, res: Response) => {
    try {
        
        const user = new UserModel({
            email: req.body.email,
            password: req.body.password
        })

        const newAccount = await user.save()
        res.status(200).json(SingleApiResponse({success: false, data: newAccount, statusCode: 200}))

    } catch (error: any) {
        res.status(500).json(SingleApiResponse({success: false, data: null, statusCode: 500}))
    }
}

export { CreateUser }
//#endregion