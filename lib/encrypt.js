export default function encrypt(password){
    let base = "";
    const spread = [...password];
    
    spread.forEach(element => {
        base += element.charCodeAt(0) +3;
    });
    
    return base;
}