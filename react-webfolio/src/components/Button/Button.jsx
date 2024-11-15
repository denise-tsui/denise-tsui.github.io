export function Button({text, color}) {


    let displayString = "Download PDF"
    
    return(      
        // in-line css styling in javascript
        <button style={{backgroundColor: color}}> 
            <p>{text}</p>
        </button>
    )
}