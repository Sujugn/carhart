import requests
from bs4 import BeautifulSoup
import json
from pprint import pprint


res = requests.get('https://www.carhartt-wip.co.kr/')

data = json.loads(res.content)
print(data['channel']['title'])

