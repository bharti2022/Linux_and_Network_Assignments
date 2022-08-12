#!/bin/python3

from json import dumps
from httplib2 import Http

def main():
    """Send message via Hangouts Chat incoming webhook"""
    url = 'https://chat.googleapis.com/v1/spaces/AAAA_HerXTU/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=FpdINKhgWAAzYCqsBR2YO_Cs1U8LcQmETxDc95-4rL0%3D'
    message = {
        'text' : 'pull command failed try again'}

    message_headers = {'Content-Type': 'application/json; charset=UTF-8'}

    http_obj = Http()

    response = http_obj.request(
        uri=url,
        method='POST',
        headers=message_headers,
        body=dumps(message),
    )

    print(response)

if __name__ == '__main__':
    main()
