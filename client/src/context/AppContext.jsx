import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";
import { useNavigate } from 'react-router-dom'

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {

    const navigate = useNavigate()

    const [searchFilter,setSearchFilter] = useState({
        title:'',
        location:''
    })

    const [isSearched,setIsSearched] = useState(false)

    const [ jobs, setJobs ] = useState([])

    const [ showRecruiterLogin, setShowRecruiterLogin ] = useState(false)

    // Function to fetch job data
    const fetchJobs = async () => {
        setJobs(jobsData)
    }

    useEffect(() => {
        fetchJobs()
    },[])

    const value = {
        searchFilter,setSearchFilter,
        isSearched,setIsSearched,
        jobs, setJobs, navigate,
        showRecruiterLogin, setShowRecruiterLogin
    }

    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
} 