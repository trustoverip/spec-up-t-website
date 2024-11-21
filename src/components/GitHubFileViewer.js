import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * Converts a GitHub file URL to a GitHub API URL for fetching raw content.
 * @param {string} githubFileUrl - The GitHub file URL in the format `https://github.com/{owner}/{repo}/blob/{branch}/{path}`.
 * @returns {object} Object containing the API URL and original repo URL.
 */
const convertToApiUrl = (githubFileUrl) => {
    try {
        const url = new URL(githubFileUrl);
        const [, owner, repo, , branch, ...pathParts] = url.pathname.split('/');
        const path = pathParts.join('/');
        return {
            apiUrl: `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${path}`,
            repoUrl: githubFileUrl,
        };
    } catch (error) {
        console.error('Invalid GitHub File URL:', githubFileUrl);
        return null;
    }
};

const GitHubFileViewer = ({ githubFileUrl }) => {
    const [content, setContent] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const urls = convertToApiUrl(githubFileUrl);
        if (!urls || !urls.apiUrl) {
            setError('Invalid GitHub File URL');
            return;
        }

        const fetchFileContent = async () => {
            try {
                const response = await fetch(urls.apiUrl);
                if (!response.ok) {
                    throw new Error(`Failed to fetch file content: ${response.statusText}`);
                }
                const data = await response.text(); // Fetch as plain text
                setContent(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchFileContent();
    }, [githubFileUrl]);

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!content) {
        return <p>Loading file content...</p>;
    }

    return (
        <div>
            {/* Link to source */}
            <p>
                <a href={githubFileUrl} target="_blank" rel="noopener noreferrer">
                    link to source
                </a>
            </p>

            {/* File content display */}
            <pre>
                <code>{content}</code>
            </pre>
        </div>
    );
};

GitHubFileViewer.propTypes = {
    githubFileUrl: PropTypes.string.isRequired,
};

export default GitHubFileViewer;
