import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Contact from '../../models/Contact';

export default {
    async execute(request: Request, response: Response): Promise<Contact> {
        try {
            const { name, phone, email } = request.body;

            const contactRepository = getRepository(Contact);

            const data = {
                name,
                phone,
                email,
            };

            const schema = Yup.object().shape({
                name: Yup.string().required(),
                phone: Yup.string().required(),
                email: Yup.string().email().required(),
            });

            await schema.validate(data, { abortEarly: false });

            const contact = contactRepository.create(data);

            await contactRepository.save(contact);

            return response.status(201).json(contact) && contact;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};
