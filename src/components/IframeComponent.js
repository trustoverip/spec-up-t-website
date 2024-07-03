/**
 * @file This file contains the “IframeComponent” component. This React component is used to render an iframe element with a specified src attribute and width. The height of the iframe is calculated based on the content of the iframe. The component uses the useRef hook to access the iframe element and the onLoad event to calculate the height of the iframe based on its content.
 * @author Kor Dwarshuis
 * @version 1.0.0
 * @since 2024-07-03
 */

import React, { useEffect, useState, useRef } from 'react';

const IframeComponent = ({ src, width }) => {
    const iframeRef = useRef(null);

    // Handler for the iframe's onLoad event
    const handleIframeLoad = () => {
        try {
            const iframe = iframeRef.current;
            // Accessing the contentDocument of the iframe
            const body = iframe.contentDocument.body;
            const html = iframe.contentDocument.documentElement;
            // Calculating the height based on the content of the iframe
            const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
            // Setting the height of the iframe based on its content
            iframe.style.height = `${height}px`;
        } catch (error) {
            console.error("Error accessing iframe content:", error);
            // Handle errors (e.g., due to cross-origin restrictions) here
        }
    };

    return (
        <iframe
            ref={iframeRef}
            src={src}
            width={width || '100%'}
            style={{ border: 'none', width: width || '100%', height: 'auto' }} // Set initial height to 'auto'
            onLoad={handleIframeLoad} // Attach the onLoad event handler
        ></iframe>
    );
};

export default IframeComponent;