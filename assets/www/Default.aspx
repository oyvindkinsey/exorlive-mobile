<%
    
    Context.Response.ContentEncoding = System.Text.Encoding.UTF8
    Context.Response.ContentType = "text/html"
    Context.Response.WriteFile(AppDomain.CurrentDomain.BaseDirectory & "\mobile\jq\index.html")
    
    %>