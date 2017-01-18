import React, { PropTypes } from 'react'
import CheckIn from './CheckIn'

let counter = 0;

const CheckInList = ({ data }) => {
  const checkInElements = data.map(entry => <CheckIn data={entry} key={counter++} />)
  return (
    <table>
      <tbody>
        {checkInElements}
      </tbody>
  </table>
  )
}

export default CheckInList;
