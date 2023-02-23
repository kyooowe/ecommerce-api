//#region Import
import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
//#endregion

//#region Configuration
dotenv.config()

const app: Express = express();
const port = process.env.PORT;
//#endregion

//#region Application
app.get('/', (req: Request, res: Response) => {
    res.send('Test')
})

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
})
//#endregion