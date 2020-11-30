import React from 'react';
import Profile from './components/Profile/Profile';
import User from './data/user.json';
import Statistics from './components/Statistics/Statistics';
import Stats from './data/statistical.json';
import FriendList from './components/FriendList/FriendList'
import Friends from './data/friends.json'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'
import Transactions from './data/transactions.json'

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
