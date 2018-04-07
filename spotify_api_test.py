import requests
import json
from pprint import pprint

CLIENT_ID = ""
CLIENT_SECRET = ""

url_auth = 'https://accounts.spotify.com/api/token'


resp1 = requests.post(url_auth, {
    'grant_type': 'client_credentials',
    'client_id': CLIENT_ID,
    'client_secret': CLIENT_SECRET,
})

auth_data = resp1.json()
token = auth_data['access_token']

_curl_h = {'Authorization': 'Bearer {token}'.format(token=token)}

name = requests.get('https://api.spotify.com/v1/artists/0OdUWJ0sBjDrqHygGUXeCF', headers=_curl_h)
name_pom = name.json()
pprint(name_pom)



