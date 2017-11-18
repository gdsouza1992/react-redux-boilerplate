import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const UserCard = styled.div`
    display: inline-flex;
`;

const NoStyleUl = styled.ul`
    list-style-type: none;
    padding-left: 10px;
`;

const UserItem = (props) => {
    const { user } = props;
    const fullName = `${user.name.first} ${user.name.last}`;
    return (
        <UserCard>
            <img src={user.picture.thumbnail} alt={fullName} />
            <NoStyleUl>
                <li>{ fullName }</li>
                <li>{ user.email }</li>
            </NoStyleUl>
        </UserCard>
    );
};

UserItem.propTypes = {
    user: PropTypes.object
};


export default UserItem;
