# Python http.server barebones
# How to run "python Server.py"
#A fter run, open at http://localhost:8080/
from http.server import BaseHTTPRequestHandler, HTTPServer
from http.client import HTTPResponse
import time

#Hostname and port
hostName = "localhost"
serverPort = 8080

# Handles the index.html
class MyServer(BaseHTTPRequestHandler):
    def do_GET(self):

        if self.path == '/':
            self.path  = '/index.html'

            try:
                Stuff_open = open(self.path[1:]).read()
                self.send_response(200)
            except:
                Stuff_open = "File not found"
                self.send_response(404)
            self.end_headers()
            self.wfile.write(bytes(Stuff_open, 'utf-8'))

#Startup     
if __name__ == "__main__":        
    webServer = HTTPServer((hostName, serverPort), MyServer)
    print("Server started http://%s:%s" % (hostName, serverPort))
    try:
        webServer.serve_forever()
    except KeyboardInterrupt:
        pass
        
    webServer.server_close()
    print("Server stopped.")