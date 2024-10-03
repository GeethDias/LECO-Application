import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './MyProfileView.css'; // Add this CSS file for styling

const MyProfile = ({ user }) => {
    const [userProfile, setUserProfile] = useState(null);
    const [userMarks, setUserMarks] = useState([]);
    const navigate = useNavigate(); // To navigate back

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const userId = user?.id;
                if (!userId) {
                    console.error("User ID is undefined");
                    return;
                }

                // Fetch user profile data
                const profileResponse = await axios.get(`/api/user/profile`, {
                    params: { userId }
                });
                setUserProfile(profileResponse.data);

                // Fetch user marks
                const marksResponse = await axios.get(`/api/user/marks`, {
                    params: { userId }
                });
                setUserMarks(marksResponse.data);
            } catch (error) {
                console.error("Error fetching profile or marks data:", error);
            }
        };

        fetchProfile();
    }, [user]);

    if (!userProfile) return <div>Loading...</div>;

    return (
        <div className="profile-container">
            <h1 className="profile-header">My Profile</h1>
            <div className="profile-details">
                <p><strong>Full Name:</strong> {userProfile.fullName}</p>
                <p><strong>Email:</strong> {userProfile.email}</p>
                <p><strong>Department:</strong> {userProfile.department}</p>
                <p><strong>Employment ID:</strong> {userProfile.employmentId}</p>
            </div>

            <h2 className="marks-header">Marks for Modules</h2>
            <ul className="marks-list">
                {userMarks.map((mark, index) => (
                    <li key={index} className="marks-item">
                        <strong>Module:</strong> {mark.moduleName} - 
                        <strong>Previous Marks:</strong> {mark.previousMarks}, 
                        <strong>New Marks:</strong> {mark.newMarks}
                    </li>
                ))}
            </ul>

            {/* Go Back Button */}
            <button className="go-back-btn" onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
}

export default MyProfile;
