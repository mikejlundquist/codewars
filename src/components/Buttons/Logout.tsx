import { auth } from '@/firebase/firebase';
import Link from 'next/link';
import React from 'react';
import { useSignOut } from 'react-firebase-hooks/auth';
import { FiLogOut } from 'react-icons/fi';


const Logout:React.FC = () => {
    const [signOut, loading, error] = useSignOut(auth);
    const handleLogout = () => {
        signOut();
    }

    return (
    <Link href='/auth'>
        <button className='bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange' onClick={handleLogout}>
            <FiLogOut />
        </button>
    </Link>
    );
};
export default Logout;