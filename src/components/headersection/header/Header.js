import React from 'react';

const Header = (props) => {
    return (
        <div>
            <ul className="w-100 flex flex-wrap justify-end ma0 bg-blue list pl0">
                <li className="pr5">Projects</li>
                <li className="pr5">Skills</li>
                <li className="pr5">Contacts</li>
            </ul>
        </div>
    );
}

export default Header;