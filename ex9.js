var pass = "fgkdghjkdfgkjdf";
var vemdopost = "fgkdghjkdfgkjdf1";

if (pass == vemdopost) {
  document.write("<p>Sistema acessado</p>");
} else {
  document.write("<p>Login</p>");
  document.write("<form action='index.html' method='post'>");
  document.write("<input type='text' name='user' placeholder='Usuario'>");
  document.write("<input type='password' name='pass' placeholder='Senha'>");
  document.write("</form>");
};