import { Router } from "express";
import { body } from "express-validator";
import { createAccount, login } from "./handlers";


const router = Router()

router.post('/auth/register',
    body('handle')
        .notEmpty()
        .withMessage('El handle no puede ir vacio'),
    body('name')
        .notEmpty()
        .withMessage('El nombre no puede ir vacio'),
    body('email')
        .isEmail()
        .withMessage('E-mail no valido'),
    body('password')
        .isLength({ min: 8})
        .withMessage('El password es muy corto. Minimo 8 caracteres'),
    createAccount)

router.post('/auth/login',
    body('email')
        .isEmail()
        .withMessage('E-mail no valido'),
    body('password')
        .notEmpty()
        .withMessage('El password es obligatorio'),    
    login
);


export default router