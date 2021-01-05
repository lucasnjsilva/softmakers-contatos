import React, { useState } from 'react';
import './style.css';
import api from '../../services/api';

import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

const CreateContact = () => {
    // const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const contact = {
        name,
        phone,
        email,
    }

    const handleAddMoreInformations = async () => {
        api.post('/', contact).then((response) => {
            return window.location.href = `/editar/${response.data.id}`;
        }).catch(() => {
            return window.location.href = '/';
        });
    }

    const handleCreatedContact = async () => {
        try {
            await api.post('/', contact);
        } catch (error) {
            return window.location.href = '/' && alert("Erro ao adicionar um contato.");
        }
    }

    return (
        <>
            <Container>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <div className="voltar">
                            <Link to="/"> Voltar </Link>
                        </div>
                    </Col>
                </Row>

                <hr />

                <Row>
                    <Col className="col criar-contato">
                        <h3 className="title">Cadastrar um novo Contato</h3>
                        <ul className="contato">
                            <li>
                                <label>Nome: </label>
                                <input id="name" type="text" required onChange={
                                    () => (setName(document.getElementById('name').value))
                                }/>
                            </li>
                            <li>
                                <label>Telefone: </label>
                                <input id="phone" type="text" required onChange={
                                    () => (setPhone(document.getElementById('phone').value))
                                }/>
                            </li>
                            <li>
                                <label>Email: </label>
                                <input id="email" type="text" required onChange={
                                    () => (setEmail(document.getElementById('email').value))
                                }/>
                            </li>
                        </ul>
                    </Col>
                </Row>

                <Col className="d-flex justify-content-center mt-5">
                    <Link to="/" onClick={handleCreatedContact} className="salvar"> Cadastrar </Link>
                    <Link to="#" onClick={handleAddMoreInformations} className="next"> Adicionar mais informações </Link>
                </Col>

            </Container>
        </>
    );
}

export default CreateContact;
