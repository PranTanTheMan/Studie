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

@app.route('/search-youtube')
def search_youtube():
    query = request.args.get('query')
    # search youtube for the query
    r = requests.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=' + 'learn ' + query + '&key=AIzaSyAYBeWhgOAijtFHeRl_oNSCOCXRyFc2Q8M')
    data = r.json()
    for i in data['items']:
        if i['snippet']['channelTitle'] == 'Tyler Dewitt':
            return {
                'title': i['snippet']['title'],
                'description': i['snippet']['description'],
                'url': 'https://www.youtube.com/watch?v=' + i['id']['videoId'],
                'thumbnail': i['snippet']['thumbnails']['high']['url'],
                'channel': i['snippet']['channelTitle']
            }
        elif i['snippet']['channelTitle'] == 'CrashCourse':
            return {
                'title': i['snippet']['title'],
                'description': i['snippet']['description'],
                'url': 'https://www.youtube.com/watch?v=' + i['id']['videoId'],
                'thumbnail': i['snippet']['thumbnails']['high']['url'],
                'channel': i['snippet']['channelTitle']
            }
    return {
                'title': i['snippet']['title'],
                'description': i['snippet']['description'],
                'url': 'https://www.youtube.com/watch?v=' + i['id']['videoId'],
                'thumbnail': i['snippet']['thumbnails']['high']['url'],
                'channel': i['snippet']['channelTitle']
            }
@app.route('/crew')
def crew():
    return render_template('crew.html')

@app.route('/resources')
def resources():
    return render_template('resources.html')

@app.route('/workspace')
def workspace():
    return render_template('workspace.html')

app.run(debug=True)