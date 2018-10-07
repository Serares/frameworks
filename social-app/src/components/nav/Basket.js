import PropTypes from 'prop-types';
import React from 'react';
import Imagine from '../../images/cart.png'

/**
 * Letters logo
 * @method Logo
 * @param  {Object} props
 */
const Logo = props => {
    return (
        
            <li role="presentation" className="basket" style={{ fontSize: `${props.size}em`,display:'inline-block'}}>
                 <img src={Imagine} style={{width:'30px', height:'30px'}} alt={'see basket'}/>
            </li>
        
    );
};

Logo.propTypes = {
    size: PropTypes.number
};

Logo.defaultProps = {
    size: 1.75
};

export default Logo;
