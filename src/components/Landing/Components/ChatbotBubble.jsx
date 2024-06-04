// import React, { useEffect } from 'react';

// const ChatbotBubble = () => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://www.chatbase.co/embed.min.js';
//     script.defer = true;
//     script.setAttribute('chatbotId', 'a9ey8CW2552JizbgbwPrP');
//     script.setAttribute('domain', 'www.chatbase.co');
//     document.body.appendChild(script);
    
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return null; // Since this component only adds the script, it doesn't render anything
// }

// export default ChatbotBubble;


import React, { useEffect } from 'react';

const ChatbotIntegration = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://askelliebots.blob.core.windows.net/askelliefiles/widget-integration-98.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // You can replace this with any UI for the chatbot component if needed
};

export default ChatbotIntegration;



