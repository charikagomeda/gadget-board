# Example script for uploading data from gadget
import requests
import os
from datetime import datetime

# Get credentials from environment variables
username = os.environ.get('GADGET_DATA_POSTER_USERNAME', None)
password = os.environ.get('GADGET_DATA_POSTER_PASSWORD', None)
base_url = os.environ.get('GADGET_DATA_POSTER_URL', None)

# Get token
try:
    login_url = base_url + '/backend/api-token-auth/'
    credentials = {'username': username, 'password': password}
    r = requests.post(login_url, json=credentials)
    token = r.json()['token']
except:
    print('No credentials... Exiting')
    exit()

# Prepare payload
gadget_id = "1"
payload = {
    'data': {"battery_v": 3.83, "temp_surface": 14.5, "transmission_id": 46765, "temp_deep": 15.5},
    'timestamp': datetime.now().isoformat()
}
post_url = base_url + '/backend/api/v1/gadgets/' + gadget_id + '/data/'
headers = {'Authorization': 'Bearer ' + token}

# Make request
r = requests.post(post_url, json=payload, headers=headers)
print(r.json())
