import React from 'react';

const Popup = props => {
  return (
    <div className={'popup-overlay ' + (props.isPopupShow ? '' : 'hidden')}>
      <div className="popup-content">
        <div className="popup-title">{props.title}</div>
        <span className="close-icon" onClick={props.closePopup}>
          <i className="fa fa-times"></i>
        </span>
        {props.children}
      </div>
    </div>
  );
};

export default Popup;
