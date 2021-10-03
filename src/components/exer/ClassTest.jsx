import React, {useState} from 'react';
import axios from "axios";


URL = ""
export default class ClassTest extends React.Component {
    constructor(props) {
        super(props);

        // useStateに相当するもの
        this.state = {
            articles: []
        }
    }

    fetchAricles = async () => {
        try {
            const response =await axios.get(URL)
        //    setStateに相当する
            this.setState({articles:response.data.articles});
        } catch (error) {
            console.log(error)
        }
    }

}