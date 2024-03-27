
const StyledDiv = ({children}) => {
    const styles = {border: "2px solid black", padding: "10px", margin: "20px"}
    return (
        <div style={styles}>
            {children}
        </div>
    );
}

export default StyledDiv;
