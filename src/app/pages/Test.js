import React, { useEffect, useState } from 'react'
import axios from 'axios'



export default function Test() {

    const [userDataProfile, setUserDataProfile] = useState([])
    console.log(userDataProfile);

    const [page, setPage] = useState(2)

    useEffect(() => {
        axios.get(`https://www.randomuser.me/api?page=${page}`, {

        }).then((res) => {
            setUserDataProfile(res.data.results)
            // console.log(res.data.results);
        })
    }, [page])


    const [counter, setCounter] = useState(0)
    // const [newUserInfo, setNewUserInfo] = useState([])

    const NewUserInfo = [
        ...userDataProfile 
    ]
    
    const Decrement = () => {
        setPage(k => k - 1)
    }


    return (
        <>
            <button onClick={() => setPage(page + 1)}>Plus</button>
            <div>{page}</div>
            <button onClick={() => Decrement()}>Minus</button>
            {userDataProfile.map(user => (
                <div key={user.phone}>
                    <div >{user.name.first}</div>
                    <img src={user.picture.large} alt="" />

                </div>
            )

            )}
            <main>
                {/* {userDataProfile.name?.first}
                {userDataProfile.name?.last}

                <img src={userDataProfile?.picture?.large} alt="" /> */}

            </main>
        </>
    )
}
