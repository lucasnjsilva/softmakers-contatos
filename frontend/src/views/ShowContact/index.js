import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import './style.css';

import noProfile from '../../images/no-profile.jpg';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

const ShowContact = (props) => {
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
        // console.log(contact.contact);
        // console.log(contact.contact[0]);
    });

    return (
        <>
            <Container>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <div className="voltar">
                            <Link to="/"> Voltar </Link>
                        </div>

                        <div className="circle">
                            <img src={noProfile} alt="Foto do perfil" fluid/>
                        </div>


                    </Col>
                </Row>

                <hr/>

                <Row>
                    <Col className="col-6">
                        <ul className="lista-contato">
                            <li>
                                <b>Nome: </b> Lucas Nathan
                            </li>
                            <li>
                                <b>Telefone: </b> (87)99211-0368
                            </li>
                            <li>
                                <b>Email: </b> lucasnathanj@gmail.com
                            </li>
                        </ul>
                    </Col>

                    <Col className="col-6">
                        <ul className="lista-endereco">
                            <li>
                                <b>Rua: </b> Antônio Pedro da Silva
                            </li>
                            <li>
                                <b>Número: </b> 117
                            </li>
                            <li>
                                <b>Bairro: </b> Prado
                            </li>
                            <li>
                                <b>Cidade: </b> Pesqueira
                            </li>
                            <li>
                                <b>Estado: </b> Pernambuco
                            </li>
                        </ul>
                    </Col>
                </Row>

                <Col className="d-flex justify-content-center">
                    <div className="buttons">
                        <Link to="/editar/:id" className="editar"> Editar </Link>
                        <Link to="/deletar/:id" className="deletar"> Deletar </Link>
                    </div>
                </Col>

            </Container>
        </>
    );
}

export default ShowContact;
