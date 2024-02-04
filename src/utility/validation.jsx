export const formValidation = (email, password) =>{
 
const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

if(!isEmailValid) return "Invalid Email Address"
if(!isPasswordValid) return "Worng Password"

return null
}
