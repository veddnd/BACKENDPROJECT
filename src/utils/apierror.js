class apierror extends Error{
    constructor(
        statuscode,
        message= "something went wrong",
        error=[],
        stack=""
    ){
        super(message)
        this.statuscode= statuscode,
        this.data=null
        this.message=message,
        this.success= false,
        this.errors=errors
    }
}
export {apierror}