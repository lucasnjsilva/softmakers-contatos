import React, { useState, useEffect } from 'react';
import './style.css';
import api from '../../services/api';

import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

const UpdateContact = (props) => {
    const [contact, setContact] = useState({});
    const [address, setAddress] = useState({});
    const id = props.match.params.id;

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const [addressId, setAddressId] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [avatar, setAvatar] = useState({});

    useEffect(() => {
        if(contact.id === undefined) {
            api.get(`/${id}`).then(response => {
                const { data: { contact = [] } = {} } = response;
                setContact(contact[0] || {});

                const { data: { address = [] } = {} } = response;
                setAddress(address[0] || {});
            });
        }

        setName(contact.name);
        setPhone(contact.phone);
        setEmail(contact.email);
        setAddressId(address.id);
        setStreet(address.street);
        setNumber(address.number);
        setDistrict(address.district);
        setCity(address.city);
        setState(address.state);
        setAvatar(undefined);

        if(contact.id) return;
    }, [contact, address, id]);

    const handleChange = (event) => {
        setAvatar(event.target.files[0]);
    }

    // Atualizar dados
    const handleUpdate = async () => {
        const contact = {
            name,
            phone,
            email,
        }

        await api.put(`/${id}`, contact);

        const address = {
            street,
            number,
            district,
            city,
            state,
        }

        // Endereço
        if (addressId === undefined) {
            api.post(`/${id}`, address).then(() => {
                return;
            });
        } else {
            api.put(`/address/${addressId}`, address).then(() => {
                return;
            });
        }

        // Avatar
        if (avatar !== undefined) {
            const formData = new FormData();
            formData.append('avatar', avatar);
            formData.append('_method', 'PATCH');

            await api.patch(`/avatar/${id}`, formData, {
                headers: {
                    "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
                }
            });
        }

        return window.location.href = `/detalhe/${id}`;
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

                <Row>
                    <Col className="col-6">
                        <ul className="lista-contato">
                            <li>
                                <label>Nome: </label>
                                <input type="text" id="name" defaultValue={contact.name} onChange={
                                    () => (setName(document.getElementById('name').value))
                                }/>
                            </li>
                            <li>
                                <label>Telefone: </label>
                                <input type="text" id="phone" defaultValue={contact.phone} onChange={
                                    () => (setPhone(document.getElementById('phone').value))
                                }/>
                            </li>
                            <li>
                                <label>Email: </label>
                                <input type="text" id="email" defaultValue={contact.email} onChange={
                                    () => (setEmail(document.getElementById('email').value))
                                }/>
                            </li>
                            <li>
                                <label>Foto de Perfil: </label>
                                <input id="file" type="file" onChange={handleChange} />
                            </li>

                        </ul>
                    </Col>

                    <Col className="col-6">
                        <ul className="lista-endereco">
                            <li>
                                <label>Rua: </label>
                                <input type="text" id="street" defaultValue={address.street} onChange={
                                    () => (setStreet(document.getElementById('street').value))
                                }/>
                            </li>
                            <li>
                                <label>Número: </label>
                                <input type="text" id="number" defaultValue={address.number} onChange={
                                    () => (setNumber(document.getElementById('number').value))
                                }/>
                            </li>
                            <li>
                                <label>Bairro: </label>
                                <input type="text" id="district" defaultValue={address.district} onChange={
                                    () => (setDistrict(document.getElementById('district').value))
                                }/>
                            </li>
                            <li>
                                <label>Cidade: </label>
                                <input type="text" id="city" defaultValue={address.city} onChange={
                                    () => (setCity(document.getElementById('city').value))
                                }/>
                            </li>
                            <li>
                                <label>Estado: </label>
                                <input type="text" id="state" defaultValue={address.state} onChange={
                                    () => (setState(document.getElementById('state').value))
                                }/>
                            </li>
                        </ul>
                    </Col>
                </Row>

                <Col className="d-flex justify-content-center">
                    <Link onClick={handleUpdate} className="salvar"> Salvar </Link>
                </Col>

            </Container>
        </>
    );
}

export default UpdateContact;
