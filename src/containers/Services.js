import React from "react";
const API_KEY = "7431dc8c5bc942c79e32c796fdfd617e"
const baseURL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

const Services = {

    getNews () {
        return fetch(baseURL)
        .then(data => data.json())
    }
}

export default Services;