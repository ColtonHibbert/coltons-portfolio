import React from 'react';

const Header = (props) => {
    return (
        <div className="w-100 flex flex-column flex-row-ns justify-between-ns pb2 bg-light-blue ma0 "> {/*bb b--moon-gray*/} 
            <ul className="w-100 flex justify-start ma0 list pl0">
                <li className="pl2 pr4 pt1">Projects</li>
                <li className="pr4 pt1">Skills</li>
                <li className="pr4 pt1">Contact</li>
            </ul>
            <ul className="w-100 flex justify-start justify-end-ns ma0 list pl0">
                <li className="pl2 pr3 pt1">github</li>
                <li className="pr3 pt1">linkedin</li>
                <li className="pr3 pt1">g+</li>
                <li className="pr3 pt1">fb</li>
            </ul>
        </div>
    );
}

export default Header;