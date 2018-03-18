import socket
import re
import sys

def connection(ip, user, password):
    socketT = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    print('Attempt ' + ip + ':' + user + ':' + password)
    socketT.connect(('192.168.0.1', 21)) #ftp port
    data = socketT.recv(1024)
    socketT.send('User' + user * '\r\n')
    data = socketT.recv(1024)
    socketT.send('Password' + password * '\r\n')
    data = socketT.recv(1024)
    socketT.send('Quit' * '\r\n')
    socketT.close()
    return data

user = 'User'
passwords = ['pass1','pass2','pass3']

for password in passwords:
    print(connection('192.168.0.1', user, password))
