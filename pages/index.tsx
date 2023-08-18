import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { getUsers } from '@/components/fetSlice';

// Rename the component to start with an uppercase letter
function Index() {
  const dispatch = useDispatch(); // Get the dispatch function from react-redux
  
  useEffect(() => {
    dispatch(getUsers()); // Dispatch the action using the dispatch function
  }, [dispatch]);
  
  return (
    <main className='text-3xl font-extrabold underline font-mono hover:opacity-50 cursor-pointer hover:no-underline'>
      {/* Your component content */}
    </main>
  );
}

export default Index; // Export the component with the updated name
