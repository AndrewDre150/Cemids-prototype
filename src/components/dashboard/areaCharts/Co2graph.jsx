// import React from 'react'

// const Co2graph = () => {
//   return (
    
//       <div>
//      <iframe
//         // width="480"
//         // height="290"
        
//         style={{ border: '1px solid #cccccc' }}
//         src="https://thingspeak.com/channels/2555342/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"
//         title="ThingSpeak Chart"
//       ></iframe>
//   </div>

//   );
// };

// export default Co2graph;


import React from 'react';

const Co2graph = () => {
  return (
    <div>
      <iframe
        width="100%"  // Set width to 100% for responsive design
        height="290"
        style={{
          border: '1px solid #cccccc',
          maxWidth: '480px',  // Set max width to 480px for larger screens
          maxHeight: '290px',
          resizeMode: 'cover'  // Add resize mode for responsive design
        }}
        // src="https://thingspeak.com/channels/2555342/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"
        // src="https://thingspeak.com/channels/2555342/charts/1?bgcolor=%23ffffff&color=%23d62020&days=1&dynamic=true&results=60&type=line&xaxis=Timestamp"
        src="https://thingspeak.com/channels/2555342/charts/1?bgcolor=%23ffffff&color=%23d62020&days=60&dynamic=true&results=60&timescale=daily&type=line&xaxis=Timestamp"
        title="ThingSpeak Chart"
      ></iframe>
      
    </div>
  );
};

export default Co2graph;