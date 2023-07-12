


const Button = ({ toggleLogIn }) => {

    const handleClick = () => {
        // run the toggleLogIn Prop function that hs been passed down from App.jsx
        toggleLogIn()
    }

    return (
        
        <button onClick={handleClick}>create a button and add handleClick callback </button>
        
    )
}

export default Button