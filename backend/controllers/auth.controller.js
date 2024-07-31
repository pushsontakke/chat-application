
const signup = (req, res) => {
    res.send("Hello from Signup Page");
};

const login = (req, res) => {
    res.send("Hello from login Page");
};

const logout = (req, res) => {
    res.send("Hello from logout Page");
};

module.exports = {
    signup, login, logout
}