"use client"
import React, { useEffect } from 'react'
import { useMutation } from 'convex/react'
import { useUser } from '@stackframe/stack'
function AuthProvider({chldern}) {

     const user=useUser();
     const CreateUser=useMutation(api.users.CreateUser);

     useEffect(() => {
        console.log(user)
        user&&CreateNewUser();
     },[user]);

     const CreateNewUser=async()=>{
        const result=await CreateUser({
            name:user?.displayname,
            email:user.primaryemail
        });
        console.log(result);

     }


  return (
    <div>
        {chldern}
        </div>
  )
}

export default AuthProvider