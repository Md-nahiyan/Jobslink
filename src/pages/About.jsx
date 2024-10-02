import React from 'react'

export default function About() {
  var Storm = function () {};
  Storm.prototype.precip = 'rain';

  var WinterStorm = function () {};
  WinterStorm.prototype = new Storm();
  WinterStorm.prototype.precip = 'snow';

  var bob = new WinterStorm();
  console.log(bob.precip);

  return (
    <div>
      <h1>About</h1>

    </div>
  )
}

