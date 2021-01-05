import api from '../../services/api';

const DeleteContact = async (props) => {
    api.delete(`/${props.match.params.id}`);

    return window.location.href = '/';
}

export default DeleteContact;
