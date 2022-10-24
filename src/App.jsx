import Card from './components/Card';
import Button from './components/Button';

function App() {
    return (
        <div className={'bg-slate-900 text-slate-800  grid place-content-center min-h-screen'}>
            <div className={'max-w-2xl flex gap-4 items-center w-full'}>
                <Card>
                    <Card.Title>Halllo</Card.Title>
                    <Card.Body>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis optio quasi est sed soluta commodi ex tempora, nobis omnis,
                        voluptas obcaecati. Vel aperiam iure sapiente voluptas inventore nulla, delectus illo.
                    </Card.Body>
                    
                    <Card.Footer><Button>Register</Button></Card.Footer>
                </Card>
                <Card>
                    <Card.Title>Halllo</Card.Title>
                    <Card.Body>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis optio quasi est sed soluta commodi ex tempora, nobis omnis,
                        voluptas obcaecati. Vel aperiam iure sapiente voluptas inventore nulla, delectus illo.
                    </Card.Body>
                    
                    <Card.Footer><Button>Register</Button></Card.Footer>
                </Card>
            </div>
        </div>
    );
}

export default App;