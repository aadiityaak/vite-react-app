import Counter from './components/Counter';
import PlaceContentCenter from './components/PlaceContentCenter';

function App() {
    return (
        <PlaceContentCenter>
            <Counter initialValue={10} />
        </PlaceContentCenter>
    );
}

export default App;
