import './Jobs.css';
import { useState, useEffect } from 'react';
import Axios from '@api';
import { useNavigate } from 'react-router-dom';


export default function Jobs() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); 
   return (
        <div className="jobs-container">
            <h1>Available Jobs</h1> 
        
        </div>
   )   
}