import React from 'react';
import './style.css';

import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

const CreateContact = () => {
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
                <Col className="col-6">
                    <ul className="lista-contato">
                        <li>
                            <label>Nome: </label>
                            <input type="text"/>
                        </li>
                        <li>
                            <label>Telefone: </label>
                            <input type="text"/>
                        </li>
                        <li>
                            <label>Email: </label>
                            <input type="text"/>
                        </li>
                        <li>
                            <label>Foto de Perfil: </label>
                            <input type="file"/>
                        </li>

                    </ul>
                </Col>

                <Col className="col-6">
                    <ul className="lista-endereco">
                        <li>
                            <label>Rua: </label>
                            <input type="text"/>
                        </li>
                        <li>
                            <label>Número: </label>
                            <input type="text"/>
                        </li>
                        <li>
                            <label>Bairro: </label>
                            <input type="text"/>
                        </li>
                        <li>
                            <label>Cidade: </label>
                            <input type="text"/>
                        </li>
                        <li>
                            <label>Estado: </label>
                            <input type="text"/>
                        </li>
                    </ul>
                </Col>
            </Row>

            <Col className="d-flex justify-content-center">
                <Link to="/salvar" className="salvar"> Cadastrar </Link>
            </Col>

        </Container>
    </>
  );
}

export default CreateContact;
