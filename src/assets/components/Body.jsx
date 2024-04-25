import React from 'react'

const Body = () => {
    const date = new Date();
    const todayDate = date.getDate();
    const month = date.getMonth();
    const months =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const presentMonth = months[month];
    const year = date.getFullYear();
    // console.log(year)
    // console.log(months[month]);
    // console.log(todayDate);
  return (
    <>
      <div>
        <p>Welcome, Favour</p>
        <p>
          Today is {presentMonth} {todayDate} {year}
        </p>
      </div>
    </>
  );
}

export default Body