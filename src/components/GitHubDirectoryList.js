import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * Converts a GitHub URL to a GitHub API URL for repository contents.
 * @param {string} githubUrl - The GitHub URL in the format `https://github.com/{owner}/{repo}/tree/{branch}/{path}`.
 * @returns {object} Object containing the API URL and original repo URL.
 */
const convertToApiUrl = (githubUrl) => {
    try {
        const url = new URL(githubUrl);
        const [, owner, repo, , branch, ...pathParts] = url.pathname.split('/');
        const path = pathParts.join('/');
        return {
            apiUrl: `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`,
            repoUrl: githubUrl,
        };
    } catch (error) {
        console.error('Invalid GitHub URL:', githubUrl);
        return null;
    }
};

const GitHubDirectoryList = ({ githubUrl }) => {
    const [files, setFiles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const urls = convertToApiUrl(githubUrl);
        if (!urls || !urls.apiUrl) {
            setError('Invalid GitHub URL');
            return;
        }

        const fetchFiles = async () => {
            try {
                const response = await fetch(urls.apiUrl);
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
        <div>
            {/* Code block for terminal-style output */}
            <pre>
                <code>
                    {files
                        .map((file) =>
                            file.type === 'dir' ? `${file.name}/` : file.name
                        )
                        .join('\n')}
                </code>
            </pre>

            {/* Link to source */}
            <p>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    link to source
                </a>
            </p>

        </div>
    );
};

GitHubDirectoryList.propTypes = {
    githubUrl: PropTypes.string.isRequired,
};

export default GitHubDirectoryList;
