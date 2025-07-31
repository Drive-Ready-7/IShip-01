import './Hackathons.css';
import { useState, useEffect } from 'react';
import Axios from '@api';
import { useNavigate } from 'react-router-dom';

export default function Hackathons() {
    const [hackathons, setHackathons] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); 
}