import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
      <div id="header">
        <h1>Ranking</h1>
      </div>
      <div id="leaderboard">
        <div className="ribbon"></div>
        <table>

          <tr>
            <td class="number">1</td>
            <td><img className='image' /></td>
            <td class="name">Lee Taeyong</td>
            <td className="points">
              34 <img class="gold-medal" src="https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true" alt="gold medal" />
            </td>
          </tr>
          <tr>
            <td className="number">2</td>
            <td><img className='image' /></td>
            <td className="name">Mark Lee</td>
            <td className="points">32</td>
          </tr>
          <tr>
            <td className="number">3</td>
            <td><img className='image' /></td>
            <td className="name">Xiao Dejun</td>
            <td className="points">5</td>
          </tr>



        </table>

      </div>
    </main>

  );
}

export default App;
