//#region Import
import { UserModel } from "../../models/user/user";
import { Request, Response } from "express";
import { SingleApiResponse } from "../../helpers/response";
import { IUser } from "../../interface/user/user";
//#endregion

//#region Action
const Login = async (req: Request, res: Response) => {
    try {
        
        const email = req.body.email;
        const password = req.body.password;

        const user = await UserModel.findOne<IUser>({ email: email, password: password })

        if(user)
            res.status(200).json(SingleApiResponse({success: true, data: user, statusCode: 200 }))
        else
            res.status(200).json(SingleApiResponse({success: true, data: null, statusCode: 404 }))

    } catch (error: any) {
        res.status(500).json(SingleApiResponse({success: false, data: null, statusCode: 500}))
    }
}

export { Login }
//#endregion