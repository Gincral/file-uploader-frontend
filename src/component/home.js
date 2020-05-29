import React from 'react';
import FormData from 'form-data';
import axios from 'axios';

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            img: null,
            dataList: [],
        }
    }

    componentDidMount = () => {
        axios.get(`http://localhost:5000/files`)
            .then(res => {
                this.setState({ dataList: res.data });
            })
            .catch(err => console.log(err));
    }

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

    getAllFiles = (data) => {
        const buffer = data.file.data.data;
        console.log(buffer);
        const bytes = [].slice.call(new Uint8Array(buffer));
        let binary = '';
        bytes.forEach((b) => binary += String.fromCharCode(b));
        const imageStr = window.btoa(binary);
        const base64Flag = 'data:image/jpg;base64,';
        const image = base64Flag + imageStr;
        this.setState({ img: image });
    }

    render() {
        console.log(this.state.dataList);
        return (

            <div>
                <h1>Choose you file</h1>
                <input type='file' className='input' accept=".md, .jpg" onChange={this.selectFile} />
                {this.state.dataList.map(data =>(
                    <button onClick={()=>{this.getAllFiles(data);}}>click get file</button>
                ))}
                <img src={this.state.img} />
            </div>
        );
    }
}

export default Home;