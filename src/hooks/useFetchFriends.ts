import { useState, useEffect } from 'react';
import { Friend } from '../types/Friend';
import {BACKEND_URL} from "../utils/constants/backendUrl.ts";

export const useFriends = () => {
    const [friends, setFriends] = useState<Friend[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFriends = async () => {
            try {
                const response = await fetch(BACKEND_URL +'/friends/'); // le pego a la url de friends, con un get.
                if (!response.ok) {
                    throw new Error('Error fetching friends');
                }
                const data = await response.json(); // seteo la respuesta a friends.
                setFriends(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false); // seteo el loading icon a falso.
            }
        };

        fetchFriends(); // llamo al componente con el fetch.
    }, []);

    return { friends, loading, error };
};
