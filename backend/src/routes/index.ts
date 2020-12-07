import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload';

import CreateContact from '../controllers/ContactController/CreateContact';
import UpdateContact from '../controllers/ContactController/UpdateContact';
import AddAvatarToContact from '../controllers/ContactController/AddAvatarToContact';
import ListContact from '../controllers/ContactController/ListContacts';
import ShowContact from '../controllers/ContactController/ShowContact';
import DeleteContact from '../controllers/ContactController/DeleteContact';

import CreateAddress from '../controllers/AddressController/CreateAddress';
import UpdateAddress from '../controllers/AddressController/UpdateAddress';
import ShowAddress from '../controllers/AddressController/ShowAddress';
import DeleteAddress from '../controllers/AddressController/DeleteAddress';

const router = Router();
const upload = multer(uploadConfig);

/* Contato */
/* ----------------------------------------- */

router.post('/', CreateContact.execute); // Cadastrar Contato
router.put('/:id', UpdateContact.execute); // Atualizar Contato
router.get('/', ListContact.execute); // Listar Contatos
router.get('/:id', ShowContact.execute); // Listar um Contato
router.delete('/:id', DeleteContact.execute); // Deletar Contato
router.patch(
    '/avatar/:contact',
    upload.single('avatar'),
    AddAvatarToContact.execute,
); // Adicionar Avatar

/* Endereço */
/* ----------------------------------------- */

router.post('/:contact', CreateAddress.execute); // Cadastrar Endereço
router.put('/address/:id', UpdateAddress.execute); // Atualizar Endereço
router.get('/address/:id', ShowAddress.execute); // Listar um Endereço
router.delete('/address/:contact', DeleteAddress.execute); // Deletar Endereço

export default router;
