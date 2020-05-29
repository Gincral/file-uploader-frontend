import React from 'react';
import FormData from 'form-data';
import axios from 'axios';

class Home extends React.Component {

    selectFile = (e) => {
        const url = URL.createObjectURL(e.target.files[0]);
        const file = Array.from(e.target.files)[0];
        const date = new Date();
        const data = new FormData();
        data.append('file', file, 'file');
        data.append('date', '2020-01-01T00:00:00.000+00:00');
        data.append('username', 'haha');
        axios.post(`http://localhost:5000/file`, data, {
            headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': `multipart/form-data; boundary=${data._boundary}`
            }
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }


    render() {
        return (

            <div>
                <input type='file' className='input' accept=".md, .jpg" onChange={this.selectFile}/>
            </div>
        );
    }
}

export default Home;