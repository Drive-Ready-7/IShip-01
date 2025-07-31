import './InternShips.css';
import { useState, useEffect } from 'react';
import Axios from '@api';
import { useNavigate } from 'react-router-dom'; 

export default function Internships() {
    const [internships, setInternships] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
}