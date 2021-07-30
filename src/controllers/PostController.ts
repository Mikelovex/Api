import {Request, Response} from 'express'
import { getRepository } from "typeorm";
import Posts from '../models/Posts';

class PostsController {
    async store(req: Request, res: Response) {
        try {
            const repository = getRepository(Posts)
            const {user_id, title, content} = req.body
    
    
            const postExists = await repository.findOne({where: {title}})
    
            if (postExists) {
                return res.sendStatus(409)
            }
    
            const post = repository.create({ user_id, title, content})
            await repository.save(post)
    
    
            return res.json(post)
        } catch(err) {
            console.log(err)
        }
    }

    async getUserPosts(req: Request, res: Response) {
        const params = req.query

        const repository = getRepository(Posts)

        const posts = await repository.find({select: ['title']})


        return res.json(posts)

    }


}


export default new PostsController()