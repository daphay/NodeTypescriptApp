import {CommonRoutesConfig} from "../common/common.routes.config";

import express from 'express';

export class UsersRoutes extends CommonRoutesConfig {
   constructor(app: express.Application){
       super(app, 'UsersRoutes');
   }
   configureRoutes(){
       this.app.route(`/users`)
            .get((req: express.Request, res: express.Response) =>{
                res.status(200).send('List of users');
            })
            .post((req: express.Request, res: express.Response) =>{
                res.status(200).send('Post of users')
            });
        this.app.route(`/users/:userId`)
            .all((req: express.Request, res: express.Response, next : express.NextFunction) =>{
                next();
            })
            .get((req : express.Request, res: express.Response) =>{
              res.status(200).send(`get Requested for id ${req.params.userId}`);
            })
            .put((req : express.Request, res: express.Response) =>{
              res.status(200).send(`put Requested for id ${req.params.userId}`);
            })
            .patch((req : express.Request, res: express.Response) =>{
              res.status(200).send(`patch Requested for id ${req.params.userId}`);
            })
            .delete((req : express.Request, res: express.Response) =>{
              res.status(200).send(`delete Requested for id ${req.params.userId}`);
            });
       return this.app;
   }
}