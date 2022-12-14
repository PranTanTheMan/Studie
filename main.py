from flask import Flask, render_template, request, redirect, url_for, flash, jsonify
import requests, json
app = Flask(__name__)
app.secret_key = 'secret'

API_KEY = 'AIzaSyAYBeWhgOAijtFHeRl_oNSCOCXRyFc2Q8M'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/search-wikipedia')
def search_wikepedia():
    query = request.args.get('query')
    r = requests.get(f'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch={query}&format=json')
    data = r.json()['query']['search']
    return jsonify(data)

@app.route('/search-youtube')
def search_youtube():
    query = request.args.get('query')
    # search youtube for the query
    r = requests.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=' + 'learn ' + query + '&key=' + API_KEY)
    data = r.json()
    print(data)
    for i in data['items']:
        if i['snippet']['channelTitle'] == 'Tyler Dewitt':
            data = {
                'title': i['snippet']['title'],
                'description': i['snippet']['description'],
                'url': 'https://www.youtube.com/watch?v=' + i['id']['videoId'],
                'thumbnail': i['snippet']['thumbnails']['high']['url'],
                'channel': i['snippet']['channelTitle']
            }
            return jsonify(data)
        elif i['snippet']['channelTitle'] == 'CrashCourse':
            data = {
                'title': i['snippet']['title'],
                'description': i['snippet']['description'],
                'url': 'https://www.youtube.com/watch?v=' + i['id']['videoId'],
                'thumbnail': i['snippet']['thumbnails']['high']['url'],
                'channel': i['snippet']['channelTitle']
            }
            return jsonify(data)
    data = {
                'title': i['snippet']['title'],
                'description': i['snippet']['description'],
                'url': 'https://www.youtube.com/watch?v=' + i['id']['videoId'],
                'thumbnail': i['snippet']['thumbnails']['high']['url'],
                'channel': i['snippet']['channelTitle']
            }
    return jsonify(data)
@app.route('/crew')
def crew():
    return render_template('crew.html')



card_info = [
    {'title': 'Pomodoro Timer', 'descripton': ' A pleasingly aesthetic timer using pomodoro technique that enahnces your productivity.', 'links': '/timer'},
]



@app.route('/resources')
def resources():
    return render_template('resources.html', cards = card_info)
#alr so what should we work on next?
@app.route('/workspace')
def workspace():
    return render_template('workspace.html')

@app.route('/youtube')
def yt():
    return render_template('youtube-search.html')

@app.route('/wikipedia')
def wiki():
    return render_template('wiki-search.html')

@app.route('/music')
def music():
    return render_template('musictest.html')

@app.route('/timer')
def timer():
    return render_template('timer.html')

@app.rout('/404')
def error():
    return render_template('404.html')
app.run(debug=True)