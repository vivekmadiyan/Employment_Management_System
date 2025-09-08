import React from 'react';

const Header = (props) => {
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
  };

  return (
    <div className="flex h-16 items-center justify-between">
      <div>
        <h1 className="text-xl font-semibold text-neutral-500">
          Hello, <span className="font-bold">{props.data?.firstName || 'User'} 👋</span>
        </h1>
      </div>
      <button
        onClick={logOutUser}
        className="rounded-md bg-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-500 transition hover:bg-neutral-300"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;