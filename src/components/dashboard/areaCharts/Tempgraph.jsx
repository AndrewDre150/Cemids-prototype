// import React from 'react'

// function Tempgraph() {
//   return (
//     <div>
//     <iframe 
        // width="480" 
//         height="290" 
//         style={{border: "1px solid #cccccc" }}
//         src="https://thingspeak.com/channels/2555342/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Temperature+Monitoring&type=line">
//     </iframe>
//   </div>
//   )
// }

// export default Tempgraph

import React from 'react';
import './temp.css'

function Tempgraph() {
  return (
    <div>
      <iframe
        // width="100%"  // Set width to 100% for responsive design
        className="custom-iframe"
        // width="450" 
        // height="290"
        // style={{
        //   border: "1px solid #cccccc",
        //   maxWidth: "480px",  // Set max width to 480px for larger screens
        //   maxHeight: "290px",
        //   resizeMode: "cover"  // Add resize mode for responsive design
        // }}
        // src="https://thingspeak.com/channels/2555342/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Temperature+Monitoring&type=line"
        src="https://thingspeak.com/channels/2555342/charts/2?bgcolor=%23ffffff&color=%23d62020&days=60&dynamic=true&results=60&timescale=daily&title=Temperature+Monitoring&type=line"
      ></iframe>
    </div>
  );
}

export default Tempgraph;