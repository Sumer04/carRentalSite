class ErrorHandler extends Error{
    constructor(message,statuCode){
        super(message);
        this.statuCodev = statuCode
    }
}
export default ErrorHandler;