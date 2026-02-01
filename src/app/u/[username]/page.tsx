"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { getUserProfile } from "@/services/auth";
import Loading from "@/components/Layout/Loading";
import UserNotFound from "@/components/Layout/UserNotFound";
import PrivateProfilePage from "@/components/Profile/Private";
import PublicProfilePage from "@/components/Profile/Public";

export default function UserPage() {
    const { username } = useParams<{username: string}>();
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async() => {
            try {
                const res = await getUserProfile(username);
                console.log(res.data);
                setUser(res.data);
            } catch(err: any) {
                console.log("Error: ", err);
            } finally {
                setLoading(false);
            }
        }

        fetchUser();
    }, [username]);

    if(loading) return <Loading/>

    if(!user) return <UserNotFound/>

    console.log(user);
    return(
        <>
            {(user?.isPrivate)? 
            <PrivateProfilePage 
                username={user.username} 
                src={user.profileImage}
                /> 
            :  <PublicProfilePage 
                username={user.username} 
                fullname={user.fullname}
                about={user.about}
                src={user.profileImage}
                thoughts={user.content}
                />
            }
        </>
    );
}

//Something