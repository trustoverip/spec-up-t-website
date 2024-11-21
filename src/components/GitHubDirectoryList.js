import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * Converts a GitHub URL to a GitHub API URL for repository contents.
 * Example: Use it like this is markdown files: `<GitHubDirectoryList githubUrl="https://github.com/trustoverip/spec-up-t-starter-pack/tree/main/spec-up-t-starterpack" />`
 * @param {string} githubUrl - The GitHub URL in the format `https://github.com/{owner}/{repo}/tree/{branch}/{path}`.
 * @returns {string} The corresponding GitHub API URL.
 */
const convertToApiUrl = (githubUrl) => {
    try {
        const url = new URL(githubUrl);
        const [, owner, repo, , branch, ...pathParts] = url.pathname.split('/');
        const path = pathParts.join('/');
        return `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`;
    } catch (error) {
        console.error('Invalid GitHub URL:', githubUrl);
        return null;
    }
};

/**
 * A component that lists the contents of a GitHub directory.
 * @param {Object} props - The component props.
 * @param {string} props.githubUrl - The GitHub URL of the directory to list.
 * @returns {JSX.Element} The component JSX.
 */
const GitHubDirectoryList = ({ githubUrl }) => {
    const [files, setFiles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiUrl = convertToApiUrl(githubUrl);
        if (!apiUrl) {
            setError('Invalid GitHub URL');
            return;
        }

        const fetchFiles = async () => {
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error(`Failed to fetch files: ${response.statusText}`);
                }
                const data = await response.json();
                setFiles(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchFiles();
    }, [githubUrl]);

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!files.length) {
        return <p>Loading directory listing...</p>;
    }

    return (
        <ul>
            {files.map((file) => (
                <li key={file.sha}>
                    <a href={file.html_url} target="_blank" rel="noopener noreferrer">
                        {file.type === 'dir' ? `${file.name}/` : file.name}
                    </a>
                </li>
            ))}
        </ul>
    );
};

GitHubDirectoryList.propTypes = {
    githubUrl: PropTypes.string.isRequired,
};

export default GitHubDirectoryList;
