from flask import Flask, request, make_response
import requests
import json

app = Flask(__name__)

@app.route('/', methods = ['GET'])
def parse():
    a = request.args.get('username')
    return a

app.run(port=1000, debug=True)