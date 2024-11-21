// Docusaurus allows you to define global MDX components using a MDXComponents provider. This makes your component available in all .mdx files. 

import React from 'react';
import DefaultMDXComponents from '@theme-original/MDXComponents';
import GitHubDirectoryList from '@site/src/components/GitHubDirectoryList';

// Extend the default MDX components
export default {
    ...DefaultMDXComponents, // Include all default components
    GitHubDirectoryList,     // Add your custom component
};
