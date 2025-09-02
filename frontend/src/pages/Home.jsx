import { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import RateLimitUI from '../components/RateLimitUI';
import axios from 'axios'

const Home = () => {
  const [rateLimited, setRateLimited] = useState(false);
  const [notes, setNote] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:/api/notes");
        console.log(res.data)
        setNote(res.data);
        setRateLimited(false);

      } catch (err) {
        if (err.response?.status === 429) {
          setRateLimited(true);
        } else {
          toast.error("Error fetching the data", err);
        }

      } finally {
        setLoading(false);
      }
    }
    fetchNotes();
  }, []);

  return (
    <div>
      <div className='rate-limit-container'>
        {rateLimited && <RateLimitUI />}
      </div>
      <div className="note-container">
        {loading && <div>Loading Note...</div>}
        {notes.length > 0 && !rateLimited && (
          <div className='note-container'>
            {notes.map(() => {
              <noteCard
                
              />
            })}

          </div>
        )}

      </div>
    </div>
  )
}

export default Home
