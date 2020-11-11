import React from 'react';
import Profile from './task-1/Profile';
import User from './user.json';
import Statistics from './task-2/Statistics';
import Stats from './statistical.json';
import FriendList from './task-3/FriendList'
import Friends from './friends.json'
import TransactionHistory from './task-4/TransactionHistory'
import Transactions from './transactions.json'

export default function App() {

    return (
        <>
            <Profile
                name={User.name}
                tag={User.tag}
                location={User.location}
                avatar={User.avatar}
                stats={User.stats}
            ></Profile>
            <Statistics
                title="Upload stats"
                stats={Stats}
            ></Statistics>
            <FriendList
                friends={Friends}
            ></FriendList>
            <TransactionHistory
                items={Transactions}
            ></TransactionHistory>
        </>
    );
}
