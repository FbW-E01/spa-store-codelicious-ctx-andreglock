import { useContext } from "react";
import { Theme } from "../contexts/Theme";
import { UserContext } from "../contexts/UserContext";

export default function Heading() {
    const { user } = useContext(UserContext);
    const { theme, setTheme } = useContext(Theme);

    return (
        <div className="heading">
            <p>
                Welcome, {user.name}, &nbsp;
                <a href="#" onClick={() => { setUser(null) }}>Log out</a>
            </p>
            <hr/>
            <p>Switch theme</p>
            <select onChange={(e) => {  
                setTheme(e.target.value)
                console.log('changed to:', e.target.value)
                }}>
                <option value="light">Light blue</option>
                <option value="dark">Dark green</option>
            </select>
            <hr/>
        </div>
    );
}