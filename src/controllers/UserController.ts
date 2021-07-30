import {Request, Response} from 'express'
import { getRepository, Like } from "typeorm";
import User from "../models/User";



class UserController {
    async store(req: Request, res: Response) {
        const repository = getRepository(User)
        const {name, email, password} = req.body


        const userExists = await repository.findOne({where: {email}})

        if (userExists) {
            return res.sendStatus(409)
        }

        const user = repository.create({ name, email, password})
        await repository.save(user)


        return res.json(user)
    }

    async getUsers(req: Request, res: Response) {
        const repository = getRepository(User)

        const users = await repository.find()

        await repository.save(users)

        return res.json(users)
    }

    public async execute(req: Request, res: Response){
        const {email, password} = req.body
        const repository = getRepository(User);

        const user = await repository.findOne({ where: { email } });


        return res.json(user)

    }


    async getUser(req: Request, res: Response) {
        const repository = getRepository(User)

        const user = await repository.find({ relations: ['posts']} )
      

        return res.json(user)
    }
}


export default new UserController()