const token = localStorage.getItem('token')
if (!token){
  location.replace("/signin.html")
}