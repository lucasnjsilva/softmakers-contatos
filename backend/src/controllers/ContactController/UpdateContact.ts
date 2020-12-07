import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Contact from '../../models/Contact';

export default {
    async execute(request: Request, response: Response): Promise<Contact> {
        try {
            const { id: contact_id } = request.params;
            const { name, email, phone } = request.body;
            const contactRepository = getRepository(Contact);

            const data = {
                name,
                email,
                phone,
            };

            const contact = await contactRepository.findOne({
                where: { id: contact_id },
            });

            const contactNotFound = !contact;
            if (contactNotFound) {
                response.status(400);
                throw new Error('Contact not found');
            }

            const schema = Yup.object().shape({
                name: Yup.string(),
                phone: Yup.string(),
                email: Yup.string().email(),
            });

            await schema.validate(data, { abortEarly: false });

            const update = await contactRepository.update(contact_id, data);

            if (update.affected !== 1) {
                throw new Error('Impossível atualizar');
            }

            const updatedContact = await contactRepository.findOneOrFail({
                where: { id: contact_id },
            });

            return response.json(updatedContact).status(200) && updatedContact;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

// Atualizar endereço;
