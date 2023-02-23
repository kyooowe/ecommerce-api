//#region Import
import mongoose from "mongoose";
import { IBase } from "../base";
//#endregion

interface IUser extends IBase {
    _id: mongoose.Types.ObjectId;
    email: string;
    password: string;
}

export type { IUser }