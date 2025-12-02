import { useState, useEffect } from 'react';
import { collection, getCountFromServer, addDoc, query, where } from 'firebase/firestore';
import { db } from '../lib/firebase';

interface UseDownloadCountReturn {
  count: number | null;
  loading: boolean;
  error: string | null;
  increment: () => Promise<void>;
}

export function useDownloadCount(): UseDownloadCountReturn {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getIpAndLocation = async (): Promise<{ ip: string; location: { lat: number; lng: number } | null }> => {
    // Fetch IP address
    const ipResponse = await fetch('https://api.ipify.org?format=json');
    const { ip } = await ipResponse.json();

    // Get user location
    const getLocation = (): Promise<{ lat: number; lng: number } | null> => {
      return new Promise((resolve) => {
        if (!navigator.geolocation) {
          resolve(null);
          return;
        }
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve({ lat: position.coords.latitude, lng: position.coords.longitude });
          },
          (error) => {
            resolve(null); // Handle permission denied or other errors by setting to null
          }
        );
      });
    };

    const location = await getLocation();
    return { ip, location };
  };

  useEffect(() => {
    const fetchDownloadCountAndAddView = async () => {
      // Fetch download count
      try {
        const q = query(collection(db, 'wedflix_downloads'));
        const snapshot = await getCountFromServer(q);
        setCount(snapshot.data().count);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }

      // Add view document
      try {
        const { ip, location } = await getIpAndLocation();
        await addDoc(collection(db, 'wedflix_downloads'), { type: 'view', timestamp: new Date(), ip, location });
      } catch (err) {
        // Optionally handle view addition error, but since it's not critical, ignore
      }
    };

    fetchDownloadCountAndAddView();
  }, []);

  const increment = async () => {
    try {
      const { ip, location } = await getIpAndLocation();

      // Save document with additional data
      await addDoc(collection(db, 'wedflix_downloads'), { type: 'download', timestamp: new Date(), ip, location });

      // Update local count state
      setCount(prev => (prev || 0) + 1);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return { count, loading, error, increment };
}