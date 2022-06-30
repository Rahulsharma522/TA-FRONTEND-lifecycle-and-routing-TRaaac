import React from "react";

import Header from "./header";

class Language extends React.Component {
    constructor(props) {
        super()
        this.state = ({
            data: null,
        })
        // console.log(data)
    }

    componentDidMount() {
        fetch('https://api.github.com/search/repositories?q=stars:%3E1+language:All&sort=stars&order=desc&type=Repositories')
            .then((res) => res.json())
            .then((data) => this.setState({ data }))

        // .then((res)=>res.json())
        // .then((data)=>{console.log(data) })
    }

    handleclick = (event) => {
        let value = event.target.innerText
        console.log(value)

        fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:${value}&sort=stars&order=desc&type=Repositories`)
            .then((res) => res.json())
            .then((data) => this.setState({ data }))

        //         .then((res)=>res.json())
        // .then((data)=>{console.log(data) })

    }

    render() {
        if (!this.state.data) {
            return (
                <>
                    <h2> Repo Fetching...</h2>
                </>
            )
        }
        return (
            <>
                <Header />
                <div className="btns">
                    {
                        ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"].map((btn) => {
                            return (
                                <div  >
                                    <button className="langbtn" onClick={(event) => { this.handleclick(event) }}>{btn}</button>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="alllang">
                    {

                        this.state.data.items.map((lang, i) => {

                            return (

                                <div className="lang">
                                    <div className="headerlang">
                                        <small>#{1 + i}</small>
                                        <figure>
                                        </figure>
                                        <h3>{lang.name}</h3>
                                    </div>
                                    <div className="langfeature">
                                        <p className="name"><i class="fas fa-user"></i>{lang.name}</p>
                                        <p className="number"> <i class="fas fa-star"></i>{lang.stargazers_count}<small className="numbersmall"> stars</small></p>
                                        <p className="number"><i class="fas fa-code-branch"></i>{lang.forks} <small className="numbersmall">forks</small></p>
                                        <p className="number"><i class="fas fa-exclamation-triangle"></i>{lang.open_issues}<small className="numbersmall" >open issues</small></p>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>


            </>
        )
    }

}


export default Language