import api from '../services/api';

const DeleteContact = async (props) => {
    const id = props.match.params.id;
    await api.delete(`/${id}`);
}

export default DeleteContact;
