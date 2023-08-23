import placeholderimg from "../images/placeholder.png"
    
export default function About(){
    return (
 <div>
    <h2>About Me</h2>
    <h3>This is my about me. Spiderman is better looking, so he's my image placeholder</h3>
    <img src={placeholderimg} alt="spiderman" />
 </div>
    );
}
