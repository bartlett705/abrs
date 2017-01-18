import React, { PropTypes } from 'react'

const CheckIn = ({ data }) => {
  const { callsign, beer, gridsquare } = data;
  return (
    <tr>
      <td>
        { callsign }
      </td>
      <td>
        { beer }
      </td>
      <td>
        { gridsquare }
      </td>
    </tr>
  )
}

export default CheckIn
