import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import PropTypes from 'prop-types';

const QRCodeGenerator = ({ value }) => {
  return (
    <div>
      <QRCodeSVG value={value} />
    </div>
  );
};

QRCodeGenerator.propTypes = {
  value: PropTypes.string.isRequired,
};

export default QRCodeGenerator;
