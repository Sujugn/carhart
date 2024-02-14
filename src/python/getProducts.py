from stringgetter import getPageString
from bs4 import BeautifulSoup

def getProducts(string):
    bsObj = BeautifulSoup(string, "html.parser")
    items = bsObj.find("ul", {"id":"productitemt"})  #아이템 리스트부분 추출
    item = ul.findAll("li", {"class":"baby-product renew-badge"}) #각 아이템 추출

    for item in item:
        #url
        a = item.find("a", {"class": "baby-product-link"})
        url = a.get('href')
        print("url:", url)

        #name
        div_name = item.find("div", {"class":"name"})
        name = div_name.getText()
        print("name:", name)

        #image
        dt_image = item.find("dt", {"class":"image"})
        image = dt_image.find("img").get('src')
        print("image:", image)

        #price
        price = item.find("strong", {"class":"price-value"}).getText()
        print("price:", price)

    print(len(item))
    return []

url = "https://www.carhartt-wip.co.kr/p/%EB%82%A8%EC%84%B1/15"

pageString = getPageString(url)

print(items[0].find("div", attrs={"class":"name"}).get_text())

# print(getProducts(pageString))
