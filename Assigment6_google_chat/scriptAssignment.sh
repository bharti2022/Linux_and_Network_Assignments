#!/bin/bash

cd /home/bharts/Assignment/

if [ !  -d "/home/bharts/Assignment/.git" ]
then
	git init
fi	
#if git pull is success then success msg will show in google space
#else failure msg

if [[ ! $(git pull https://github.com/bharti2022/ScriptAssignment.git) ]]
then 
     python3 /home/bharts/failure_message.py
else
     python3 /home/bharts/send_message.py
fi	
