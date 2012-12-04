#!/usr/bin/env python
from flask import Flask, jsonify, render_template, request
app = Flask(__name__)

players = {}

@app.route("/")
def play():
    return render_template('index.html')

if __name__ == "__main__":
    app.run()
