import axios from "axios";

const url = "./users"

const signup = (email, password) => {
    return axios
        .post(url + "/signup", {
            email,
            password
        }).then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data))
            }
            return response.data
        }
        )
}

//login 
const login = (email, password) => {
    return axios
        .post(url + "/login", {
            email,
            password
        }).then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data))
            }
            return response.data
        }
        )
}

//logout

const logout = () => {
    localStorage.removeItem("user")
}

//get current user

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
}

const authService = {
    signup,
    login,
    logout,
    getCurrentUser,
}
export default authService;