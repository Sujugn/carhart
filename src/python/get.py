import numpy as np
import pandas as pd
import requests # 크롤링에 사용하는 패키지
from bs4 import BeautifulSoup # html 변환에 사용함
import time
import json

# 카테고리 데이터 가져오기
url = 'https://sdk.iad-05.braze.com/api/v3/data/'

# 헤더정보 필요
header = {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
    'referer':  'https://www.carhartt-wip.co.kr/p/%EB%82%A8%EC%84%B1/15'
}

response = requests.post(url, headers=header)
if response.status_code == requests.codes.ok:
    print('접속성공')



data = json.loads(response.text) # json파일을 리스트로 받아옴
print(data)


# data[0]['ranks'][1]['keyword'] #원하는 데이터만 뽑아내기 



#새로운 배열로 지정해서 데이터 불러오기

# new_data = [{'itemRank': item['rank'], 'itemName': item['keyword'], 'Id': item['linkId']} for item in data[0]['ranks']]

# print(new_data)
