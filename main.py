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
    # pran add your code here, query is the search query

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