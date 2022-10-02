import { Component } from "react"

export class App extends Component {
  state = {
  imgs: [],
  }
  getImages = () => {
    fetch("https://dog.ceo/api/breeds/image/random/5").then(
      (res) => {
        return res.json()
      }
    ).then(
      (res) => {
        console.log(res);
        this.setState({ imgs: res.message })
      }
    )
  };

  render() {
    const { imgs } = this.state;
    const { getImages } = this;
    return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
        <button type="button" onClick={getImages}>Find pictures</button>
        <ul>
          {imgs.map(
            item => <li key={item}><img src={item} alt={item} width="300" /></li>
          )}
        </ul>
    </div>
  );
}
};
