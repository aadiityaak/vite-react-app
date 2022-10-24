import { useState } from 'react';
import Card from './components/Card';
import Input from './components/Input';
import Label from './components/Label';
import Button from './components/Button';
import PlaceContentCenter from './components/PlaceContentCenter';
import { IconBrandGithub } from '@tabler/icons';

function App() {
    const [form, setform] = useState({
        name: '',
        email: '',
    });

    function onChange(event) {
        setform({ ...form, [event.target.name]: event.target.value });
    }

    function submit(event) {
        event.preventDefault();
        console.log(form);
    }

    return (
        <PlaceContentCenter>
            <Card>
                <Card.Title>Sign up for new account!</Card.Title>
                <form onSubmit={submit}>
                    <Card.Body>
                        <div className=''>
                            Name: {form.name || '.....'}, Email: {form.email || '.....'}
                        </div>
                        <div className='mb-6'>
                            <Label htmlFor='name' value={'Name'} />
                            <Input value={form.name} onChange={onChange} id={'name'} name={'name'} />
                        </div>
                        <div className='mb-2'>
                            <Label htmlFor='email' value={'Email'} />
                            <Input value={form.email} onChange={onChange} id={'email'} name={'email'} />
                        </div>
                    </Card.Body>
                    <Card.Footer>
                        <Button type="submit">
                            <IconBrandGithub/>
                            Register
                        </Button>
                    </Card.Footer>
                </form>
                
            </Card>
        </PlaceContentCenter>
    );
}

export default App;
