import React from 'react'

export const RepoItem = ({ repo }) => {
  return (
    <button className="flex justify-between px-3 py-2 my-1 duration-150 ease-in bg-gray-700 rounded-sm hover:bg-gray-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={12}
        height={12}
        viewBox="0 0 12 12"
        fill="none"
      >
        <circle
          cx={3}
          cy={6}
          r="1.5"
          stroke="white"
          strokeWidth="0.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx={9}
          cy={3}
          r="1.5"
          stroke="white"
          strokeWidth="0.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx={9}
          cy={9}
          r="1.5"
          stroke="white"
          strokeWidth="0.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.34998 5.3499L7.64998 3.6499"
          stroke="white"
          strokeWidth="0.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.34998 6.6499L7.64998 8.3499"
          stroke="white"
          strokeWidth="0.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="ml-1 text-xs leading-3 text-white dark:text-gray-100">
        <a href={repo.html_url}>{repo.name}</a>
      </span>
    </button>
  )
}

export default RepoItem
