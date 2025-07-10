"use client"
import React, { useEffect } from 'react'
import { useMutation } from 'convex/react'
import { useUser } from '@stackframe/stack'
function AuthProvider({chldern}) {

     const user=useUser();
     const CreateUser=useMutation(api.users.CreateUser);
     const [userData, setUserData] = useState();

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
        setUserData(result);

     }


  return (
    <div>
        <UserContext.Provider value={{ userData, setUserData}}>
            {childen}
        </UserContext.Provider>
        {chldern}
        </div>
  )
}

export default AuthProvider