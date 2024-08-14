import React, { useState } from 'react';
import { FaPhone, FaTruck } from 'react-icons/fa';
import './PopUp.css'; 

const PopUp = () => {
    const [visible, setVisible] = useState(true);

    const closePopup = () => {
        setVisible(false);
    };

    return (
        visible && (
            <div className="popup-section-1">
                <span className="popup-close-1" onClick={closePopup}>&times;</span>
                <FaTruck className="popup-icon-1" />
                <span className="popup-message-1">For 24/7 Roadside Assistance, contact us</span>
                <FaPhone className="popup-icon-1" />
            </div>
        )
    );
};

export default PopUp;