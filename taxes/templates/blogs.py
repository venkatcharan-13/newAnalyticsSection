from curses import erasechar
import imp
import requests
from bs4 import BeautifulSoup

url='https://www.jordensky.com/resources/blog'

r=requests.get(url)
htmlContent=r.content



# with open("index.html","w",encoding="utf-8") as fp:
#     fp.write(soup.prettify())

# for classes in soup.find_all('a'):
#     print(classes.get('href'))

# print(soup.a['class'])

from bs4 import SoupStrainer

onlyBlogsContent=SoupStrainer(id="blog_section")
soup=BeautifulSoup(htmlContent,'html.parser' )
 



# first_link = soup('a')[0]
# print first_link
# # <a href="//stackoverflow.com">current community</a>
# first_link['href'] = first_link['href'].replace('//', 'http://')
# print first_link
# <a href="http://stackoverflow.com">current community</a>
for i in soup.find_all('a'):
    a=i.get('href')
    i['href']=i['href'].replace(a,url+a)
    # print(i.get('href'))

with open("index.html","w",encoding="utf-8") as fp:
    fp.write(soup.prettify())
# print(soup.prettify())




