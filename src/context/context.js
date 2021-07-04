import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import RequestService from '../services/request'
import UserService from '../services/user';
import { MdContactPhone } from 'react-icons/md';

const GithubContext = React.createContext();

// Provider Consumer

const GithubProvider = ({ children }) => {
    const [githubUser, setGithubUser] = useState(mockUser);
    const [repos, setRepos] = useState(mockRepos);
    const [followers, setFollowers] = useState(mockFollowers);
    const [requests, setRequests] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({ show: false, msg: '' })

    const toggleError = (show, msg) => {
        setError({ show, msg })
    }

    const checkRequests = async () => {
        try {
            setLoading(true)
            const result = await RequestService.getRequests()
            setRequests(result.data.rate.remaining)
            if (result.data.rate.remaining === 0) {
                toggleError(true, 'Sorry, you have exceeded your hourly rate limit')
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }

    }

    const searchGithubUser = async (user) => {
        try {
            setLoading(true)
            const userData = await UserService.getUser(user)

            console.log(userData)
            if (userData) {
                setGithubUser(userData.data)

                const { repos_url, followers_url } = userData.data

                const followerData = await UserService.getFollowers(followers_url)

                const reposData = await UserService.getRepos(repos_url)

                setFollowers(followerData.data)
                setRepos(reposData.data)
            } else {
                toggleError(true, 'Sorry, there is user with that user name')
            }
        } catch (error) {
            console.log(error)
        } finally {
            checkRequests()
            setLoading(false)
        }
    }


    useEffect(() => {
        checkRequests()
    }, [])

    return (
        <GithubContext.Provider value={{ githubUser, repos, followers, loading, requests, error, searchGithubUser }}>
            {children}
        </GithubContext.Provider>
    )
}

export { GithubContext, GithubProvider };


