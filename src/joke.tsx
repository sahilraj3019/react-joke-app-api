import React, { Component } from 'react';


class Joke extends Component {
    state = {
        loading: true,
        joke: null
    }

    async componentDidMount(){
        const url = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
        const response = await fetch(url);
        const data = await response.json();
        data.type === "single" ? this.setState({joke: data.joke, loading: false}) : this.setState({joke: data.setup + " ... " + data.delivery, loading: false})
    }

    render() {

        if (this.state.loading){
            return <div>Let me come up with a joke...</div>;
        }

        if (!this.state.joke) {
            return <div>Oops... Something went wrong...</div>
        }

        return <div>{this.state.joke}</div>;
    }
}

export default Joke;