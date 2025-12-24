import React from 'react';

export const HotFreshIcon = ({ className = "w-5 h-5" }: { className?: string }) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M12 21C16.9706 21 21 16.9706 21 12C21 12 21 10 19 10C17 10 17 12 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 12 7 10 5 10C3 10 3 12 3 12C3 16.9706 7.02944 21 12 21Z"
                fill="currentColor"
                fillOpacity="0.2"
            />
            <path
                d="M12 15C12 15 13.5 13 13.5 10.5C13.5 8 12 6 12 6C12 6 10.5 8 10.5 10.5C10.5 13 12 15 12 15Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M16.5 13C16.5 13 17.5 11.5 17.5 9.5C17.5 7.5 16.5 6 16.5 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7.5 13C7.5 13 6.5 11.5 6.5 9.5C6.5 7.5 7.5 6 7.5 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M4 14C4 17.866 7.58172 21 12 21C16.4183 21 20 17.866 20 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
