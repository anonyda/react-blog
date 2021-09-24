export const checkError = (err) => {
    let message = '';
    Object.keys(err).forEach((key) => {
        if(err[key].length > 1){
            message = err[key]
        }
    });
    if(!message.length > 0){
        message = "The Server Is Down. Try again later."
    }
    return message;
}
