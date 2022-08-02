from flask import Flask, render_template, request, redirect, url_for, flash, jsonify
import requests
app = Flask(__name__)
app.secret_key = 'secret'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/search-wikepedia')
def search_wikepedia():
    query = request.args.get('query')
    r = requests.get('https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro=&explaintext=&titles=' + query)
    data = r.json()

@app.route('/search_youtube')
def search_youtube():
    query = request.args.get('query')
    # search youtube for the query
    r = requests.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=' + query + '&key=AIzaSyAYBeWhgOAijtFHeRl_oNSCOCXRyFc2Q8M')
    data = r.json()
    return jsonify(data)

app.run(debug=True)