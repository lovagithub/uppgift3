export const validateText = (elementName: string, value: string, minLength:number = 2) => {
if (value.length == 0)
    return `${elementName} is required`
    else if (value.length < minLength)
        return `${elementName} must contain a least ${minLength} characters`
    else 
    return ''
}
export const validateEmail = (elementName: string, value: string, regEx: RegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) => {
    if (value.length == 0)
        return `${elementName} is required`
        else if (!regEx.test(value))
            return `${elementName} must be a valid e-mail adress`
        else 
        return ''
    }