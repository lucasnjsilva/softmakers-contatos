import React, { useState, useEffect } from 'react';
import './style.css';
import api from '../../services/api';

import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

const UpdateContact = (props) => {
    const [contact, setContact] = useState([]);
    const id = props.match.params.id;

    useEffect(() => {
        if(contact.length === 0) {
            api.get(`/${id}`).then(response => (
                setContact(response.data)
            ))
        }

        if(contact.length === 1) return;

        console.log(contact);
        console.log(contact.contact);
        // console.log(contact.contact[0]);
    }, [contact, id]);

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

                <Row>
                    <Col className="col-6">
                        <ul className="lista-contato">
                            <li>
                                <label>Nome: </label>
                                <input type="text" value={contact.contact[0].name} />
                            </li>
                            <li>
                                <label>Telefone: </label>
                                <input type="text" value={contact.contact} />
                            </li>
                            <li>
                                <label>Email: </label>
                                <input type="text" value={contact.contact} />
                            </li>
                            <li>
                                <label>Foto de Perfil: </label>
                                <input type="file" />
                            </li>

                        </ul>
                    </Col>

                    <Col className="col-6">
                        <ul className="lista-endereco">
                            <li>
                                <label>Rua: </label>
                                <input type="text" value="Rua Antônio Pedro da Silva"/>
                            </li>
                            <li>
                                <label>Número: </label>
                                <input type="text" value="117"/>
                            </li>
                            <li>
                                <label>Bairro: </label>
                                <input type="text" value="Bairro"/>
                            </li>
                            <li>
                                <label>Cidade: </label>
                                <input type="text" value="Pesqueira"/>
                            </li>
                            <li>
                                <label>Estado: </label>
                                <input type="text" value="Pernambuco"/>
                            </li>
                        </ul>
                    </Col>
                </Row>

                <Col className="d-flex justify-content-center">
                    <Link to="/salvar" className="salvar"> Editar </Link>
                </Col>

            </Container>
        </>
    );
}

export default UpdateContact;
