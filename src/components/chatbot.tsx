'use client';
import React from 'react';

const ChatBotComWidget: React.FC = () => {
    const chatBotScript = `
<script>
  window.__ow = window.__ow || {};
  window.__ow.organizationId = "9311d610-f71f-4d47-9705-6c0d0d1f3486";
  window.__ow.template_id = "602eccc1-5117-4c40-892f-5af046a00874";
  window.__ow.integration_name = "manual_settings";
  window.__ow.product_name = "chatbot";   
  ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[OpenWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.openwidget.com/openwidget.js",t.head.appendChild(n)}};!n.__ow.asyncInit&&e.init(),n.OpenWidget=n.OpenWidget||e}(window,document,[].slice))
</script>
<noscript>You need to <a href="https://www.chatbot.com/help/chat-widget/enable-javascript-in-your-browser/" rel="noopener nofollow">enable JavaScript</a> in order to use the AI chatbot tool powered by <a href="https://www.chatbot.com/" rel="noopener nofollow" target="_blank">ChatBot</a></noscript>
    `;
    return (
        <div dangerouslySetInnerHTML={{ __html: chatBotScript }} />
    );
};

export default ChatBotComWidget;